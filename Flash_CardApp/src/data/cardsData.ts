import { FlashCard } from "../flashCard";

export const initialCards: FlashCard[] = [
  {
    id: "1",
    category: "JavaScript",
    question: "What is a closure?",
    answer: "A function that remembers its outer scope variables.",
    state: { state: "NotFlipped", content: "What is a closure?" },
  },
  {
    id: "2",
    category: "HTML",
    question: "What does <a> tag represent?",
    answer: "An anchor/link element.",
    state: { state: "NotFlipped", content: "What does <a> tag represent?" },
  },
  {
    id: "3",
    category: "JavaScript",
    question: "What is the difference between `null` and `undefined`?",
    answer:
      "`null` is an assignment value, while `undefined` indicates a variable has been declared but not yet assigned a value.",
    state: {
      state: "NotFlipped",
      content: "What is the difference between `null` and `undefined`?",
    },
  },
  {
    id: "4",
    category: "JavaScript",
    question: "What is event delegation in JavaScript?",
    answer:
      "Event delegation is the practice of using a single event listener to manage events for multiple child elements by leveraging event bubbling.",
    state: {
      state: "NotFlipped",
      content: "What is event delegation in JavaScript?",
    },
  },
  {
    id: "5",
    category: "TypeScript",
    question: "What are the benefits of using TypeScript?",
    answer:
      "TypeScript provides static typing, better tooling support, and helps catch errors early during development, making code more maintainable.",
    state: {
      state: "NotFlipped",
      content: "What are the benefits of using TypeScript?",
    },
  },
  {
    id: "6",
    category: "TypeScript",
    question:
      "What is the difference between `interface` and `type` in TypeScript?",
    answer:
      "An `interface` is used to define a contract for objects, while a `type` can define more complex structures such as union types or function signatures.",
    state: {
      state: "NotFlipped",
      content:
        "What is the difference between `interface` and `type` in TypeScript?",
    },
  },
  {
    id: "7",
    category: "HTML",
    question: "What is the purpose of the `alt` attribute in an `<img>` tag?",
    answer:
      "The `alt` attribute provides alternative text for an image if it cannot be displayed or for accessibility purposes.",
    state: {
      state: "NotFlipped",
      content: "What is the purpose of the `alt` attribute in an `<img>` tag?",
    },
  },
  {
    id: "8",
    category: "HTML",
    question: "What is the difference between `<div>` and `<span>` tags?",
    answer:
      "`<div>` is a block-level element used for grouping content, while `<span>` is an inline element used for styling a portion of text or content.",
    state: {
      state: "NotFlipped",
      content: "What is the difference between `<div>` and `<span>` tags?",
    },
  },
  {
    id: "9",
    category: "JavaScript",
    question: "What is the `this` keyword in JavaScript?",
    answer:
      "The `this` keyword refers to the context in which the function is called, typically the object the function is a method of.",
    state: {
      state: "NotFlipped",
      content: "What is the `this` keyword in JavaScript?",
    },
  },
  {
    id: "10",
    category: "JavaScript",
    question: "What is the purpose of the `bind()` method in JavaScript?",
    answer:
      "`bind()` creates a new function that, when invoked, has its `this` keyword set to the provided value, with a given sequence of arguments.",
    state: {
      state: "NotFlipped",
      content: "What is the purpose of the `bind()` method in JavaScript?",
    },
  },
];
