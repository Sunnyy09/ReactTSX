export interface Question {
  id: number;
  questionText: string;
  difficulty: Difficulty;
  options: Options[];
}

export interface Options {
  id: number;
  answerText: string;
  isCorrect: boolean;
}

export enum Difficulty {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}

// enum Category {
//   SCIENCE = "Science",
//   HISTORY = "History",
//   MATH = "Math",
// }
