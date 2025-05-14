'use client';

import { useState, useEffect, FormEvent } from 'react';
import QuestionList from './QuestionList';
import QuestionCard from './QuestionCard';
import { MCQQuestion, MCQOption } from '@/types/mcq';
import mcqStorage from '@/utils/mcqStorage';
import { Button } from './ui/button';

export default function MCQTest() {
  const [questions, setQuestions] = useState<MCQQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, MCQOption[]>>({});
  const [userNotes, setUserNotes] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(40 * 60); // 40 minutes in seconds

  useEffect(() => {
    setIsLoading(true);
    const loadedQuestions = mcqStorage.getQuestions();
    setQuestions(loadedQuestions);

    const savedAnswers = mcqStorage.getUserAnswers();
    const answersMap: Record<string, MCQOption[]> = {};
    Object.entries(savedAnswers).forEach(([questionId, answer]) => {
      answersMap[questionId] = Array.isArray(answer.selectedOption)
        ? answer.selectedOption
        : [answer.selectedOption];
    });
    setUserAnswers(answersMap);

    const savedNotes = mcqStorage.getUserNotes();
    setUserNotes(savedNotes);

    if (!startTime) setStartTime(Date.now());
    setIsLoading(false);
  }, [startTime]);

  useEffect(() => {
    if (submitted) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [submitted]);

  const handleAnswerSelect = (questionId: string, option: MCQOption) => {
    if (submitted) return;

    setUserAnswers((prev) => {
      const current = prev[questionId] || [];
      const updated = current.includes(option)
        ? current.filter((opt) => opt !== option)
        : [...current, option];
      return { ...prev, [questionId]: updated };
    });
  };

  const handleNoteChange = (questionId: string, note: string) => {
    setUserNotes((prev) => ({ ...prev, [questionId]: note }));
    mcqStorage.saveUserNote(questionId, note);
  };

  const handleSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault();
    const timeSpent = Math.floor((Date.now() - (startTime || Date.now())) / 1000);

    const resultMap: Record<string, boolean> = {};
    questions.forEach((q) => {
      const selected = userAnswers[q.id] || [];
      const correct = q.correctAnswers;

      const isCorrect =
        selected.length === correct.length &&
        selected.every((opt) => correct.includes(opt));

      resultMap[q.id] = isCorrect;

      mcqStorage.saveUserAnswer({
        questionId: q.id,
        selectedOption: selected,
        isCorrect,
        notes: userNotes[q.id],
      });
    });

    setResults(resultMap);
    setSubmitted(true);

    mcqStorage.saveTestResult({
      date: new Date().toISOString(),
      totalQuestions: questions.length,
      correctAnswers: Object.values(resultMap).filter(Boolean).length,
      timeSpent,
      answers: questions.map((q) => ({
        questionId: q.id,
        selectedOption: userAnswers[q.id],
        isCorrect: resultMap[q.id],
        notes: userNotes[q.id],
      })),
    });
  };

  const handleReset = () => {
    setUserAnswers({});
    setResults({});
    setSubmitted(false);
    setTimeLeft(40 * 60);
    setStartTime(Date.now());
    mcqStorage.clearUserAnswers();
    // mcqStorage.clearUserNotes();
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  if (isLoading) return <div className="text-center p-8">Loading questions...</div>;
  if (questions.length === 0) return <div className="text-center p-8">No questions found</div>;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <QuestionList
        questions={questions}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        submitted={submitted}
        userAnswers={userAnswers}
      />

      <QuestionCard
        question={currentQuestion}
        index={currentIndex}
        userAnswers={userAnswers[currentQuestion.id] || []}
        userNote={userNotes[currentQuestion.id] || ''}
        submitted={submitted}
        result={results[currentQuestion.id]}
        onSelect={handleAnswerSelect}
        onNoteChange={handleNoteChange}
      />

      <div className='flex flex-col'>
        <div className="mt-4 text-lg font-medium text-center">
          Time Remaining: {formatTime(timeLeft)}
        </div>

        {/* Submit under Timer with text */}
        <div className="mt-4 text-center flex flex-col space-y-2">
          <p className="text-sm text-black dark:text-white">Only submit when you want to finish the test.</p>
          {!submitted ? (
            <Button type="submit" onClick={handleSubmit}>
              Submit Test
            </Button>
          ) : (
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
