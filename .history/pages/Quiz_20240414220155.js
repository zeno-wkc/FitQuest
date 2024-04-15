import Image from "next/image";
import styles from "@/styles/quiz.module.css";
import { useState } from "react";
import Quiz from "@/components/Quiz";
import Results from "@/components/Results";

export default function quiz() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [finalAnswers, setFinalAnswers] = useState({});

  const handleResetSession = () => {
    sessionStorage.removeItem('sessionData');
    //console.log('Session data reset successfully.');
  };

  return (
    <>
      <button onClick={() => {setShowQuiz(true); setShowResult(false);}}>Start Quiz</button>
      {(showQuiz && !showResult) && (<><Quiz setShowResult={setShowResult} setFinalAnswers={setFinalAnswers} /></>)}
      {showResult && (<><Results finalAnswers={finalAnswers} /></>)}
    </>
  )
}