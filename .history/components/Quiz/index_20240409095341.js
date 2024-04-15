import styles from "./Quiz.module.css";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(4);
  const [inputAnswer, setInputAnswer] = useState({});
  const [radioAnswer, setRadioAnswer] = useState({});
  const [checkboxAnswer, setCheckboxAnswer] = useState({});
  const [finalAnswer, setFinalAnswer] = useState({});
  const [activeSet, setActiveSet] = useState();

  const { questions } = inventory;
  const { id, type, question, answers } = questions[currentQuestion];

  const handleAnswer = (functionName, key, e, checkValue) => {
    let { value, checked } = e.target;
    console.log(activeSet);
    !checked ? delete activeSet[key] : "";

    if (functionName === setFinalAnswer) {
      switch (checkValue) {
        case 'inputAnswer': value = inputAnswer; break;
        case 'radioAnswer': value = radioAnswer; break;
        case 'checkboxAnswer': value = checkboxAnswer; break;
        default: null; break;
      }
    }
    functionName((prevAnswers) => ({
      ...prevAnswers, [key]: value,
    }))
  };
  
  const input = () => {
    return (
      <>
      {(() => answers.map((k, i) => (
        <input type="number"
          className={styles.inputAnswer}
          key={k.answerId}
          id={k.answerTag}
          name={currentQuestion}
          placeholder={k.answerLabel}
          onChange={(e) => {handleAnswer(setInputAnswer, k.answerTag, e);  setActiveSet('inputAnswer');}}
        />
      )))()}
      </>
    )
  };

  const radio = () => {
    return (
      <>
      {(() => answers.map((k, i) => (
      <div className={styles.answerContainer}>
        <input type="radio"
          className={styles.inputRadioIcon}
          id={k.answerTag}
          name={currentQuestion}
          value={k.answerTag}
          onChange={(e) => {setRadioAnswer(''); handleAnswer(setRadioAnswer, 'Answer', e);  setActiveSet('radioAnswer');}}
        />
        <label className={styles.inputRadioLabel} key={i} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
      </div>
      )))()}
      </>
    )
  };

  const checkbox = () => {
    return (
      <>
      {(() => answers.map((k, i) => (
      <div className={styles.answerContainer}>
        <input type="checkbox"
          className={styles.inputCheckboxIcon}
          key={k.answerId}
          id={k.answerTag}
          name={currentQuestion}
          value={k.answerTag}
          onChange={(e) => {handleAnswer(setCheckboxAnswer, 'Answer' + k.answerId, e);  setActiveSet('checkboxAnswer');}}
        />
        <label className={styles.inputCheckboxLabel} key={i} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
      </div>
      )))()}
      </>
    )
  };

  console.log(checkboxAnswer);
  useEffect(() => {
    console.log('Final Answer: ', finalAnswer);
  }, [finalAnswer]);

  return (
    <>
      <div className={styles.quizSumOfQuestion} >Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.quizContainer}>
        <form key={id} className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          <label>{question}</label>
          {(() => {
            switch (type) {
              case 'input': return input(); 
              case 'radio': return radio();
              case 'checkbox': return checkbox();
              default: return null;
            }
          })()}
        </form>
        <button onClick={(e) => handleAnswer(setFinalAnswer, currentQuestion, e, activeSet)}>Next</button>
      </div>
    </>
  )
}