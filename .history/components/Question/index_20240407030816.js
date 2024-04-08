import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [finalAnswerObject, setFinalAnswerObject] = useState({});
  const [answerObject, setAnswerObject] = useState({});

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  const handleAnswerSelect = (key, answerTag) => {
    setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [key] : answerTag
    }))
    console.log(answerObject);
  }

  const submitAnswer = (key, answerTag) => {
    setFinalAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [key]: answerTag
    }))
    console.log(finalAnswerObject);
  }

  const handleQuestion = (action) => {
    action === 'next' ? setCurrentQuestion(prevIndex => prevIndex + 1) : setCurrentQuestion(nextIndex => nextIndex - 1);
  };

  const result = () => {
    <pre>{JSON.stringify(answerObject, null, 2)}</pre>
  }

  useEffect(() => {
    console.log('answerObject', answerObject);
    console.log('finalAnswerObject', finalAnswerObject);
  }, [answerObject, finalAnswerObject]);



  return (
    <div className={styles.quizContainer}>
      <div>Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.questionContainer}>
      { 
        currentQuestion === 0 ? (
          <form onSubmit={(e) => {e.preventDefault(); submitAnswer(currentQuestion, answerObject); handleQuestion('next'); } }>
            <label>{question}</label><br />
            {answers.map((k, i) => ( <> <input type="number" name={k.answerTag} placeholder={k.answerLabel} onChange={(e) => { const value = parseInt(e.target.value); handleAnswerSelect(i, value); }} /> </> )) }
            <button type="submit">Next</button>
          </form>
      ) : ( currentQuestion === 5 ? (
        <form onSubmit={(e) => {e.preventDefault(); submitAnswer(currentQuestion, answerObject); }}>
        <label>{question}</label><br />
        { answers.map((k, i) => ( <> <input type="radio" name={k.answerTag} value={k.answerTag}  onChange={(e) => { handleAnswerSelect(i, e.target.value) }} /> </> )) }
        {/* <button type="submit">Next</button> */}
        <div><h2>All questions answered!</h2><pre>{JSON.stringify(finalAnswerObject, null, 2)}</pre></div>
      </form>
      ) : (
        <form onSubmit={(e) => {e.preventDefault(); submitAnswer(currentQuestion, selectedOption); handleQuestion('next') }}>
          <label>{question}</label><br />
          { answers.map((k, i) => (<div className={styles.answerContainer}><label className={styles.label} for={k.answerTag}>{k.answerId}. {k.answerLabel}</label> <input type="radio" id={k.answerTag} name={k.answerTag} value={k.answerTag} checked={selectedOption === k.answerTag} onChange={(e) => { setSelectedOption(e.target.value) }} /></div>)) }
          <button type="submit">Next</button>
        </form>
      ))
      }
      </div>
    </div>
  )
}