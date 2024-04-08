import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerObject, setAnswerObject] = useState({});
  const [finalAnswerObject, setFinalAnswerObject] = useState({});

  const { questions } = inventory;
  const { question, answers, type } = questions[currentQuestion];

  const handleFinalAnswer = (currentQuestion, value) => {
    setFinalAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: value,
    }));
    setAnswerObject({});
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

  const handleQuestion = (action) => {
    console.log(action);
    setCurrentQuestion((prevIndex) =>
      action === "next" ? (prevIndex + 1) : (prevIndex - 1)
    );
  };

  useEffect(() => {
    console.log('answerObject', answerObject);
    console.log('finalAnswerObject', finalAnswerObject);
  }, [answerObject, finalAnswerObject]);

  const renderInputField = (answer, i) => {
    if (type === 'number') {
      return (
        <input
          key={answer.answerId}
          type="number"
          id={answer.answerTag}
          name={currentQuestion}
          placeholder={answer.answerLabel}
          onChange={(e) => handleAnswerInput(answer.answerTag, e.target.value)}
        />
      );
    } else if (type === 'checkbox') {
      return (
        <>
          <label key={i} htmlFor={answer.answerTag}>{answer.answerId}. {answer.answerLabel}</label>
          <input
            type="checkbox"
            id={answer.answerTag}
            name={currentQuestion}
            value={answer.answerTag}
            onChange={(e) => handleAnswerCheckbox(answer.answerId, e)}
          />
        </>
      );
    } else {
      return (
        <>
          <label key={i} htmlFor={answer.answerTag}>{answer.answerId}. {answer.answerLabel}</label>
          <input
            type="radio"
            id={answer.answerTag}
            name={currentQuestion}
            value={answer.answerTag}
            onChange={(e) => handleAnswerInput('Answer', e.target.value)} 
          />
        </>
      );
    }
  };

  return (
    <div className={styles.quizContainer}>
      <div>Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.questionContainer}>
        <form onSubmit={(e) => { e.preventDefault(); handleFinalAnswer(currentQuestion, answerObject); currentQuestion !== 4 ? handleQuestion('next') : ''; }}>
          <label>{question}</label>
          {answers.map((answer, i) => renderInputField(answer, i))}
          {currentQuestion === questions.length - 1 
            ? (<button type="submit">Finish</button>) 
            : (<button type="submit">Next</button>)
          }
          <pre>{JSON.stringify(finalAnswerObject, null, 2)}</pre>
        </form>
        <button onClick={(e) => handleQuestion('prev') }>Prev</button>
      </div>
    </div>
  );
}
