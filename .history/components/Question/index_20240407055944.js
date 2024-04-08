import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerObject, setAnswerObject] = useState({});
  const [finalAnswerObject, setFinalAnswerObject] = useState({});
  const [prevAnswers, setPrevAnswers] = useState({});

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  const handleAnswerInput = (answerTag, value) => {
    setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [answerTag]: value
    }));
  };

  const handleAnswerSelect = (answerTag) => {
    setAnswerObject({
      [answerTag]: true
    });
  };

  const submitAnswer = () => {
    if (currentQuestion === 4) {
      setFinalAnswerObject((prevAnswers) => ({
        ...prevAnswers,
        physicalLimitations: Object.keys(answerObject).filter(
          (key) => answerObject[key]
        )
      }));
    } else {
      setFinalAnswerObject((prevAnswers) => ({
        ...prevAnswers,
        [question]: answerObject
      }));
    }
    setPrevAnswers((prev) => ({
      ...prev,
      [question]: answerObject
    }));
  };

  const handleQuestion = (action) => {
    if (action === "next" && currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevIndex) => prevIndex + 1);
    } else if (action === "prev" && currentQuestion > 0) {
      setCurrentQuestion((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    if (currentQuestion === 0) {
      setAnswerObject(prevAnswers[question] || {});
    } else {
      setAnswerObject({});
    }
  }, [currentQuestion, question, prevAnswers]);

  return (
    <div className={styles.quizContainer}>
      <div>Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.questionContainer}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitAnswer();
            setAnswerObject({});
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
                  type="text"
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
                    onChange={() => handleAnswerSelect(k.answerTag)}
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
                    onChange={() => handleAnswerSelect(k.answerTag)}
                  />
                </div>
              )}
            </div>
          ))}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        {currentQuestion > 0 && (
          <button onClick={() => handleQuestion("prev")}>Prev</button>
        )}
        <div>
          Previous Answers:{" "}
          {prevAnswers[question] &&
            JSON.stringify(prevAnswers[question], null, 2)}
        </div>
        <div>
          Final Answers: {JSON.stringify(finalAnswerObject, null, 2)}
        </div>
      </div>
    </div>
  );
}
