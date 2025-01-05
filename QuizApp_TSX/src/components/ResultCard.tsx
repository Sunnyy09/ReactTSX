interface ResultCardProps {
  score: number;
  total: number;
  onRestart: () => void;
}

function ResultCard({ score, total, onRestart }: ResultCardProps) {
  return (
    <div className="w-[50vw] py-8 rounded-xl border-2 border-white/50 bg-transparent shadow">
      <div className="flex flex-col justify-center items-center py-6">
        <h2 className="text-[#eeeeee] text-2xl">
          Your Score: {score} / {total}
        </h2>
        <button
          onClick={onRestart}
          className="mt-8 text-black text-md font-medium bg-emerald-400 rounded-3xl px-4 py-2 uppercase"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default ResultCard;
