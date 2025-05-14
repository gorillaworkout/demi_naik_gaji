'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MCQQuestion, MCQOption } from '@/types/mcq';

interface QuestionListProps {
  questions: MCQQuestion[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  submitted: boolean;
  userAnswers: Record<string, MCQOption[]>;
}

export default function QuestionList({
  questions,
  currentIndex,
  setCurrentIndex,
  submitted,
  userAnswers,
}: QuestionListProps) {
  return (
    <ScrollArea className="w-full md:w-1/4 border rounded-md p-2 h-[400px]">
      <div className="flex flex-col gap-2">
        {questions.map((q, idx) => {
          const userAnswer = userAnswers[q.id] || []; // Default to an empty array if no answer is selected
          const isCurrent = currentIndex === idx;
          const isIncorrect =
            submitted && (userAnswer.length === 0 || !userAnswer.some((answer) => q.correctAnswers.includes(answer)));

          const baseClass = isIncorrect
            ? 'bg-red-500 text-white hover:bg-red-600'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700';
          
          const outlineClass = isIncorrect
            ? 'border-2 border-red-500'  // Added border width for outline
            : 'border-2 border-transparent'; // Ensure border width is set
          const variant = isCurrent ? 'default' : 'outline';

          return (
            <Button
              key={q.id}
              variant={variant}
              className={`${baseClass} ${variant === 'outline' ? outlineClass : ''}`}
              onClick={() => setCurrentIndex(idx)}
            >
              Question {idx + 1}
            </Button>
          );
        })}
      </div>
    </ScrollArea>
  );
}
