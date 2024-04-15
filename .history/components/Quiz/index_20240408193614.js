import styles from "./Quiz.module.css";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const { questions } = inventory;
  const { id, type, question, answers } = questions[currentQuestion];
  
  const input = () => { console.log('ip') };
  const radio = () => { console.log('ra') };
  const checkbox = () => { console.log('cb')};

  return (
    <>
      <div className={styles.quizSumOfQuestion} >Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.quizContainer}>
        <form key={currentQuestion} className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          <label>{question}</label>
          {(() => {
            switch ({type}) {
              case 'input': input; break;
              case 'radio': console.log('cb'); break;
              case 'checkbox': checkbox; break;
              default: console.log(none); break;
            }
          })}
          {/* { console.log(type) } */}
        </form>
      </div>
    </>
  )
}