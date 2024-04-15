import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];
  


  return (
    <>
      <div className={styles.quizSumOfQuestion} >Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.quizContainer}>
        <form>

        </form>
      </div>
    </>
  )
}