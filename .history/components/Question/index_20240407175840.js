import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerObject, setAnswerObject] = useState({});
  const [finalAnswerObject, setFinalAnswerObject] = useState({});

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  const handleFinalAnswer = (currentQuestion, value) => {
    setFinalAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: value,
    }));
    setAnswerObject({});
    clearSelectRecord();
    console.log(finalAnswerObject);
  };
  
  const handleAnswerInput = (answersTag, value) => {
    setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [answersTag]: value,
    })) 
    console.log(answerObject);
  };

  const handleAnswerCheckbox = (answersTag, e) => {
    const { value, checked } = e.target;
    const tempAns = answerObject;
    !checked ? delete answerObject[answersTag] : "";

    checked 
    ? (setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [answersTag]: value,
    }))) 
    : (setAnswerObject(tempAns));
    console.log(answerObject);
  };

  const clearSelectRecord = () => {
    var input = document.getElementsByTagName('input');
    for (var i = input.length-1; i>=0; i--) {
    if ('radio'===input[i].type) input[i].checked = false;
    if ('checkbox'===input[i].type) input[i].checked = false;
    }
  }

  const handleQuestion = (action) => {
    console.log(action);
    setCurrentQuestion((prevIndex) =>
      action === "next" ? (prevIndex + 1) : (prevIndex - 1)
    );
    clearSelectRecord();
  };

  useEffect(() => {
    console.log('answerObject', answerObject);
    console.log('finalAnswerObject', finalAnswerObject);
  }, [answerObject, finalAnswerObject]);

  return (
    <div className={styles.quizContainer}>
    <div>Question {currentQuestion + 1}/{questions.length}</div>
    <div className={styles.questionContainer}>
      <form onSubmit={(e) => { e.preventDefault(); handleFinalAnswer(currentQuestion, answerObject); currentQuestion !== 4 ? handleQuestion('next') : ''; }}>
              <label className={styles.label}>{question}</label>
              { 
              currentQuestion === 0 ? (
                answers.map((k, i) => (
                <input
                  key={k.answerId}
                  type="number"
                  id={k.answerTag}
                  name={currentQuestion}
                  placeholder={k.answerLabel}

                  onChange={(e) => handleAnswerInput(k.answerTag, e.target.value)}
                />))
                ) : ( 
                  currentQuestion === 4 ? (
                    answers.map((k, i) => (
                      <div className={styles.answerContainer}>
                      <label className={styles.label} key={i} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
                      <input
                      type="checkbox"
                      id={k.answerTag}
                      name={currentQuestion}
                      value={k.answerTag}
                      onChange={(e) => {
                        handleAnswerCheckbox(k.answerId, e)
                      }}
                      />
                      </div>
                    ))

                ) : (
                  answers.map((k, i) => (
                    <div className={styles.answerContainer}>
                  <label className={styles.label} key={i} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel} { currentQuestion === 3  ? (<p className={styles.desc}>{k.answerDesc}</p>) : ''}</label>
                    <input
                    type="radio"
                    id={k.answerTag}
                    name={currentQuestion}
                    value={k.answerTag}
                    onChange={(e) => handleAnswerInput('Answer', e.target.value)} 
                    />
                </div>
                ))
                )
                  
                  )
              }
              {
                currentQuestion === questions.length - 1 
                ? (<button type="submit">Finish</button>) 
                : (<>
                  <button type="submit">Next</button>
                  <button onClick={(e) => handleQuestion('prev') }>Prev</button>
                  </>)
              }
              <pre>{JSON.stringify(finalAnswerObject, null, 2)}</pre>
      </form>
      <button onClick={(e) => handleQuestion('prev') }>Prev</button>
    </div>
    </div>
  )
}