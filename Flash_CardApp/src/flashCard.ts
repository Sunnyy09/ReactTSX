export type CardState =
  | { state: "NotFlipped"; content: string }
  | { state: "Flipped"; content: string };

export type Category = "JavaScript" | "TypeScript" | "HTML";

export interface FlashCard {
  id: string;
  category: Category;
  question: string;
  answer: string;
  state: CardState;
}

// export type UserProgress = Record<string, "known" | "unknown">;
