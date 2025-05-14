import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MCQOption, MCQQuestion } from '@/types/mcq';

interface QuestionEditorProps {
  isEditing: boolean;
  currentQuestion: Partial<MCQQuestion>;
  allTags: string[];
  handleInputChange: (field: string, value: any, option?: MCQOption) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
}

const QuestionEditor: FC<QuestionEditorProps> = ({
  isEditing,
  currentQuestion,
  allTags,
  handleInputChange,
  handleSubmit,
  resetForm,
}) => {
  const [isJsonMode, setIsJsonMode] = useState(false);
  const [jsonError, setJsonError] = useState('');
  const [formError, setFormError] = useState('');
  const [tagInput, setTagInput] = useState('');

  const toggleJsonMode = () => {
    setIsJsonMode((prev) => !prev);
    setFormError('');
  };

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const parsedJson = JSON.parse(e.target.value);
      setJsonError('');
      setFormError('');
      handleInputChange('json', parsedJson);
    } catch (error) {
      setJsonError('Invalid JSON format');
    }
  };

  const toggleCorrectAnswer = (option: MCQOption) => {
    const current = currentQuestion.correctAnswers || [];
    const updated = current.includes(option)
      ? current.filter((o) => o !== option)
      : [...current, option];

    handleInputChange('correctAnswers', updated);
    setFormError('');
  };

  const handleValidatedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = currentQuestion.correctAnswers || [];
    if (correct.length < 1) {
      setFormError('Please select at least one correct answer.');
      return;
    }
    if (correct.length > 3) {
      setFormError('You can select at most three correct answers.');
      return;
    }
    setFormError('');
    handleSubmit(e);
  };

  const addTag = (tag: string) => {
    const trimmed = tag.trim();
    if (
      trimmed &&
      !currentQuestion.tag?.includes(trimmed)
    ) {
      handleInputChange('tag', [...(currentQuestion.tag || []), trimmed]);
    }
    setTagInput('');
  };

  const removeTag = (index: number) => {
    const updated = currentQuestion.tag?.filter((_, i) => i !== index) || [];
    handleInputChange('tag', updated);
  };

  const filteredSuggestions = allTags
    .filter(
      (t) =>
        t.toLowerCase().includes(tagInput.toLowerCase()) &&
        !currentQuestion.tag?.includes(t)
    )
    .slice(0, 5);

  return (
    <div className="md:col-span-2 border rounded p-4 w-full">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? 'Edit Question' : 'Add New Question'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-end mb-4">
            <Button variant="outline" type="button" onClick={toggleJsonMode}>
              {isJsonMode ? 'Switch to Form' : 'Switch to JSON'}
            </Button>
          </div>

          {isJsonMode ? (
            <div>
              <Textarea
                placeholder="Edit Question as JSON"
                value={JSON.stringify(currentQuestion, null, 2)}
                onChange={handleJsonChange}
                className="min-h-[200px]"
              />
              {jsonError && <p className="text-red-500 text-sm mt-2">{jsonError}</p>}
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="secondary" type="button" onClick={resetForm}>
                  Cancel
                </Button>
                <Button type="submit" onClick={handleValidatedSubmit}>
                  {isEditing ? 'Update' : 'Add'} Question
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleValidatedSubmit} className="space-y-4">
              <Textarea
                placeholder="Question text"
                value={currentQuestion.question || ''}
                onChange={(e) => handleInputChange('question', e.target.value)}
                required
              />

              {(['A', 'B', 'C', 'D'] as MCQOption[]).map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    checked={currentQuestion.correctAnswers?.includes(option)}
                    onCheckedChange={() => toggleCorrectAnswer(option)}
                  />
                  <Input
                    value={currentQuestion.options?.[option] || ''}
                    onChange={(e) => handleInputChange('options', e.target.value, option)}
                    placeholder={`Option ${option}`}
                    required
                  />
                </div>
              ))}

              <Textarea
                placeholder="Optional notes"
                value={currentQuestion.notes || ''}
                onChange={(e) => handleInputChange('notes', e.target.value)}
              />

              {/* ✅ Tags Autocomplete Section */}
              <div>
                <label className="block font-semibold mb-1">Tags</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {currentQuestion.tag?.map((tag, idx) => (
                    <div
                      key={idx}
                      className="flex items-center bg-gray-200 rounded px-2 py-1 text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(idx)}
                        className="ml-1 text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <Input
                    placeholder="Add a tag"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addTag(tagInput);
                      }
                    }}
                  />
                  {tagInput && filteredSuggestions.length > 0 && (
                    <ul className="absolute z-10 bg-white border rounded mt-1 w-full max-h-40 overflow-auto shadow-md">
                      {filteredSuggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                          onClick={() => addTag(suggestion)}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {formError && <p className="text-red-500 text-sm">{formError}</p>}

              <div className="flex justify-end space-x-2">
                {isEditing && (
                  <Button variant="secondary" type="button" onClick={resetForm}>
                    Cancel
                  </Button>
                )}
                <Button type="submit">{isEditing ? 'Update' : 'Add'} Question</Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionEditor;