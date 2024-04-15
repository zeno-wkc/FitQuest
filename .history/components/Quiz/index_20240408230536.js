import styles from "./Quiz.module.css";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [inputAnswer, setInputAnswer] = useState({});
  const { questions } = inventory;
  const { id, type, question, answers } = questions[currentQuestion];

  const handleAnswer = (functionName, key, value) => {
    console.log(functionName);
    functionName((prevAnswers) => ({
      ...prevAnswers, [key]: value,
    }))};
  }
  
  const input = (answers) => {

    return (
      <>
      {(() => answers.map((k, i) => (
        <input type="number"
          className={styles.inputAnswer}
          key={k.answerId}
          id={k.answerTag}
          name={currentQuestion}
          placeholder={k.answerLabel}
          onChange={(e) => handleAnswer( setInputAnswer, k.answerTag, e.target.value)}
        />
      )))()}
      </>
    )
  };
  console.log(typeof setCurrentQuestion);
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