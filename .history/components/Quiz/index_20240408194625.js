import styles from "./Quiz.module.css";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(3);

  const { questions } = inventory;
  const { id, type, question, answers } = questions[currentQuestion];
  
  const input = () => { console.log('input') };
  const radio = () => { console.log('radio') };
  const checkbox = () => { console.log('checkbox')};

  return (
    <>
      <div className={styles.quizSumOfQuestion} >Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.quizContainer}>
        <form key={id} className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          <label>{question}</label>
          {(() => {
            switch (type) {
              case 'input': return input(answers); 
              case 'radio': return radio(answers);
              case 'checkbox': return checkbox(answers);
              default: return null;
            }
          })()}
        </form>
      </div>
    </>
  )
}