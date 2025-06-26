// ✅ src/data/questions.js
export const questions = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyper Tool Markup Language",
        "None of the above",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "Who is making the Web standards?",
      options: [
        "Mozilla",
        "Google",
        "The World Wide Web Consortium",
        "Microsoft",
      ],
      answer: "The World Wide Web Consortium",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<newline>"],
      answer: "<br>",
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<style>", "<css>", "<script>", "<link>"],
      answer: "<style>",
    },
    {
      question: "Which doctype declaration is correct for HTML5?",
      options: ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<!HTML>", "<!doctype html5>"],
      answer: "<!DOCTYPE html>",
    },
    // ... 25 more unique HTML questions
  ],

  javascript: [
    {
      question: "Which company developed JavaScript?",
      options: ["Mozilla", "Netscape", "Microsoft", "Google"],
      answer: "Netscape",
    },
    {
      question: "Which keyword declares a block-scoped variable?",
      options: ["var", "let", "const", "Both let and const"],
      answer: "Both let and const",
    },
    {
      question: "What does NaN stand for?",
      options: ["Not a Name", "No assigned Number", "Not a Number", "Negative and Null"],
      answer: "Not a Number",
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["=", "==", "===", ":="],
      answer: "=",
    },
    {
      question: "Which array method returns the first element that passes a test?",
      options: ["filter()", "map()", "find()", "forEach()"],
      answer: "find()",
    },
    // ... 25 more unique JS questions
  ],

  react: [
    {
      question: "What hook is used to manage state in React?",
      options: ["useEffect", "useState", "useRef", "useContext"],
      answer: "useState",
    },
    {
      question: "What is JSX?",
      options: ["A CSS preprocessor", "A JavaScript syntax extension", "A database", "A backend framework"],
      answer: "A JavaScript syntax extension",
    },
    {
      question: "Which method is used to render React elements to the DOM?",
      options: ["ReactDOM.render()", "React.render()", "React.createElement()", "React.mount()"],
      answer: "ReactDOM.render()",
    },
    {
      question: "Which hook is used to perform side effects in components?",
      options: ["useEffect", "useState", "useRef", "useCallback"],
      answer: "useEffect",
    },
    {
      question: "What prop is used to pass data to components?",
      options: ["props", "data", "value", "input"],
      answer: "props",
    },
    // ... 25 more unique React questions
  ]
};
