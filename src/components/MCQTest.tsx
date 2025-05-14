'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import QuestionList from './QuestionList';
import QuestionCard from './QuestionCard';
import { MCQQuestion, MCQOption } from '@/types/mcq';
import mcqStorage from '@/utils/mcqStorage';
import { Button } from './ui/button';

export default function MCQTest() {
  const [questions, setQuestions] = useState<MCQQuestion[]>([]);
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, MCQOption[]>>({});
  const [userNotes, setUserNotes] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(40 * 60); // 40 minutes

  // Load questions, answers, notes, and initialize currentQuestionId
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
    setUserAnswers({...answersMap, ...userAnswers});

    setUserNotes(mcqStorage.getUserNotes());

    if (!startTime) {
      setStartTime(Date.now());
    }

    if (loadedQuestions.length > 0 && !currentQuestionId) {
      setCurrentQuestionId(loadedQuestions[0].id);
    }

    setIsLoading(false);
  }, [startTime, currentQuestionId]);

  // Timer
  useEffect(() => {
    if (submitted) return;
    const timerId = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerId);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [submitted]);

  // Handlers
  const handleAnswerSelect = (questionId: string, option: MCQOption) => {
    console.log("USER ANSWERS", userAnswers)
    setUserAnswers(prev => {
      const current = prev[questionId] || [];
      const updated = current.includes(option)
        ? current.filter(o => o !== option)
        : [...current, option];
      const newUserAnswers = { ...prev, [questionId]: updated };
      console.log("NEW USER ANSWERS", newUserAnswers)
      return newUserAnswers;
    });
  };

  const handleNoteChange = (questionId: string, note: string) => {
    setUserNotes(prev => ({ ...prev, [questionId]: note }));
    mcqStorage.saveUserNote(questionId, note);
  };

  const handleSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault();
    const timeSpent = Math.floor((Date.now() - (startTime || Date.now())) / 1000);

    const resultMap: Record<string, boolean> = {};
    questions.forEach(q => {
      const selected = userAnswers[q.id] || [];
      const correct = q.correctAnswers;
      const isCorrect =
        selected.length === correct.length &&
        selected.every(opt => correct.includes(opt));
      resultMap[q.id] = isCorrect;
      mcqStorage.saveUserAnswer({
        questionId: q.id,
        selectedOption: selected,
        isCorrect,
        notes: userNotes[q.id],
      });
    });


    console.log("USER RESULTS", userAnswers, resultMap)

    setResults(resultMap);
    setSubmitted(true);

    mcqStorage.saveTestResult({
      date: new Date().toISOString(),
      totalQuestions: questions.length,
      correctAnswers: Object.values(resultMap).filter(Boolean).length,
      timeSpent,
      answers: questions.map(q => ({
        questionId: q.id,
        selectedOption: userAnswers[q.id],
        isCorrect: resultMap[q.id],
        notes: userNotes[q.id],
      })),
    });
  };

  const handleReset = () => {
    setUserAnswers({});
    setUserNotes({});
    setResults({});
    setSubmitted(false);
    setTimeLeft(40 * 60);
    setStartTime(Date.now());
    mcqStorage.clearUserAnswers();
    mcqStorage.clearUserNotes();
    if (questions.length > 0) {
      setCurrentQuestionId(questions[0].id);
    }
  };

  const handleNext = () => {
    if (!currentQuestionId) return;
    const idx = questions.findIndex(q => q.id === currentQuestionId);
    if (idx !== -1 && idx < questions.length - 1) {
      setCurrentQuestionId(questions[idx + 1].id);
    }
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (isLoading) return <div className="text-center p-8">Loading questions...</div>;
  if (!questions.length) return <div className="text-center p-8">No questions found</div>;

  const currentQuestion = questions.find(q => q.id === currentQuestionId)!;
  const currentIndex = questions.findIndex(q => q.id === currentQuestionId);

  return (
    <div className="flex flex-col space-y-8 items-center">
      <div className="flex space-x-24 items-center">
        <div className="mt-4 text-4xl font-bold">Time Remaining: {formatTime(timeLeft)}</div>
        <div className="mt-4 flex space-x-6">
          <Button onClick={handleSubmit}>Submit Test</Button>
          <Button variant="destructive" onClick={handleReset}>Reset</Button>
        </div>
      </div>

      <div className="flex space-x-4 w-full">
        <QuestionList
          questions={questions}
          currentId={currentQuestionId}
          setCurrentId={setCurrentQuestionId}
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
          onNext={handleNext}
        />
      </div>
    </div>
  );
}
