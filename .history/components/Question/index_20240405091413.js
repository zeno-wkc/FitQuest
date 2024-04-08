import styles from "./Question.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [activeQuestion, SetActiveQuestion] = useState(0);
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
      <form>
        { (!showAns && activeQuestion == 1) ? (answers.map((k, i) => (
          <input placeholder ={answers[i].answerLabel} />
        ))) : <></> }
      </form>
    </div>
    </>
  );
}