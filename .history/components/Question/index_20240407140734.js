import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerObject, setAnswerObject] = useState({});

  
  const handleAnswerInput = (answersTag, value) => {
    setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [answersTag]: value,
    }));
    console.log(answerObject);
  };

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  return (
    <div className={styles.quizContainer}>
    <div>Question {currentQuestion + 1}/{questions.length}</div>
    <div className={styles.questionContainer}>
      {/* {question}
      {answers[1].answerId} */}
      <form>
              <label>{question}</label>
              { 
              currentQuestion === 0 ? (
                answers.map((k, i) => (
                <input
                  key={k.answerId}
                  type="number"
                  id={k.answerTag}
                  name={k.answerTag}
                  placeholder={k.answerLabel}
                  onChange={(e) => handleAnswerInput(k.answerTag, e.target.value)}
                />))): (<></>)
              }
      </form>
    </div>
    </div>
  )
}