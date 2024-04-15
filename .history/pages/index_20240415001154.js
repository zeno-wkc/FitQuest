import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import Results from "@/components/Results";

export default function Home() {
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.contentContainer}>
          <div><Image src="/profile.png" width={3820} height={2560} alt="homepage background" /></div>
          <h2>Welcome To</h2>
          <p>Your Perfect Home Workout Companion!</p>
          <Link href="/quiz"><button className={styles.startButton}>GET STARTED</button></Link>
          <p>Already have account? <span>Sign up</span></p>
        </div>
      </main>
    </>
  );
}
