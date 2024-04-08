import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(4);
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
    console.log(finalAnswerObject);
  };
  
  const handleAnswerInput = (answersTag, e) => {
    console.log(e)
    /*
    setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [answersTag]: value,
    }));
    console.log(answerObject);
    */
  };

  const handleQuestion = (action) => {
    setCurrentQuestion((prevIndex) =>
      action === "next" ? prevIndex + 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    console.log('answerObject', answerObject);
    console.log('finalAnswerObject', finalAnswerObject);
  }, [answerObject, finalAnswerObject]);

  return (
    <div className={styles.quizContainer}>
    <div>Question {currentQuestion + 1}/{questions.length}</div>
    <div className={styles.questionContainer}>
      {/* {question}
      {answers[1].answerId} */}
      <form onSubmit={(e) => { e.preventDefault(); handleFinalAnswer(currentQuestion, answerObject); handleQuestion('next'); }}>
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
                />))
                ) : ( 
                  currentQuestion === 4 ? (
                    answers.map((k, i) => (
                      <>
                      <label key={i} htmlFor={k.answerTag}>{k.answerId}{k.answerLabel}</label>
                      <input
                      type="checkbox"
                      id={k.answerTag}
                      name={k.answerTag}
                      value={k.answerTag}
                      onChange={(e) => {
                        handleAnswerInput(k.answerId, e)
                      }}
                      />
                      </>
                    ))

                ) : (<></>)
                  
                  )
              }
              <button type="submit">Next</button>
              {/* <pre>{JSON.stringify(answerObject, null, 2)}</pre> */}
      </form>
    </div>
    </div>
  )
}