'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MCQQuestion, MCQOption } from '@/types/mcq';

interface QuestionListProps {
  questions: MCQQuestion[];
  currentId: string | null;
  setCurrentId: (id: string) => void;
  submitted: boolean;
  userAnswers: Record<string, MCQOption[]>;
}

export default function QuestionList({
  questions,
  currentId,
  setCurrentId,
  submitted,
  userAnswers,
}: QuestionListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [viewMode, setViewMode] = useState<'number' | 'title'>('number');

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    questions.forEach(q => q.tag?.forEach(tag => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [questions]);

  const filteredQuestions = questions.filter((q) => {
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? q.tag?.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!currentId) return;

    const currentQuestionElement = document.getElementById(`q-${currentId}`);
    if (currentQuestionElement) {
      currentQuestionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentId, questions]);

  return (
    <div className="flex flex-col space-y-4 w-1/3">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search questions..."
        className="p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Tag filter */}
      <div className="flex gap-3 flex-wrap">
        <div
          className="cursor-pointer border rounded-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition"
          onClick={() => setSelectedTag('')}
        >
          All Tags
        </div>
        {allTags.map((tag) => (
          <div
            key={tag}
            className={`cursor-pointer border rounded-full px-4 py-2 text-sm text-gray-600 hover:bg-blue-500 hover:text-white transition ${selectedTag === tag ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* View Mode Select */}
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-700">View Mode: </label>
        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value as 'number' | 'title')}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="number">Question Number</option>
          <option value="title">Question Title</option>
        </select>
      </div>

      {/* Number of filtered questions */}
      <div className="text-lg font-semibold text-gray-700">
        {filteredQuestions.length} Question{filteredQuestions.length !== 1 ? 's' : ''}
      </div>

      {/* Scrollable area for the questions */}
      <ScrollArea ref={scrollRef} className="w-full border rounded-md p-2 h-[400px]">
        <div className="flex flex-col gap-4">
          {filteredQuestions.map((q, idx) => {
            const userAnswer = userAnswers[q.id] || [];
            const isCurrent = currentId === q.id;
            const isIncorrect =
              submitted &&
              (userAnswer.length === 0 ||
                !userAnswer.some((answer) => q.correctAnswers.includes(answer)));

            const baseClass = isIncorrect
              ? 'bg-red-100 text-black hover:bg-red-200'
              : 'hover:bg-gray-200 dark:hover:bg-gray-700';

            const outlineClass = isIncorrect
              ? 'border-2 border-red-500'
              : 'border-2 border-transparent';

            const variant = isCurrent ? 'default' : 'outline';

            return (
              <div
                key={q.id}
                id={`q-${q.id}`}
                className={`${baseClass} ${variant === 'outline' ? outlineClass : ''} cursor-pointer p-3 rounded-md text-sm transition duration-200 ease-in-out ${isCurrent ? 'bg-amber-200' : ''}`}
                onClick={() => setCurrentId(q.id)}
              >
                <div className="flex flex-col">
                  {viewMode === 'number' ? (
                    <span>Question {idx + 1}</span>
                  ) : (
                    <span className="text-sm text-gray-700">{q.question}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
