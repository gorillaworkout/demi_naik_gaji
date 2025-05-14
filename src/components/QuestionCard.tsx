'use client';

import { FormEvent, useEffect, useState } from 'react';
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
  onNext: (qid: string) => void;
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
  onNext,
}: QuestionCardProps) {
  const isMultipleCorrect = question.correctAnswers.length > 1;

  const [isPeekIfCorrect, setPeekIfCorrect] = useState(false)

  useEffect(() => setPeekIfCorrect(false), [question.id])

  // Function to check answer
  const onCheckAnswer = () => {
    setPeekIfCorrect(true)
  };

  const showCorrectOrFalse = submitted || isPeekIfCorrect


  return (
    <div className="w-full md:w-3/4">
      <Card>
        <CardHeader>
          {question.tag && question.tag?.length > 0 && (
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-2">
              {question.tag.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-100 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <CardTitle>
            <span className='text-2xl font-bold'>Question {index + 1}</span>
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



              const isWrong = isSelected && showCorrectOrFalse && !isCorrect;

              const bgClass = showCorrectOrFalse
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
                  className={`w-full justify-between ${isSelected ? 'border-blue-500 dark:border-blue-500 font-semibold' : ''
                    } ${bgClass}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setPeekIfCorrect(false)
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

          {showCorrectOrFalse && question.notes && <div className='p-2 bg-yellow-50 border-yellow-300 text-black'>
            {question.notes}
          </div>}

          {/* Result after submission */}
          {submitted && (
            <div
              className={`text-sm font-medium mt-2 ${result ? 'text-green-600' : 'text-red-600'
                }`}
            >
              {result
                ? 'Correct'
                : `Your answer is incorrect — The correct one is: ${question.correctAnswers.join(', ')}`}
            </div>
          )}

          {/* Check Answer Button */}

          <div className='mt-4 w-full flex space-x-2'>
            <Button
              variant="secondary"
              className="w-1/2"
              onClick={onCheckAnswer} // Trigger answer check
            >
              Check Answer
            </Button>
            <Button
              className="w-1/2"
              onClick={() => onNext(question.id)} // Trigger answer check
            >
              Next Question
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
