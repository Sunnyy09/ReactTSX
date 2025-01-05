import { useState } from "react";
import Card from "./components/Card";
import { FlashCard } from "./flashCard";
import { initialCards } from "./data/cardsData";

function App() {
  const [cards, setCards] = useState<FlashCard[]>(initialCards);
  // const [progress, setProgress] = useState<UserProgress>({});
  //TODO: add routing based on different subjects like html, JS, TS

  const flipCard = (id: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? {
              ...card,
              state:
                card.state.state === "NotFlipped"
                  ? { state: "Flipped", content: card.answer }
                  : { state: "NotFlipped", content: card.question },
            }
          : card
      )
    );
  };

  // const maskAsKnown = (id: string) => {
  //   setProgress((prevProgress) => ({ ...prevProgress, [id]: "known" }));
  // };

  return (
    <div className="w-full min-h-screen bg-black text-[#fff] p-8">
      <h1 className="text-2xl font-bold underline text-center my-6">
        Learning with flashcards.
      </h1>
      <div
        className={`flex flex-wrap justify-center items-center py-6 w-full gap-8`}
      >
        {cards.map((card) => (
          <div key={card.id}>
            <Card card={card} handleFlipCard={flipCard} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
