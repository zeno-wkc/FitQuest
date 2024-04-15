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


  const deleteStateVariable = (functionName, result, param) => {
    const { [param]: tmp, ...rest } = result;
    functionName(rest);
  }

  const handleAnswer = (functionName, result, key, e, checkValue) => {
    let { value, checked } = e.target;
    if (!checked) deleteStateVariable(functionName, result, key);

    if (functionName === setFinalAnswer) {
      switch (checkValue) {
        case 'inputAnswer': value = inputAnswer;
        case 'radioAnswer': value = radioAnswer; 
        case 'checkboxAnswer': value = checkboxAnswer;
        default: null;
      }

      functionName((prevAnswers) => ({
        ...prevAnswers, [key]: value,
      }))
    }
    
    checked 
    ? (functionName((prevAnswers) => ({
      ...prevAnswers, [key]: value,
    })))
    : (deleteStateVariable(functionName, result, key));
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
          onChange={(e) => {handleAnswer(setInputAnswer, inputAnswer, k.answerTag, e);  setActiveSet('inputAnswer');}}
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
          onChange={(e) => {setRadioAnswer(''); handleAnswer(setRadioAnswer, 'radioAnswer', 'Answer', e);  setActiveSet('radioAnswer');}}
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
          onChange={(e) => {handleAnswer(setCheckboxAnswer, checkboxAnswer, 'Answer' + k.answerId, e);  setActiveSet('checkboxAnswer');}}
        />
        <label className={styles.inputCheckboxLabel} key={i} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
      </div>
      )))()}
      </>
    )
  };

  useEffect(() => {
    console.log(checkboxAnswer);
    console.log('Final Answer: ', finalAnswer);
  }, [finalAnswer, checkboxAnswer]);

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
        <button onClick={(e) => handleAnswer(setFinalAnswer, finalAnswer, currentQuestion, e, activeSet)}>Next</button>
      </div>
    </>
  )
}