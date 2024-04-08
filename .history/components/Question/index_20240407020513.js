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

  useEffect(() => {
    console.log('answerObject', answerObject);
    console.log('finalAnswerObject', finalAnswerObject);
  }, [answerObject, finalAnswerObject]);



  return (
    <div className={styles.quizContainer}>
      <div>Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.questionContainer}>
      { 
        !showAns && currentQuestion == 0 (
          <form onSubmit={(e) => {e.preventDefault(); submitAnswer(question.id, answerObject)}}>
            <label>{question}</label><br />
            {questions[0].answers.map((k, i) => ( <> <input type="number" name={k.answerTag} placeholder={k.answerLabel} onChange={(e) => { const value = parseInt(e.target.value); handleAnswerSelect(i, value); }} /> </> )) }
            <button type="submit">Next</button>
          </form>
        )
        }{
        !showAns && currentQuestion == 1 (
          <>
        <form onSubmit={(e) => {e.preventDefault(); submitAnswer(questions[1].id, selectedOption)}}>
          <label>{ questions[1].question }</label><br />
          { questions[1].answers.map((k, i) => (<div className={styles.answerContainer}><label className={styles.label} for={k.answerTag}>{k.answerId}. {k.answerLabel}</label> <input type="radio" id={k.answerTag} name={k.answerTag} value={k.answerTag} checked={selectedOption === k.answerTag} onChange={(e) => { setSelectedOption(e.target.value) }} /></div>)) }
          <button type="submit">Next</button>
        </form>

        <form onSubmit={(e) => {e.preventDefault(); submitAnswer(questions[4].id, answerObject)}}>
          <label>{ questions[4].question }</label><br />
          { questions[4].answers.map((k, i) => ( <> <input type="radio" name={k.answerTag} value={k.answerTag}  onChange={(e) => { handleAnswerSelect(i, e.target.value) }} /> </> )) }
          <button type="submit">Next</button>
        </form>
        </>
        )
      }
      </div>
    </div>
  )
}