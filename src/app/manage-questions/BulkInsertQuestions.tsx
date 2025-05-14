'use client';

import { FC, useState } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MCQQuestion, MCQOption } from '@/types/mcq';

interface BulkInsertQuestionsProps {
  jsonInput: string;
  onChange: (value: string) => void;
  onInsert: (questions: Omit<MCQQuestion, 'id'>[]) => void;
}

const mcqOptionEnum = z.enum(['A', 'B', 'C', 'D']);

const MCQSchema = z.object({
  question: z.string().min(1, 'Question text is required'),
  options: z.object({
    A: z.string().min(1, 'Option A is required'),
    B: z.string().min(1, 'Option B is required'),
    C: z.string().min(1, 'Option C is required'),
    D: z.string().min(1, 'Option D is required')
  }),
  correctAnswers: z
    .array(mcqOptionEnum)
    .nonempty('At least one correct answer is required'),
  notes: z.string().optional()
});

const QuestionsSchema = z.array(MCQSchema);

const sampleJson = JSON.stringify(
  [
    {
      question: 'What is the capital of France?',
      options: { A: 'Berlin', B: 'Madrid', C: 'Paris', D: 'Rome' },
      correctAnswers: ['C', 'A'],
      notes: 'Paris is the capital of France.'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: { A: 'Earth', B: 'Mars', C: 'Jupiter', D: 'Saturn' },
      correctAnswers: ['B'],
      notes: 'Mars is often called the Red Planet.'
    }
  ],
  null,
  2
);

const BulkInsertQuestions: FC<BulkInsertQuestionsProps> = ({
  jsonInput,
  onChange,
  onInsert
}) => {
  const [jsonError, setJsonError] = useState('');

  const handleCopySample = async (withQuery: boolean) => {
    const withQuerySample = `
You are a program. You generate JSON output. I want to create MCQ questions from the TOPIC_TO_CREATE.

SAMPLE JSON FORMAT:
${sampleJson}

NUMBER OF QUESTIONS TO GENERATE: 5
TOPIC OR TEXT TO CREATE QUESTION FROM:
--PLEASE-INSERT-HERE--
    `;

    const justJson = sampleJson;

    try {
      await navigator.clipboard.writeText(withQuery ? withQuerySample : justJson);
      alert('Sample JSON copied to clipboard!');
    } catch {
      alert('Failed to copy sample JSON');
    }
  };

  const handleBulkInsertClick = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const result = QuestionsSchema.safeParse(parsed);

      if (!result.success) {
        const formatted = result.error.errors
          .map((e) => `• [${e.path.join('.')}] ${e.message}`)
          .join('\n');
        setJsonError(formatted);
        return;
      }

      onInsert(result.data);
      onChange('');
      setJsonError('');
    } catch (error) {
      setJsonError('Invalid JSON format.');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bulk Insert Questions (JSON)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-2">
          <Button variant="outline" onClick={() => handleCopySample(true)}>
            Copy Sample Query for LLM generation
          </Button>
          <Button variant="outline" onClick={() => handleCopySample(false)}>
            Copy Sample JSON
          </Button>
        </div>

        <Textarea
          rows={8}
          value={jsonInput}
          onChange={(e) => onChange(e.target.value)}
          placeholder={sampleJson}
        />

        {jsonError && (
          <pre className="text-red-500 text-sm whitespace-pre-wrap mt-2 bg-red-50 p-2 rounded border border-red-300">
            {jsonError}
          </pre>
        )}

        <div className="flex justify-end mt-4">
          <Button onClick={handleBulkInsertClick}>Insert</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BulkInsertQuestions;
