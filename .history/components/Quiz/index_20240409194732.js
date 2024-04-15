import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";
import styles from "./Quiz.module.css";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(inventory.questions.length).fill({}));
  const [showPopup, setShowPopup] = useState(false);

  const { questions } = inventory;
  const { id, type, question, answers: questionAnswers } = questions[currentQuestion];

  const handleSelectQuestion = (action) => {
    if (action === "next" && currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevIndex) => prevIndex + 1);
    } else if (action === "prev" && currentQuestion > 0) {
      setCurrentQuestion((prevIndex) => prevIndex - 1);
    }
  };

  const handleAnswer = (key, value) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = { ...updatedAnswers[currentQuestion], [key]: value };
      return updatedAnswers;
    });
  };

  const getAnswer = (key) => {
    return answers[currentQuestion][key] || "";
  };

  const checkAllQuestionsAnswered = () => {
    return answers.every((answer) => Object.keys(answer).length !== 0);
  };

  const handleNext = () => {
    if (checkAllQuestionsAnswered()) {
      // Proceed to the next page or perform necessary action
      console.log("All questions answered. Proceeding to the next page...");
    } else {
      setShowPopup(true);
    }
  };

  useEffect(() => {
    console.log('Current Question :', currentQuestion);
    console.log('Answers: ', answers);
  }, [answers, currentQuestion]);

  return (
    <>
      <div className={styles.quizSumOfQuestion}>Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.quizContainer}>
        <form key={id} className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          <label>{question}</label>
          {(() => {
            switch (type) {
              case 'input':
                return (
                  <>
                    {questionAnswers.map((k) => (
                      <input
                        type="number"
                        className={styles.inputAnswer}
                        key={k.answerId}
                        id={k.answerTag}
                        name={currentQuestion}
                        placeholder={k.answerLabel}
                        value={getAnswer(k.answerTag)}
                        onChange={(e) => handleAnswer(k.answerTag, e.target.value)}
                      />
                    ))}
                  </>
                );
              case 'radio':
                return (
                  <>
                    {questionAnswers.map((k) => (
                      <div className={styles.answerContainer} key={k.answerId}>
                        <input
                          type="radio"
                          className={styles.inputRadioIcon}
                          id={k.answerTag}
                          name={currentQuestion}
                          value={k.answerTag}
                          checked={getAnswer("Answer") === k.answerTag}
                          onChange={() => handleAnswer("Answer", k.answerTag)}
                        />
                        <label className={styles.inputRadioLabel} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
                      </div>
                    ))}
                  </>
                );
              case 'checkbox':
                return (
                  <>
                    {questionAnswers.map((k) => (
                      <div className={styles.answerContainer} key={k.answerId}>
                        <input
                          type="checkbox"
                          className={styles.inputCheckboxIcon}
                          id={k.answerTag}
                          name={currentQuestion}
                          value={k.answerTag}
                          checked={getAnswer("Answer" + k.answerId)}
                          onChange={(e) => handleAnswer("Answer" + k.answerId, e.target.checked)}
                        />
                        <label className={styles.inputCheckboxLabel} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
                      </div>
                    ))}
                  </>
                );
              default:
                return null;
            }
          })()}
        </form>
        <div>
          <button onClick={() => handleSelectQuestion('prev')}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>

      {/* Popup window */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Please answer all questions before proceeding.</h2>
            <div className={styles.popupButtons}>
              <button onClick={() => setShowPopup(false)}>Close</button>
              <button onClick={handleNext}>OK</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
