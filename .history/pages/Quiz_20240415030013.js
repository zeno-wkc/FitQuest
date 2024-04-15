import Image from "next/image";
import styles from "@/styles/Quiz.module.css";
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
      <h2>Quiz</h2>
      <h1>Find the best workout for you!</h1>
      <div><p>Before finish setting up your account, please answer 5 simple questions about your workout habits to receive personalized workout video recommendations that suit you perfectly. </p>
      <p>Let's find the videos suitable for you and get started on your fitness journey today!</p></div>
      <button onClick={() => {setShowQuiz(true); setShowResult(false);}}>Start Quiz</button>
      {(showQuiz && !showResult) && (<><Quiz setShowResult={setShowResult} setFinalAnswers={setFinalAnswers} /></>)}
      {showResult && (<><Results finalAnswers={finalAnswers} /></>)}
    </>
  )
}