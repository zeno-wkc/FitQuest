import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerObject, setAnswerObject] = useState({});
  const [finalAnswerObject, setFinalAnswerObject] = useState({});

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  const handleAnswerInput = (answerTag, value) => {
    setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [answerTag]: value
    }));
    console.log(answerObject);
  };

  const handleCheckboxAnswer = (questionNum, answerTag) => {
    setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [questionNum]: [answerTag]
    }));
    console.log(answerObject);
  };

  const handleRadioAnswer = (questionNum, answerTag) => {
    setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [questionNum]: [answerTag]
    }));
  };

  const submitAnswer = () => {
    setFinalAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: answerObject
    }));
  };

  const handleQuestion = (action) => {
    action === "next"
      ? setCurrentQuestion((prevIndex) => prevIndex + 1)
      : setCurrentQuestion((nextIndex) => nextIndex - 1);
  };

  return (
    <div className={styles.quizContainer}>
      <div>Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.questionContainer}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitAnswer();
            if (currentQuestion < questions.length - 1) {
              handleQuestion("next");
            }
          }}
        >
          <label>{question}</label>
          <br />
          {answers.map((k) => (
            <div key={k.answerTag} className={styles.answerContainer}>
              {currentQuestion === 0 ? (
                <input
                  type="number"
                  name={k.answerTag}
                  placeholder={k.answerLabel}
                  value={answerObject[k.answerTag] || ""}
                  onChange={(e) =>
                    handleAnswerInput(k.answerTag, e.target.value)
                  }
                />
              ) : currentQuestion === 4 ? (
                <div>
                  <label className={styles.label} htmlFor={k.answerTag}>
                    {k.answerLabel}
                  </label>
                  <input
                    type="checkbox"
                    id={k.answerTag}
                    name={k.answerTag}
                    checked={answerObject[k.answerTag] || false}
                    onChange={() => handleAnswerInput(k.answerTag, !answerObject[k.answerTag])}
                  />
                </div>
              ) : (
                <div>
                  <label className={styles.label} htmlFor={k.answerTag}>
                    {k.answerLabel}
                  </label>
                  <input
                    type="radio"
                    id={k.answerTag}
                    name={k.answerTag}
                    value={k.answerTag}
                    checked={answerObject[k.answerTag] || false}
                    onChange={() => handleRadioAnswer( currentQuestion, k.answerTag)}
                  />
                </div>
              )}
            </div>
          ))}
          {currentQuestion === questions.length - 1 ? (
            <button type="submit">Finish</button>
          ) : (
            <button type="submit">Next</button>
          )}
        </form>
        {currentQuestion > 0 && (
          <button onClick={() => handleQuestion("prev")}>Prev</button>
        )}
        {JSON.stringify(finalAnswerObject, null, 2)}
      </div>
    </div>
  );
}
