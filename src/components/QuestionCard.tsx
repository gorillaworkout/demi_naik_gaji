'use client';

import { FormEvent } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MCQQuestion, MCQOption } from '@/types/mcq';

interface QuestionCardProps {
  question: MCQQuestion;
  index: number;
  userAnswers: MCQOption[]; // changed to array
  userNote: string;
  submitted: boolean;
  result?: boolean;
  onSelect: (qid: string, option: MCQOption) => void;
  onNoteChange: (qid: string, note: string) => void;
}

export default function QuestionCard({
  question,
  index,
  userAnswers,
  userNote,
  submitted,
  result,
  onSelect,
  onNoteChange,
}: QuestionCardProps) {
  const isMultipleCorrect = question.correctAnswers.length > 1;

  return (
    <div className="w-full md:w-3/4">
      <Card>
        <CardHeader>
          <CardTitle>
            Question {index + 1}
            {isMultipleCorrect && (
              <span className="text-sm text-muted-foreground block mt-1">
                Select all that apply
              </span>
            )}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Question Text */}
          <div className="font-medium">{question.question}</div>

          {/* Options */}
          <div className="space-y-2">
            {(['A', 'B', 'C', 'D'] as MCQOption[]).map((option) => {
              const isSelected = userAnswers.includes(option);
              const isCorrect = question.correctAnswers.includes(option);
              const isWrong = isSelected && submitted && !isCorrect;

              const bgClass = submitted
                ? isCorrect
                  ? 'bg-green-100'
                  : isWrong
                  ? 'bg-red-100'
                  : ''
                : '';

              return (
                <Button
                  key={option}
                  variant="outline"
                  className={`w-full justify-between ${
                    isSelected ? 'border-blue-500 dark:border-blue-500 font-semibold' : ''
                  } ${bgClass}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect(question.id, option); // should toggle
                  }}
                >
                  <span>
                    {option}. {question.options[option]}
                  </span>
                  {isSelected && <span className="text-blue-600">✅</span>}
                </Button>
              );
            })}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium mb-1">Notes</label>
            <Textarea
              placeholder="Your notes here..."
              value={userNote}
              onChange={(e) => onNoteChange(question.id, e.target.value)}
            />
          </div>

          {/* Result after submission */}
          {submitted && (
            <div
              className={`text-sm font-medium mt-2 ${
                result ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {result
                ? 'Correct'
                : `Incorrect — Correct: ${question.correctAnswers.join(', ')}`}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
