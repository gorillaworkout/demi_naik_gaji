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
  handleInputChange: (field: string, value: any, option?: MCQOption) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
}

const QuestionEditor: FC<QuestionEditorProps> = ({
  isEditing,
  currentQuestion,
  handleInputChange,
  handleSubmit,
  resetForm,
}) => {
  const [isJsonMode, setIsJsonMode] = useState(false);
  const [jsonError, setJsonError] = useState('');
  const [formError, setFormError] = useState('');

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