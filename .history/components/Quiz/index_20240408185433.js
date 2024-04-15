import styles from "./Quiz.module.css";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { questions } = inventory;
  const { id, type, question, answers } = questions[currentQuestion];
  
  const input = () => {};
  const radio = () => {};
  const checkbox = () => {};

  return (
    <>
      <div className={styles.quizSumOfQuestion} >Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.quizContainer}>
        <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          <label>{question}</label>
        </form>
      </div>
    </>
  )
}