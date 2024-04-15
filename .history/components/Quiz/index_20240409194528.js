import styles from "./Quiz.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(inventory.questions.length).fill({}));
  const [popupVisible, setPopupVisible] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);

  const { questions } = inventory;
  const { id, type, question, answers: questionAnswers } = questions[currentQuestion];

  const handleSelectQuestion = (action) => {
    if (action === "next" && currentQuestion < questions.length - 1) {
      if (answerSelected || currentQuestion === questions.length - 1) {
        setCurrentQuestion((prevIndex) => prevIndex + 1);
        setAnswerSelected(false); // Reset answer selected status
      } else {
        setPopupVisible(true);
      }
    } else if (action === "prev" && currentQuestion > 0) {
      setCurrentQuestion((prevIndex) => prevIndex - 1);
      setAnswerSelected(true); // Indicate an answer was selected when going back
    }
  };

  const handleAnswer = (key, value) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = { ...updatedAnswers[currentQuestion], [key]: value };
      return updatedAnswers;
    });
    setAnswerSelected(true); // Indicate an answer was selected
  };

  const getAnswer = (key) => {
    return answers[currentQuestion][key] || "";
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    console.log('Current Question :', currentQuestion);
    console.log('Answers: ', answers);
  }, [answers, currentQuestion]);

  return (
    <>
      {popupVisible && (
        <div className={styles.popup}>
          <div>Please select an answer before proceeding.</div>
          <button onClick={handleClosePopup}>OK</button>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
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
          <button onClick={() => handleSelectQuestion('next')}>Next</button>
        </div>
      </div>
    </>
  )
}
