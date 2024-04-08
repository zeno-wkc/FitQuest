import styles from "./Question.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [finalAnswerObject, setFinalAnswerObject] = useState({});
  const [answerObject, setAnswerObject] = useState({});

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  const handleAnswerSelect = () => {

  }

  const submitAnswer = (e) => {
    e.preventDefault();
    console.log('1');
  }

  return (
    <form onSubmit={submitAnswer}>
      <label>{ questions[0].question }</label><br />
      {
        questions[0].answers.map((k, i) => (
        <>
          <input 
            type="number"
            name={k.answerTag}
            placeholder={k.answerLabel}
            onChange={() => handleAnswerSelect()}
          />
        </>
        ))
      }
      <button type="submit">Next</button>
    </form>
  )
}