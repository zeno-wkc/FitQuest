import styles from "./Question.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [activeQuestion, SetActiveQuestion] = useState(1);
  const [showAns, setShowAns] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState({});

  const { questions } = inventory;
  const { question, answers } = questions[activeQuestion];
  const selectAnswer = (currentQuestion, answerId) => {
    setSelectedAnswer({currentQuestion, answerId});
  }
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
              (<ul>{answers.map((k, i) => (
              <>
              <li key={answers[i].answerId} id={answers[i].answerTag} 
              onClick={() => { 
                // selectAnswer((activeQuestion + 1), i); 
                console.log((activeQuestion + 1), answers[i].answerId);
              }}>{answers[i].answerLabel}</li></>))}<button>Next</button></ul>)
          }
          {
            console.log(selectedAnswer);
          }
        </div>
    </div>
    </>
  );
}