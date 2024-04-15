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

  const handleAnswer = (functionName, key, value) => {
    functionName === setFinalAnswer 
    ? (()=> {switch (value) {
        case 'inputAnswer': value = inputAnswer;
        case 'radioAnswer': value = radioAnswer;
        case 'checkboxAnswer': value = checkboxAnswer;
      }}) 
    : <></>

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
          onChange={(e) => {handleAnswer(setInputAnswer, k.answerTag, e.target.value);  setActiveSet('inputAnswer');}}
        />
      )))()}
      </>
    )
  };

  const radio = () => { console.log('radio') };
  const checkbox = () => { console.log('checkbox')};

  console.log(inputAnswer);
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
        <button onClick={(e) => handleAnswer(setFinalAnswer, currentQuestion, activeSet)}>Next</button>
      </div>
    </>
  )
}