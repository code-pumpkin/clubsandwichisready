import React, { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      text: "What is React?",
      options: ["A JavaScript library", "A programming language", "A database", "An operating system"],
      correctAnswer: 0,
    },
    {
      id: 2,
      text: "Which hook is used for side effects in React?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: 1,
    },
    // Add more questions as needed
  ];

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl">
            You scored {score} out of {questions.length}
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <p className="mb-4">{questions[currentQuestion].text}</p>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="w-full text-left p-2 rounded bg-blue-100 hover:bg-blue-200 transition-colors"
                onClick={() => handleAnswerClick(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;