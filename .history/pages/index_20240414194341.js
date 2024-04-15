import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { inventory } from "@/data/inventory";
import { useState } from "react";
import Question from "@/components/Question";
import Results from "@/components/Results";
import Quiz from "@/components/Quiz";

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [finalAnswers, setFinalAnswers] = useState({});
  

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <button onClick={() => setShowQuiz(true)}>Start Quiz</button>
        {(showQuiz && !showResult) && (<><Quiz setShowResult={setShowResult} setFinalAnswers={setFinalAnswers} /></>)}
        {showResult && (<><Results finalAnswers={finalAnswers} /></>)}
        { console.log(finalAnswers); }
      </main>
    </>
  );
}
