import styles from "./Question.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [activeQuestion, setActiveQuestion] = useState(2);
  const [showAns, setShowAns] = useState(false);
  const [answerobject, setAnswerObject] = useState({});

  const { questions } = inventory;
  const { question, answers } = questions[activeQuestion];



  const updateAnswer = (currentQuestion, answerTag) => {
    const newAnswer = {currentQuestion: answerTag};
    setAnswerObject(newAnswer);
    console.log(answerobject);
  }

  console.log(answerobject);
  // console.log(questions);
  // console.log('Q:', question); 
  // console.log('A:', answers);
  return (
    <>
    <div className={styles.quizContainer}>
      <div>Question {activeQuestion + 1}/{questions.length}</div>
      <div className={styles.questionContainer}>
        <div className={styles.question}>{question}</div> 
          { 
            !showAns && activeQuestion == 0 ? 
              (<form> {answers.map((k, i) => (<><input type="text" placeholder={answers[i].answerLabel} /></>))} </form>) : 
              (<ul>{answers.map((k, i) => (<><li key={answers[i].answerId} id={answers[i].answerTag} onClick={() => {updateAnswer((activeQuestion + 1), answers[i].answerTag)}}>{answers[i].answerLabel}</li></>))}<button>Next</button></ul>)
          }
        </div>
    </div>
    </>
  );
}