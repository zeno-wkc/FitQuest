import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerObject, setAnswerObject] = useState({});
  const [finalAnswerObject, setFinalAnswerObject] = useState({});
  const [reAnswering, setReAnswering] = useState(false);

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  const handleAnswerInput = (answerTag, value) => {
    if (currentQuestion === 0) {
      setAnswerObject((prevAnswers) => ({
        ...prevAnswers,
        [answerTag]: value
      }));
    } else {
      setAnswerObject((prevAnswers) => ({
        ...prevAnswers,
        [answerTag]: true
      }));
    }
  };

  const handleAnswerSelect = (answerTag) => {
    setAnswerObject({ [answerTag]: true });
  };

  const submitAnswer = () => {
    if (currentQuestion === 0) {
      setFinalAnswerObject((prevAnswers) => ({
        ...prevAnswers,
        personalInformation: answerObject
      }));
    } else if (currentQuestion >= 1 && currentQuestion <= 3) {
      const selectedAnswer = Object.keys(answerObject)[0];
      setFinalAnswerObject((prevAnswers) => ({
        ...prevAnswers,
        [`question${currentQuestion + 1}`]: selectedAnswer
      }));
    } else if (currentQuestion === 4) {
      setFinalAnswerObject((prevAnswers) => ({
        ...prevAnswers,
        physicalLimitations: Object.keys(answerObject)
      }));
    }
  };

  const handleQuestion = (action) => {
    action === "next"
      ? setCurrentQuestion((prevIndex) => prevIndex + 1)
      : setCurrentQuestion((nextIndex) => nextIndex - 1);
  };

  const handleReAnswer = () => {
    setAnswerObject({});
    setFinalAnswerObject({});
    setReAnswering(true);
  };

  useEffect(() => {
    if (reAnswering) {
      setReAnswering(false);
    }
  }, [reAnswering]);

  return (
    <div className={styles.quizContainer}>
      <div>
        Question {currentQuestion + 1}/{questions.length}
      </div>
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
                  type="text"
                  name={k.answerTag}
                  placeholder={k.answerLabel}
                  value={answerObject[k.answerTag] || ""}
                  onChange={(e) => handleAnswerInput(k.answerTag, e.target.value)}
                />
              ) : currentQuestion === 4 ? (
                <>
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
                </>
              ) : (
                <>
                  <label className={styles.label} htmlFor={k.answerTag}>
                    {k.answerLabel}
                  </label>
                  <input
                    type="radio"
                    id={k.answerTag}
                    name={k.answerTag}
                    value={k.answerTag}
                    checked={answerObject[k.answerTag] || false}
                    onChange={() => handleAnswerInput(k.answerTag, true)}
                  />
                </>
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
        {finalAnswerObject && Object.keys(finalAnswerObject).length > 0 && (
          <button onClick={handleReAnswer}>Re-answer all</button>
        )}
        {reAnswering && <div>All answers cleared for re-answering.</div>}
        {JSON.stringify(finalAnswerObject, null, 2)}
      </div>
    </div>
  );
}
