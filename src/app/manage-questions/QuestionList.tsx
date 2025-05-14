'use client';

import { FC, useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MCQQuestion, MCQOption } from '@/types/mcq';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface QuestionsListProps {
  questions: MCQQuestion[];
  handleEdit: (question: MCQQuestion) => void;
  handleDelete: (id: string) => void;
}

const QuestionsList: FC<QuestionsListProps> = ({ questions, handleEdit, handleDelete }) => {
  const [search, setSearch] = useState('');
  const [compactView, setCompactView] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>(''); // empty means no filter

  // Extract unique tag
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    questions.forEach(q => q.tag?.forEach(tag => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [questions]);

  // Fuse.js setup
  const fuse = useMemo(() => {
    return new Fuse(questions, {
      keys: ['question', 'options.A', 'options.B', 'options.C', 'options.D', 'notes', 'tag'],
      threshold: 0.4,
    });
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    const base = search.trim() ? fuse.search(search).map(res => res.item) : questions;
    if (!selectedTag || selectedTag === "@all") return base;
    return base.filter(q => q.tag?.includes(selectedTag));
  }, [search, selectedTag, fuse, questions]);

  return (
    <div className='flex flex-col h-full space-y-5 min-w-1/2 w-full'>
      <div className='flex flex-col space-y-2 h-full'>
        <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
          <h2 className="text-xl font-semibold">All Questions ({filteredQuestions.length})</h2>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setCompactView(prev => !prev)}
          >
            {compactView ? 'Show All Details' : 'Compact View'}
          </Button>
        </div>

        <Input
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select onValueChange={setSelectedTag} value={selectedTag}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by tag (optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="@all">All Tags</SelectItem>
            {allTags.map(tag => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="md:col-span-1 rounded space-y-4 w-full overflow-clip flex flex-col h-[750px]">
        <ScrollArea className="mt-4 h-full">
          <div className="flex flex-col space-y-8 h-full">
            {filteredQuestions.map((q) => (
              <div key={q.id} className="border-b pb-4">
                <div className="font-semibold mb-1">{q.question}</div>

                {!compactView && (
                  <>
                    <ul className="mb-2">
                      {(Object.entries(q.options) as [MCQOption, string][]).map(([opt, val]) => (
                        <li
                          key={opt}
                          className={q.correctAnswers.includes(opt) ? 'font-bold text-green-600' : ''}
                        >
                          {opt}. {val}
                        </li>
                      ))}
                    </ul>
                    {q.notes && <p className="text-sm italic mb-2">Notes: {q.notes}</p>}
                  </>
                )}

                {q.tag && q.tag.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {q.tag.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                )}

                <div className="flex space-x-4 mt-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(q)}>
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(q.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}

            {filteredQuestions.length === 0 && (
              <div className="text-center text-muted-foreground italic">
                No matching questions found.
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default QuestionsList;
