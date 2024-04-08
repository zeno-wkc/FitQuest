import styles from "./Question.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [activeQuestion, SetActiveQuestion] = useState(1);
  const [showAns, setShowAns] = useState(false);
  const { questions } = inventory;
  const { question, answers } = questions[activeQuestion];

  console.log(questions);
  console.log('Q:', question); 
  console.log('A:', answers);

  return (
    <>
    <div className={styles.questionContainer}>
      <div>Question {activeQuestion + 1}/{questions.length}</div>
      <div>{question}</div>
      
        { 
          !showAns && activeQuestion == 0 ? 
            (<form> {answers.map((k, i) => (<><input type="text" placeholder={answers[i].answerLabel} /></>))} </form>) : 
            (<ul> {answers.map((k, i) => (<><li key="{console.log(typeof k)}" id={answers[i].answerTag}>{answers[i].answerLabel}</li></>))}<button>Next</button></ul>) 
        }
    </div>
    </>
  );
}