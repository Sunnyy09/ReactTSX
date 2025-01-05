import { Question, Difficulty } from "../quizApp";

export const questionsArray: Question[] = [
  {
    id: 1,
    questionText: "Which language is primarily used for web development?",
    options: [
      { id: 1, answerText: "Python", isCorrect: false },
      { id: 2, answerText: "JavaScript", isCorrect: true },
      { id: 3, answerText: "C++", isCorrect: false },
      { id: 4, answerText: "Ruby", isCorrect: false },
    ],
    difficulty: Difficulty.EASY,
  },
  {
    id: 2,
    questionText: "What does CSS stand for?",
    options: [
      { id: 1, answerText: "Computer Style Sheets", isCorrect: false },
      { id: 2, answerText: "Cascading Style Sheets", isCorrect: true },
      { id: 3, answerText: "Creative Style Sheets", isCorrect: false },
      { id: 4, answerText: "Control Style Sheets", isCorrect: false },
    ],
    difficulty: Difficulty.EASY,
  },
  {
    id: 3,
    questionText: "Which HTML tag is used to define JavaScript code?",
    options: [
      { id: 1, answerText: "<script>", isCorrect: true },
      { id: 2, answerText: "<javascript>", isCorrect: false },
      { id: 3, answerText: "<js>", isCorrect: false },
      { id: 4, answerText: "<code>", isCorrect: false },
    ],
    difficulty: Difficulty.EASY,
  },
  {
    id: 4,
    questionText: "Which of these is a JavaScript framework?",
    options: [
      { id: 1, answerText: "React", isCorrect: true },
      { id: 2, answerText: "Laravel", isCorrect: false },
      { id: 3, answerText: "Django", isCorrect: false },
      { id: 4, answerText: "Spring", isCorrect: false },
    ],
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 5,
    questionText: "What is the file extension for a TypeScript file?",
    options: [
      { id: 1, answerText: ".ts", isCorrect: true },
      { id: 2, answerText: ".js", isCorrect: false },
      { id: 3, answerText: ".jsx", isCorrect: false },
      { id: 4, answerText: ".json", isCorrect: false },
    ],
    difficulty: Difficulty.EASY,
  },
  {
    id: 6,
    questionText:
      "Which programming language is used for Android app development?",
    options: [
      { id: 1, answerText: "Swift", isCorrect: false },
      { id: 2, answerText: "Kotlin", isCorrect: true },
      { id: 3, answerText: "C#", isCorrect: false },
      { id: 4, answerText: "JavaScript", isCorrect: false },
    ],
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 7,
    questionText: "What is the purpose of Git in programming?",
    options: [
      { id: 1, answerText: "To design websites", isCorrect: false },
      { id: 2, answerText: "To manage version control", isCorrect: true },
      { id: 3, answerText: "To compile code", isCorrect: false },
      { id: 4, answerText: "To execute scripts", isCorrect: false },
    ],
    difficulty: Difficulty.EASY,
  },
  {
    id: 8,
    questionText:
      "Which method is used to fetch data from an API in JavaScript?",
    options: [
      { id: 1, answerText: "fetch()", isCorrect: true },
      { id: 2, answerText: "getData()", isCorrect: false },
      { id: 3, answerText: "retrieve()", isCorrect: false },
      { id: 4, answerText: "load()", isCorrect: false },
    ],
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 9,
    questionText: "Which programming paradigm does Python primarily support?",
    options: [
      { id: 1, answerText: "Object-Oriented", isCorrect: true },
      { id: 2, answerText: "Functional", isCorrect: false },
      { id: 3, answerText: "Procedural", isCorrect: false },
      { id: 4, answerText: "Logic", isCorrect: false },
    ],
    difficulty: Difficulty.MEDIUM,
  },
  {
    id: 10,
    questionText: "What does the 'use strict' directive do in JavaScript?",
    options: [
      { id: 1, answerText: "Enables strict mode", isCorrect: true },
      { id: 2, answerText: "Declares a constant", isCorrect: false },
      { id: 3, answerText: "Imports external libraries", isCorrect: false },
      { id: 4, answerText: "Defines a function", isCorrect: false },
    ],
    difficulty: Difficulty.HARD,
  },
];
