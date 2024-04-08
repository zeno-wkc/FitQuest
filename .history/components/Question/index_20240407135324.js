import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  return (
    <div className={styles.quizContainer}>
    <div>Question {currentQuestion + 1}/{questions.length}</div>
    <div className={styles.questionContainer}>
      {question}{answers.answerId}
    </div>
    </div>
  )
}