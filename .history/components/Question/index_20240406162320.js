import styles from "./Question.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showAns, setShowAns] = useState(false);
  const [answerObject, setAnswerObject] = useState({});

  const { questions } = inventory;
  const { question, answers } = questions[activeQuestion];

  const updateAnswer = (key, answerTag) => {
    setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [key] : answerTag
    }))
  }

  const handleQuestion = (action) => {
    action === 'next' && (activeQuestion - 1) !== 1  ? setActiveQuestion(prevIndex => prevIndex + 1) : setActiveQuestion(nextIndex => nextIndex - 1)
  };
  
  console.log(answerObject);

  return (
    <>
    <div className={styles.quizContainer}>
      <div>Question {activeQuestion + 1}/{questions.length}</div>
      <div className={styles.questionContainer}>
        <div className={styles.question}>{question}</div> 
          { 
            !showAns && activeQuestion == 0 ? 
              (<form> {answers.map((k, i) => (<><input type="text" placeholder={answers[i].answerLabel} /></>))} </form>) : 
              (<ul>{answers.map((k, i) => (<><li key={answers[i].answerId} id={answers[i].answerTag} onClick={() => {updateAnswer(activeQuestion + 1, answers[i].answerTag)}} select="true">{answers[i].answerLabel}</li></>))}</ul>)
          }
          { activeQuestion < questions.length - 1 && activeQuestion !== questions.length - 1 ? (<><button onClick={() => handleQuestion('next') }>Next</button><button onClick={() => handleQuestion('prev') }>Prev</button></>) : (<div><h2>All questions answered!</h2><pre>{JSON.stringify(answerObject, null, 2)}</pre></div>) }
        </div>
    </div>
    </>
  );
}