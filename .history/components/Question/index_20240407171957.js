import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalAnswerObject, setFinalAnswerObject] = useState({});
  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  const handleFinalAnswer = (value) => {
    setFinalAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: value,
    }));
    setCurrentQuestion((prevIndex) => prevIndex + 1);
  };
  
  const handleAnswerInput = (answersTag, value) => {
    setFinalAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [answersTag]: value,
    }));
  };

  const handleQuestion = (action) => {
    setCurrentQuestion((prevIndex) =>
      action === "next" ? prevIndex + 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    console.log('finalAnswerObject', finalAnswerObject);
  }, [finalAnswerObject]);

  return (
    <div className={styles.quizContainer}>
      <div>Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.questionContainer}>
        <form onSubmit={(e) => { e.preventDefault(); handleFinalAnswer(e.target.Answer.value); }}>
          <label>{question}</label>
          {answers.map((k, i) => (
            <div key={i}>
              <label htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
              {currentQuestion === 4 ? (
                <input
                  type="checkbox"
                  id={k.answerTag}
                  name={k.answerTag}
                  value={k.answerTag}
                  onChange={(e) => handleAnswerInput(k.answerTag, e.target.checked)}
                />
              ) : (
                <input
                  type="radio"
                  id={k.answerTag}
                  name="Answer"
                  value={k.answerTag}
                  onChange={(e) => handleAnswerInput(k.answerTag, e.target.value)} 
                />
              )}
            </div>
          ))}
          <button type="submit">{currentQuestion === questions.length - 1 ? "Finish" : "Next"}</button>
        </form>
        {currentQuestion !== 0 && <button onClick={() => handleQuestion('prev')}>Prev</button>}
      </div>
    </div>
  );
}
