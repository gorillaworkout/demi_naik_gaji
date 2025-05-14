'use client';

import { FC, useState } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area'; // <-- Make sure this exists
import { MCQQuestion } from '@/types/mcq';
import defaultQuestionsJson from '../../../questions-export.json'

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
    D: z.string().min(1, 'Option D is required'),
  }),
  correctAnswers: z.array(mcqOptionEnum).nonempty('At least one correct answer is required'),
  notes: z.string().optional(),
  tag: z.array(z.string()).optional(),
});

const QuestionsSchema = z.array(MCQSchema);

const sampleJson = JSON.stringify(
  [
    {
      question: 'What is the capital of France?',
      options: { A: 'Berlin', B: 'Madrid', C: 'Paris', D: 'Rome' },
      correctAnswers: ['C', 'A'],
      notes: 'Paris is the capital of France.',
      tag: ['geography', 'europe'],
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: { A: 'Earth', B: 'Mars', C: 'Jupiter', D: 'Saturn' },
      correctAnswers: ['B'],
      notes: 'Mars is often called the Red Planet.',
      tag: ['science', 'space'],
    },
  ],
  null,
  2
);

const BulkInsertQuestions: FC<BulkInsertQuestionsProps> = ({ jsonInput, onChange, onInsert }) => {
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
    } catch {
      setJsonError('Invalid JSON format.');
    }
  };

  const handleUseDefaultQuestion = () => {
    onChange(JSON.stringify(defaultQuestionsJson, null, 2))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result;
      if (typeof text === 'string') {
        onChange(text);
      }
    };
    reader.readAsText(file);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bulk Insert Questions (JSON)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-2 flex-wrap gap-2">
          <div className='flex space-x-2'>
            <Button variant="default" className='bg-green-700' onClick={() => handleUseDefaultQuestion()}>
              Use Default Questions
            </Button>
            <div className="h-full">
              <label className="inline-flex items-center cursor-pointer">
                <div className="bg-gray-100 hover:bg-gray-200 text-sm text-gray-800 border border-gray-300 px-4 py-1.5 rounded shadow-sm">
                  Import JSON File
                </div>
                <input type="file" accept=".json" className="hidden" onChange={handleFileUpload} />
              </label>
            </div>
          </div>
          <div className='flex space-x-2'>
            <Button variant="outline" onClick={() => handleCopySample(true)}>
              Copy Sample Query for LLM generation
            </Button>
            <Button variant="outline" onClick={() => handleCopySample(false)}>
              Copy Sample JSON
            </Button>
          </div>
        </div>

        <Textarea
          rows={8}
          value={jsonInput}
          onChange={(e) => onChange(e.target.value)}
          placeholder={sampleJson}
          className="max-h-[500px] overflow-y-auto"
        />

        {jsonError && (
          <ScrollArea className="max-h-48 mt-2 bg-red-50 rounded border border-red-300">
            <pre className="text-red-500 text-sm whitespace-pre-wrap p-2">
              {jsonError}
            </pre>
          </ScrollArea>
        )}

        <div className="flex justify-end mt-4">
          <Button onClick={handleBulkInsertClick}>Insert</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BulkInsertQuestions;
