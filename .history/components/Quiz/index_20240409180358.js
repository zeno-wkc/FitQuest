import styles from "./Quiz.module.css";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [inputAnswer, setInputAnswer] = useState({});
  const [radioAnswer, setRadioAnswer] = useState({});
  const [checkboxAnswer, setCheckboxAnswer] = useState({});
  const [finalAnswer, setFinalAnswer] = useState({});
  const [activeSet, setActiveSet] = useState();

  const { questions } = inventory;
  const { id, type, question, answers } = questions[currentQuestion];

  const handleSelectQuestion = (action) => {
    console.log(currentQuestion);
    if (currentQuestion <= 4) {
      setCurrentQuestion((nextIndex) =>
          action === "next" ? (nextIndex + 1) : (nextIndex - 1)
      );
    }
  };

  const deleteStateVariable = (functionName, result, param) => {
    const { [param]: tmp, ...rest } = result;
    functionName(rest);
  }

  const handleAnswer = (functionName, result, key, e, checkValue) => {
    let { value, checked, input } = e.target;
    if (functionName === setFinalAnswer) {
      switch (checkValue) {
        case 'inputAnswer': value = inputAnswer; break;
        case 'radioAnswer': value = radioAnswer; break;
        case 'checkboxAnswer': value = checkboxAnswer; break;
        default: null; break;
      }
    }
    
    value !== '' || checked || (functionName === setFinalAnswer)
    ? (functionName((prevAnswers) => ({
      ...prevAnswers, [key]: value,
    })))
    : (deleteStateVariable(functionName, result, key));

    console.log('Checkbox Answer: ', checkboxAnswer);
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
          onChange={(e) => {setRadioAnswer(''); handleAnswer(setRadioAnswer, radioAnswer, 'Answer', e);  setActiveSet('radioAnswer');}}
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
          onChange={(e) => { handleAnswer(setCheckboxAnswer, checkboxAnswer, 'Answer' + k.answerId, e);  setActiveSet('checkboxAnswer');}}
        />
        <label className={styles.inputCheckboxLabel} key={i} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
      </div>
      )))()}
      </>
    )
  };

  useEffect(() => {
    console.log('Input Answer: ', inputAnswer);
    console.log('Radio Answer: ', radioAnswer);
    console.log('Checkbox Answer: ', checkboxAnswer);
    console.log('Final Answer: ', finalAnswer);
  }, [finalAnswer, inputAnswer, radioAnswer, checkboxAnswer]);

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
        {
          currentQuestion === 4 && (
            <>
              <button onClick={(e) => { handleSelectQuestion('prev')}}>Prev</button>
              <button onClick={(e) => { setCheckboxAnswer(''); handleAnswer(setFinalAnswer, finalAnswer, currentQuestion, e, activeSet);}}>Finish</button>
            </>
          )
        }
        {
          currentQuestion === 0 && (
              <button onClick={(e) => { handleAnswer(setFinalAnswer, finalAnswer, currentQuestion, e, activeSet); handleSelectQuestion('next'); }}>Next</button>
          )
        }
        {
          (currentQuestion !== 0 && currentQuestion < 4) && (
            <>
              <button onClick={(e) => { handleAnswer(setFinalAnswer, finalAnswer, currentQuestion, e, activeSet); handleSelectQuestion('next'); }}>Next</button>
              <button onClick={(e) => { handleSelectQuestion('prev')}}>Prev</button>
            </>
          )
        }
      </div>
    </>
  )
}