import React, { useState } from 'react';

interface Question {
  id: number;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options?: string[];
  correctAnswer: string | number;
}

const Test: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | number)[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      text: "Which of the following is a hook in React?",
      type: "multiple-choice",
      options: ["useState", "setState", "this.state", "None of the above"],
      correctAnswer: 0,
    },
    {
      id: 2,
      text: "React is a framework, not a library.",
      type: "true-false",
      correctAnswer: "false",
    },
    {
      id: 3,
      text: "What does JSX stand for?",
      type: "short-answer",
      correctAnswer: "JavaScript XML",
    },
    // Add more questions as needed
  ];

  const handleAnswer = (answer: string | number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="max-w-2xl mx-auto">
      {showResults ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Test Results</h2>
          <p className="text-xl">
            You scored {calculateScore()} out of {questions.length}
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <p className="mb-4">{questions[currentQuestion].text}</p>
          {questions[currentQuestion].type === 'multiple-choice' && (
            <div className="space-y-2">
              {questions[currentQuestion].options?.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-2 rounded ${
                    answers[currentQuestion] === index ? 'bg-blue-200' : 'bg-blue-100'
                  } hover:bg-blue-200 transition-colors`}
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
          {questions[currentQuestion].type === 'true-false' && (
            <div className="space-x-4">
              <button
                className={`px-4 py-2 rounded ${
                  answers[currentQuestion] === 'true' ? 'bg-blue-200' : 'bg-blue-100'
                } hover:bg-blue-200 transition-colors`}
                onClick={() => handleAnswer('true')}
              >
                True
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  answers[currentQuestion] === 'false' ? 'bg-blue-200' : 'bg-blue-100'
                } hover:bg-blue-200 transition-colors`}
                onClick={() => handleAnswer('false')}
              >
                False
              </button>
            </div>
          )}
          {questions[currentQuestion].type === 'short-answer' && (
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={answers[currentQuestion] as string || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder="Type your answer here"
            />
          )}
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            onClick={handleNext}
          >
            {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Test;