"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import questions from "./utils/soal";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<{ index: number; correctAnswer: string }[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correct) {
      setIsCorrect(true);
    } else {
      setWrongAnswers((prev) =>
        prev.some((item) => item.index === currentQuestion)
          ? prev
          : [...prev, { index: currentQuestion, correctAnswer: questions[currentQuestion].correct }]
      );
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setSelectedAnswer(null);
      setIsCorrect(false);
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsCorrect(false);
    setWrongAnswers([]);
    setQuizFinished(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        {!quizFinished ? (
          <>
            <motion.h2
              className="text-2xl font-bold mb-6 text-black"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {questions[currentQuestion].question}
            </motion.h2>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`w-full py-2 px-4 text-left rounded-lg border transition-all text-lg font-medium text-black
                    ${
                      selectedAnswer === option
                        ? option === questions[currentQuestion].correct
                          ? "bg-green-500 text-white border-green-600"
                          : "bg-red-500 text-white border-red-600"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  onClick={() => handleAnswerClick(option)}
                  disabled={isCorrect} // Hanya disable setelah jawaban benar
                  whileTap={{ scale: 0.95 }}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            {selectedAnswer && selectedAnswer !== questions[currentQuestion].correct && (
              <motion.p
                className="mt-4 text-red-600 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Jawaban salah, coba lagi!
              </motion.p>
            )}

            {isCorrect && (
              <motion.button
                onClick={handleNextQuestion}
                className="mt-6 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 text-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Next Question →
              </motion.button>
            )}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-black">Quiz Selesai!</h2>
            <p className="text-lg font-medium text-black">
              Skor Anda: {questions.length - wrongAnswers.length} / {questions.length}
            </p>

            {wrongAnswers.length > 0 ? (
              <div className="mt-4 text-left">
                <p className="font-semibold text-black">Soal yang dijawab salah dan jawaban yang benar:</p>
                <ul className="list-disc list-inside">
                  {wrongAnswers.map(({ index, correctAnswer }) => (
                    <li key={index} className="text-red-600">
                      <span className="font-semibold text-black">{index + 1}. {questions[index].question}</span><br />
                      ✅ Jawaban yang benar: <span className="text-green-600 font-bold">{correctAnswer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-green-600 font-semibold mt-4">Selamat! Anda menjawab semua dengan benar! 🎉</p>
            )}

            <button
              onClick={restartQuiz}
              className="mt-6 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 text-lg"
            >
              Restart Quiz 🔄
            </button>
          </>
        )}
      </div>
    </div>
  );
}
