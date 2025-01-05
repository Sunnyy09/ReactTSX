import { Question } from "../quizApp";

interface QuizCardProps {
  question: Question;
  currentQuestion: number;
  selectedOptionIndex: number | null;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onNextQuestion: () => void;
  onOptionClick: (index: number | null, isCorrect: boolean) => void;
}

function QuizCard({
  question,
  currentQuestion,
  totalQuestions,
  onNextQuestion,
  onOptionClick,
  selectedOptionIndex,
}: QuizCardProps) {
  return (
    <div className="w-[50vw] py-8 border rounded-xl border-blue-950 bg-transparent shadow">
      <div className="w-full px-6 flex flex-col justify-center items-start">
        <h2 className="pt-2 text-[#eeeeee] text-lg font-medium">
          Question:{" "}
          <span className="">
            {currentQuestion}/{totalQuestions} : {question.questionText}
          </span>
        </h2>
        <span className="pt-1 pb-2 text-gray-300 text-sm italic">
          You can select one or more options.
        </span>
        <ul className="flex w-full flex-col justify-center items-center my-2 gap-2">
          {question.options.map((option) => (
            <li
              key={option.id}
              onClick={() => onOptionClick(option.id, option.isCorrect)}
              className={`w-full px-4 py-2  border-transparent rounded-xl text-[#eeeeee] text-lg cursor-pointer hover:border hover:border-green-400 hover:scale-105 transition-all ease-in-out duration-500 
               bg-indigo-950/60 ${
                 selectedOptionIndex === option.id
                   ? "bg-green-500"
                   : "bg-indigo-950/60"
               }
              `}
            >
              {option.answerText}
            </li>
          ))}
        </ul>
        <div className="flex justify-between w-full gap-4 my-4">
          <p className="text-[#eeeeee] pt-3 italic">
            Difficulty: {question.difficulty}
          </p>
          <button
            onClick={onNextQuestion}
            className=" text-black text-md font-medium bg-emerald-400 rounded-3xl px-4 py-2 uppercase"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
