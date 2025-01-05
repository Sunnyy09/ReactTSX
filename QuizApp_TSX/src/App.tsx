import { useState } from "react";
import QuizCard from "./components/QuizCard";
import ResultCard from "./components/ResultCard";
import { questionsArray } from "./data/questionsArray";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );

  function nextQuestion(): void {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questionsArray.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOptionIndex(null);
    } else {
      setShowResult(true);
    }
  }

  function handleAnswer(isCorrect: boolean) {
    if (isCorrect) {
      setScore(score + 1);
    }
  }

  function handleRestartQuiz(): void {
    if (showResult === true) {
      setCurrentQuestion(0);
      setScore(0);
      setShowResult(false);
      setSelectedOptionIndex(null);
    }
  }

  const handleOptionClick = (index: number | null, isCorrect: boolean) => {
    if (index) {
      setSelectedOptionIndex(index);
      handleAnswer(isCorrect);
    }
  };

  return (
    <div className="bg-indigo-900 w-full min-h-screen">
      <div className="h-full flex flex-col justify-center">
        <div>
          <h1 className="text-3xl text-[#eeeeee] text-center underline font-bold mt-10 py-4">
            Quiz
          </h1>
        </div>
        <div className="h-full w-full mt-4 flex justify-center">
          {showResult ? (
            <ResultCard
              score={score}
              total={questionsArray.length}
              onRestart={handleRestartQuiz}
            />
          ) : (
            <QuizCard
              question={questionsArray[currentQuestion]}
              currentQuestion={currentQuestion + 1}
              totalQuestions={questionsArray.length}
              onAnswer={handleAnswer}
              onNextQuestion={nextQuestion}
              onOptionClick={handleOptionClick}
              selectedOptionIndex={selectedOptionIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
