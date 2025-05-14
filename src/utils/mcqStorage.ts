/**
 * MCQ-specific localStorage utility functions
 */

import { v4 as uuidv4 } from 'uuid';
import localStorageUtil from './localStorage';
import {
  MCQQuestion,
  MCQAnswer,
  MCQTestResult,
  MCQ_STORAGE_KEYS,
  MCQOption,
} from '@/types/mcq';

/**
 * Get all stored MCQ questions
 */
export function getQuestions(): MCQQuestion[] {
  return localStorageUtil.getItem<MCQQuestion[]>(MCQ_STORAGE_KEYS.QUESTIONS, []) || [];
}

/**
 * Save a new MCQ question
 */
export function saveQuestion(question: Omit<MCQQuestion, 'id'>): MCQQuestion {
  const questions = getQuestions();
  const newQuestion: MCQQuestion = {
    ...question,
    id: uuidv4(),
  };
  localStorageUtil.setItem(MCQ_STORAGE_KEYS.QUESTIONS, [...questions, newQuestion]);
  return newQuestion;
}

/**
 * Update an existing MCQ question
 */
export function updateQuestion(question: MCQQuestion): boolean {
  const questions = getQuestions();
  const index = questions.findIndex((q) => q.id === question.id);
  if (index === -1) return false;

  const updatedQuestions = [...questions];
  updatedQuestions[index] = question;
  localStorageUtil.setItem(MCQ_STORAGE_KEYS.QUESTIONS, updatedQuestions);
  return true;
}

/**
 * Delete an MCQ question by ID
 */
export function deleteQuestion(id: string): boolean {
  const questions = getQuestions();
  const filtered = questions.filter((q) => q.id !== id);
  if (filtered.length === questions.length) return false;

  localStorageUtil.setItem(MCQ_STORAGE_KEYS.QUESTIONS, filtered);
  return true;
}

/**
 * Get user's answers for all questions
 */
export function getUserAnswers(): Record<string, MCQAnswer> {
  return localStorageUtil.getItem<Record<string, MCQAnswer>>(MCQ_STORAGE_KEYS.USER_ANSWERS, {}) || {};
}

/**
 * Save a user's answer to a question
 */
export function saveUserAnswer(answer: MCQAnswer): void {
  const current = getUserAnswers();
  const updated = { ...current, [answer.questionId]: answer };
  localStorageUtil.setItem(MCQ_STORAGE_KEYS.USER_ANSWERS, updated);
}

/**
 * Clear all user answers
 */
export function clearUserAnswers(): void {
  localStorageUtil.setItem(MCQ_STORAGE_KEYS.USER_ANSWERS, {});
}

/**
 * Clear all user notes
 */
export function clearUserNotes(): void {
  localStorageUtil.setItem(MCQ_STORAGE_KEYS.USER_NOTES, {});
}


/**
 * Get all test results
 */
export function getTestResults(): MCQTestResult[] {
  return localStorageUtil.getItem<MCQTestResult[]>(MCQ_STORAGE_KEYS.TEST_RESULTS, []) || [];
}

/**
 * Save a test result
 */
export function saveTestResult(result: MCQTestResult): void {
  const existing = getTestResults();
  localStorageUtil.setItem(MCQ_STORAGE_KEYS.TEST_RESULTS, [...existing, result]);
}

/**
 * Get user notes for all questions
 */
export function getUserNotes(): Record<string, string> {
  return localStorageUtil.getItem<Record<string, string>>(MCQ_STORAGE_KEYS.USER_NOTES, {}) || {};
}

/**
 * Save a user note for a question
 */
export function saveUserNote(questionId: string, note: string): void {
  const notes = getUserNotes();
  const updated = { ...notes, [questionId]: note };
  localStorageUtil.setItem(MCQ_STORAGE_KEYS.USER_NOTES, updated);
}

/**
 * Get incorrectly answered questions
 */
export function getIncorrectlyAnsweredQuestions(): MCQQuestion[] {
  const questions = getQuestions();
  const answers = getUserAnswers();

  return questions.filter(
    (q) => answers[q.id] && !answers[q.id].isCorrect
  );
}

/**
 * Check if a user's answer is correct
 */
export function checkAnswer(questionId: string, selectedOption: MCQOption): boolean {
  const question = getQuestions().find((q) => q.id === questionId);
  if (!question) return false;

  return question.correctAnswers.includes(selectedOption);
}

export default {
  getQuestions,
  saveQuestion,
  updateQuestion,
  deleteQuestion,
  getUserAnswers,
  saveUserAnswer,
  clearUserAnswers,
  getTestResults,
  saveTestResult,
  getUserNotes,
  saveUserNote,
  getIncorrectlyAnsweredQuestions,
  checkAnswer,
};
