/**
 * Types for MCQ (Multiple Choice Question) functionality
 */

// Define the possible options for an MCQ
export type MCQOption = 'A' | 'B' | 'C' | 'D';

// Structure for an MCQ question with multiple correct answers
export type MCQQuestion = {
  id: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswers: MCQOption[];  // Supports multiple correct answers
  notes?: string;
  tag?: string[];              // Optional array of tag
};

// Type for user's answer to a question
export type MCQAnswer = {
  questionId: string;
  selectedOption: MCQOption[];
  isCorrect?: boolean; // Whether the selected option is correct
  notes?: string;
};

// Type for test results
export type MCQTestResult = {
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number; // in seconds
  answers: MCQAnswer[];
};

// Storage keys for localStorage
export const MCQ_STORAGE_KEYS = {
  QUESTIONS: 'mcq_questions',
  USER_ANSWERS: 'mcq_user_answers',
  TEST_RESULTS: 'mcq_test_results',
  USER_NOTES: 'mcq_user_notes',
};
