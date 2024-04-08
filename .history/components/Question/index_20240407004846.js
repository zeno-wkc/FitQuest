import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [finalAnswerObject, setFinalAnswerObject] = useState({});
  const [answerObject, setAnswerObject] = useState({});

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  const handleAnswerSelect = (key, answerTag) => {
    setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [key] : answerTag
    }))
    console.log(answerObject);
  }

  const submitAnswer = (a, ans) => {
    setFinalAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [a]: ans
    }))
    console.log(finalAnswerObject);
  }

  useEffect(() => {
    // Update layout or perform other side effects here
    console.log('answerObject', answerObject);
    console.log('finalAnswerObject', finalAnswerObject);
  }, [answerObject, finalAnswerObject]);



  return (
    <>
    <form onSubmit={(e) => {e.preventDefault(); submitAnswer(parseInt(questions[0].id), answerObject)}}>
      <label>{ questions[0].question }</label><br />
      {
        questions[0].answers.map((k, i) => (
        <>
          <input 
            type="number"
            name={k.answerTag}
            placeholder={k.answerLabel}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              handleAnswerSelect(i, value);
            }}
          />
        </>
        ))
      }
      <button type="submit">Next</button>
    </form>

    <form>
      <label>{ questions[1].question }</label><br />
      {
        questions[1].answers.map((k, i) => (
        <>
          <input 
            type="radio"
            name={k.answerTag}
            value={k.answerTag}
            checked={selectedOption === "k.answerTag"}
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          <label>{k.answerLabel}</label>
        </>
        ))
      }
      <button type="submit">Next</button>
    </form>
    </>
  )
}