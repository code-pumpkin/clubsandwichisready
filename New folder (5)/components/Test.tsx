import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface TestData {
  id: number;
  title: string;
  questions: Question[];
  duration: number; // in minutes
}

const Test: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  // Mock test data - replace with actual data fetching in a real application
  const tests: TestData[] = [
    {
      id: 301,
      title: 'Mid-Module Test',
      duration: 15, // 15 minutes
      questions: [
        {
          id: 1,
          text: "What is the primary purpose of a seatbelt?",
          options: ["Comfort", "Style", "Safety", "Legal requirement"],
          correctAnswer: 2,
        },
        {
          id: 2,
          text: "When should you use your turn signals?",
          options: ["Only when turning", "When changing lanes or turning", "Only in heavy traffic", "Never"],
          correctAnswer: 1,
        },
        // Add more questions...
      ],
    },
    // Add more tests...
  ];

  const test = tests.find(t => t.id === Number(id));

  useEffect(() => {
    if (test) {
      setTimeLeft(test.duration * 60); // Convert minutes to seconds
    }
  }, [test]);

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !showResults) {
      setShowResults(true);
    }
  }, [timeLeft, showResults]);

  if (!test) {
    return <div>Test not found</div>;
  }

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return answer === test.questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / test.questions.length) * 100;

    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Test Results</h2>
        <p className="text-xl mb-4">
          You scored {score} out of {test.questions.length} ({percentage.toFixed(2)}%)
        </p>
        <div className="space-y-4">
          {test.questions.map((question, index) => (
            <div key={question.id} className="border-b pb-4">
              <p className="font-medium mb-2">{question.text}</p>
              <p className="flex items-center">
                {userAnswers[index] === question.correctAnswer ? (
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                ) : (
                  <XCircle className="text-red-500 mr-2" size={20} />
                )}
                Your answer: {question.options[userAnswers[index]]}
              </p>
              {userAnswers[index] !== question.correctAnswer && (
                <p className="text-green-600 mt-1">
                  Correct answer: {question.options[question.correctAnswer]}
                </p>
              )}
            </div>
          ))}
        </div>
        <button
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => navigate('/')}
        >
          Back to Course
        </button>
      </div>
    );
  }

  const question = test.questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{test.title}</h2>
        <div className="flex items-center text-gray-600">
          <Clock size={20} className="mr-2" />
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">Question {currentQuestion + 1} of {test.questions.length}</p>
        <p>{question.text}</p>
      </div>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full text-left p-3 rounded ${
              userAnswers[currentQuestion] === index ? 'bg-blue-100 border-blue-500' : 'bg-gray-100'
            } hover:bg-blue-50 transition-colors`}
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleNext}
        disabled={userAnswers[currentQuestion] === undefined}
      >
        {currentQuestion < test.questions.length - 1 ? 'Next Question' : 'Finish Test'}
      </button>
    </div>
  );
};

export default Test;