import { FlashCard } from "../flashCard";

interface JavaScriptProps {
  card: FlashCard;
  handleFlipCard: (id: string) => void;
}

function Card({ handleFlipCard, card }: JavaScriptProps) {
  return (
    <section
      className={`bg-[#121212] min-w-72 h-60 rounded ${
        card.state.state === "Flipped" ? "animate-flip" : ""
      }`}
    >
      <div
        onClick={() => handleFlipCard(card.id)}
        className="h-full px-10 py-4 flex justify-center"
      >
        <div className="w-60 h-full text-center flex justify-center items-center">
          {card.state.state === "NotFlipped" ? (
            <h2 className="text-[#fff] font-bold text-xl">{card.question}</h2>
          ) : (
            <p className="text-gray-200 text-lg font-medium">{card.answer}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Card;
