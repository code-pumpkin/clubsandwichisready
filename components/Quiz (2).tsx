import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizData {
  id: number;
  title: string;
  questions: Question[];
}

const Quiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Mock quiz data - replace with actual data fetching in a real application
  const quizzes: QuizData[] = [
    {
      id: 201,
      title: 'Getting Started Quiz',
      questions: [
        {
          id: 1,
          text: "What is the first thing you should do when entering a car?",
          options: ["Start the engine", "Adjust your seat", "Put on your seatbelt", "Turn on the radio"],
          correctAnswer: 1,
        },
        {
          id: 2,
          text: "Which pedal is on the far right?",
          options: ["Brake", "Clutch", "Gas", "Parking brake"],
          correctAnswer: 2,
        },
        // Add more questions...
      ],
    },
    // Add more quizzes...
  ];

  const quiz = quizzes.find(q => q.id === Number(id));

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return answer === quiz.questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / quiz.questions.length) * 100;

    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
        <p className="text-xl mb-4">
          You scored {score} out of {quiz.questions.length} ({percentage.toFixed(2)}%)
        </p>
        <div className="space-y-4">
          {quiz.questions.map((question, index) => (
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

  const question = quiz.questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">Question {currentQuestion + 1} of {quiz.questions.length}</p>
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
        {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </button>
    </div>
  );
};

export default Quiz;