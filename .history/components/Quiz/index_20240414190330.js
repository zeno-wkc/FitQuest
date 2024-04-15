import styles from "./Quiz.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";
import Result from "../Results";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(inventory.questions.length).fill({}));
  const [showPopup, setShowPopup] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const { questions } = inventory;
  const { id, type, question, answers: questionAnswers } = questions[currentQuestion];
  const finalAnswers = answers;

  const handleSelectQuestion = (action) => {    
    (action === "next" && currentQuestion < questions.length - 1) ? checkAllAnswersFilled() ? setCurrentQuestion((prevIndex) => prevIndex + 1) : setShowPopup(true) : (action === "prev" && currentQuestion > 0) ? setCurrentQuestion((prevIndex) => prevIndex - 1) : <></>;
  };

  const handleAnswer = (k, v) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = { ...updatedAnswers[currentQuestion], [k]: v };
      return updatedAnswers;
    });
  };

  const getAnswer = (key) => {
    return answers[currentQuestion][key] || "";
  };

  const checkAllAnswersFilled = () => {
    const currentAnswers = answers[currentQuestion];

    switch (type) {
      case 'input':
        return Object.values(currentAnswers).length !== 0 && Object.values(currentAnswers).length > 2 && Object.values(currentAnswers).every(value => value !== null && value !== undefined && value !== '');
      case 'radio':
        return Object.values(currentAnswers).some(value => value !== "");
      case 'checkbox':
        return Object.values(currentAnswers).some(value => value);
      default:
        return false;
    }
  };

  const handleFinishQuestion = () => {
    Object.entries(finalAnswers[4]).map((k, v) => {
      switch (k[0]) {
        case 'Answer1':
          return finalAnswers[4]['Answer1'] ? finalAnswers[4]['Answer1'] = 'neckPain' : false;
        case 'Answer2':
          return finalAnswers[4]['Answer2'] ? finalAnswers[4]['Answer2'] = 'backPain' : false;
        case 'Answer3':
          return finalAnswers[4]['Answer3'] ? finalAnswers[4]['Answer3'] = 'shoulderPain' : false;
        case 'Answer4':
          return finalAnswers[4]['Answer4'] ? finalAnswers[4]['Answer4'] = 'kneePain' : false;
        case 'Answer5':
          return finalAnswers[4]['Answer5'] ? finalAnswers[4]['Answer5'] = 'all' : false;
        default : return null; 
      }
    })
    finalAnswers[4] = Object.fromEntries(Object.entries(finalAnswers[4]).filter(([key, value]) => value));
    setIsFinished(true);
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    console.log('Current Question :', currentQuestion);
    console.log('Answers: ', answers);
    console.log('final Answer: ', finalAnswers);
  }, [answers, currentQuestion]);

  return (
    <>
    {isFinished && (<>
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
                      <input type="number"
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
                        <input type="radio"
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
                        <input type="checkbox"
                          className={styles.inputCheckboxIcon}
                          id={k.answerTag}
                          name={currentQuestion}
                          value={k.answerTag}
                          checked={getAnswer("Answer" + k.answerId)}
                          onChange={() => handleAnswer("Answer" + k.answerId, !getAnswer("Answer" + k.answerId))}
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
          { currentQuestion != 0 && ( <button onClick={() => handleSelectQuestion('prev')}>Prev</button>) }
          { currentQuestion != 4 && ( <button onClick={() => handleSelectQuestion('next')}>Next</button>) }
          { currentQuestion === 4 && ( <button onClick={() => handleFinishQuestion()}>Finish</button>) }
        </div>
      </div>
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <p>Please fill in all answers before proceeding.</p>
            <button onClick={handleClosePopup}>OK</button>
          </div>
        </div>
      )}</>)}
      {isFinished && (<><Result answers={finalAnswers} /></>)}
    </>
  )
}