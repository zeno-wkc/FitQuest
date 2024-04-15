import styles from "./Quiz.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(inventory.questions.length).fill(""));
  const [showPopup, setShowPopup] = useState(false);

  const { questions } = inventory;
  const { id, type, question, answers: questionAnswers } = questions[currentQuestion];

  const handleSelectQuestion = (action) => {
    if (action === "next" && currentQuestion < questions.length - 1) {
      if (answers[currentQuestion] !== "") {
        setCurrentQuestion((prevIndex) => prevIndex + 1);
      } else {
        setShowPopup(true);
      }
    } else if (action === "prev" && currentQuestion > 0) {
      setCurrentQuestion((prevIndex) => prevIndex - 1);
    }
  };

  const handleAnswer = (value) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = value;
      return updatedAnswers;
    });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
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
                        value={answers[currentQuestion]}
                        onChange={(e) => handleAnswer(e.target.value)}
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
                          checked={answers[currentQuestion] === k.answerTag}
                          onChange={() => handleAnswer(k.answerTag)}
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
                          checked={answers[currentQuestion] === k.answerTag}
                          onChange={() => handleAnswer(k.answerTag)}
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
          <button onClick={() => handleSelectQuestion('next')}>Next</button>
        </div>
      </div>
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <p>Please fill in the answer before proceeding.</p>
            <button onClick={handleClosePopup}>OK</button>
          </div>
        </div>
      )}
    </>
  )
}
