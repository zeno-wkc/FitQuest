import styles from "./Question.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  return (
    <form>
      <label>{ questions[0].question }</label><br />
      {
        questions[0].answers.map((k, i) => (
        <>
          <input 
            type="radio"
            name="answer"
            value="Option 1"
            // checked={selectedAnswer === 'Option 1'}
            // onChange={() => handleAnswerSelect('Option 1')}
          />
          <label>{key.answerLabel}</label>
        </>
        ))
      }
    </form>
  );
}