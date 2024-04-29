import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Quiz.module.css";
import { useState } from "react";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import Results from "@/components/Results";

export default function quiz() {
  const [showDesc, setShowDesc] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [finalAnswers, setFinalAnswers] = useState({});

  const handleResetSession = () => {
    sessionStorage.removeItem('sessionData');
    //console.log('Session data reset successfully.');
  };

  return (
    <>      
      <Head>
        <title>FitQuest - Quiz</title>
        <meta name="description" content="FitQuest Quiz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        {(showDesc && !showQuiz) && (
        <div className={styles.quizDescContainer}>
          <div className={styles.bannerContainer}>
            <Image className={styles.imgBanner} src="/background-quiz.jpg" width={1295} height={648} alt="homepage background" />
            <h2>Quiz</h2>
          </div>
          <div className={styles.contentContainer}>
            <h1>Find the best workout for you!</h1>
            <div className={styles.content}>
              <p>Before finish setting up your account, please answer 5 simple questions about your workout habits to receive personalized workout video recommendations that suit you perfectly. </p>
              <p>Let's find the videos suitable for you and get started on your fitness journey today!</p>
            </div>
            <button className={styles.startButton} onClick={() => {setShowQuiz(true); setShowDesc(false);}}>START QUIZ <i className="icon-Group-165"></i></button>
          </div>
        </div>)}
        {(showQuiz && !showResult) && (
        <><Quiz setShowResult={setShowResult} setFinalAnswers={setFinalAnswers} /></>)}
        {showResult && (<><Results finalAnswers={finalAnswers} /></>)}
      </main>
    </>
  )
}