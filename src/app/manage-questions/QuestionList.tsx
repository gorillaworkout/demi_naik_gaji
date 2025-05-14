'use client';

import { FC, useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MCQQuestion, MCQOption } from '@/types/mcq';

interface QuestionsListProps {
  questions: MCQQuestion[];
  handleEdit: (question: MCQQuestion) => void;
  handleDelete: (id: string) => void;
}

const QuestionsList: FC<QuestionsListProps> = ({ questions, handleEdit, handleDelete }) => {
  const [search, setSearch] = useState('');
  const [compactView, setCompactView] = useState(false);

  // Fuse.js setup
  const fuse = useMemo(() => {
    return new Fuse(questions, {
      keys: ['question', 'options.A', 'options.B', 'options.C', 'options.D', 'notes'],
      threshold: 0.4,
    });
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    if (!search.trim()) return questions;
    return fuse.search(search).map(result => result.item);
  }, [search, fuse, questions]);

  return (
    <div className="md:col-span-1 border rounded p-4 space-y-4 w-full overflow-clip flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">All Questions</h2>
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
        className="mb-2"
      />

      <div className="flex flex-col space-y-8 overflow-y-auto h-full">
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
          <div className="text-center text-muted-foreground italic">No matching questions found.</div>
        )}
      </div>
    </div>
  );
};

export default QuestionsList;
