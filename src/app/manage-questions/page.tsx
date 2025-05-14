'use client';

import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import { MCQQuestion, MCQOption } from '@/types/mcq';
import mcqStorage from '@/utils/mcqStorage';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import QuestionsList from './QuestionList';
import QuestionEditor from './QuestionEditor';
import BulkInsertQuestions from './BulkInsertQuestions'; // ✅ make sure this exists

const Notification = ({
  message,
  type = 'success',
  onClose
}: {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg z-50 ${type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
      <div className="flex justify-between items-center">
        <div className="mr-4">{message}</div>
        <button onClick={onClose} className="hover:text-gray-200">&times;</button>
      </div>
    </div>
  );
};

export default function ManageQuestions() {
  const [questions, setQuestions] = useState<MCQQuestion[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [jsonInput, setJsonInput] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState<Partial<MCQQuestion>>({
    question: '',
    options: { A: '', B: '', C: '', D: '' },
    correctAnswers: ['A'],
    notes: ''
  });
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showBulkInsert, setShowBulkInsert] = useState(false);
  const [showEditor, setShowEditor] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    const loadedQuestions = mcqStorage.getQuestions();
    setQuestions(loadedQuestions);
    setIsLoading(false);
  }, []);

  const handleInputChange = (field: string, value: string, optionKey?: MCQOption) => {
    if (field === 'options' && optionKey) {
      setCurrentQuestion({
        ...currentQuestion,
        // @ts-ignore
        options: {
          ...currentQuestion.options,
          [optionKey]: value
        }
      });
    } else {
      setCurrentQuestion({
        ...currentQuestion,
        [field]: value
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const options = currentQuestion.options;
    if (!currentQuestion.question || !options?.A || !options.B || !options.C || !options.D) {
      setNotification({ message: 'Please fill in all required fields', type: 'error' });
      return;
    }

    try {
      if (isEditing && currentQuestion.id) {
        const success = mcqStorage.updateQuestion(currentQuestion as MCQQuestion);
        if (!success) throw new Error('Error updating question');
        setNotification({ message: 'Question updated successfully', type: 'success' });
      } else {
        mcqStorage.saveQuestion(currentQuestion as Omit<MCQQuestion, 'id'>);
        setNotification({ message: 'Question added successfully', type: 'success' });
      }

      resetForm();
      setQuestions(mcqStorage.getQuestions());
    } catch (error) {
      setNotification({ message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`, type: 'error' });
    }
  };

  const handleEdit = (question: MCQQuestion) => {
    setCurrentQuestion(question);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this question?')) {
      mcqStorage.deleteQuestion(id);
      setNotification({ message: 'Question deleted successfully', type: 'success' });
      setQuestions(mcqStorage.getQuestions());
    }
  };

  const resetForm = () => {
    setCurrentQuestion({
      question: '',
      options: { A: '', B: '', C: '', D: '' },
      correctAnswers: ['A'],
      notes: ''
    });
    setIsEditing(false);
  };

  const handleBulkInsert = () => {
    try {
      const parsed: Omit<MCQQuestion, 'id'>[] = JSON.parse(jsonInput);
      parsed.forEach(q => mcqStorage.saveQuestion(q));
      setNotification({ message: 'Bulk insert successful', type: 'success' });
      setQuestions(mcqStorage.getQuestions());
      setJsonInput('');
    } catch {
      setNotification({ message: 'Invalid JSON format', type: 'error' });
    }
  };

  const clearNotification = () => setNotification(null);

  return (
    <div className="min-h-screen p-6 bg-background text-foreground">
      <div className="container mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Question Management</h1>
          <div className="space-x-2">
            <Link href="/">
              <Button variant="outline">Back to Test</Button>
            </Link>
            <Button variant="secondary" onClick={() => setShowBulkInsert(prev => !prev)}>
              {showBulkInsert ? 'Hide Bulk Insert' : 'Show Bulk Insert'}
            </Button>
            <Button variant="secondary" onClick={() => setShowEditor(prev => !prev)}>
              {showEditor ? 'Hide Editor' : 'Show Editor'}
            </Button>
          </div>
        </div>

        {showBulkInsert && <BulkInsertQuestions
          jsonInput={jsonInput}
          onChange={setJsonInput}
          onInsert={handleBulkInsert}
        />}

        <div className="flex space-x-10 max-h-[900px]">
          <QuestionsList questions={questions} handleEdit={handleEdit} handleDelete={handleDelete} />

          {showEditor && <QuestionEditor
            currentQuestion={currentQuestion}
            isEditing={isEditing}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            resetForm={resetForm}
          />
          }
        </div>

        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={clearNotification}
          />
        )}
      </div>
    </div>
  );
}
