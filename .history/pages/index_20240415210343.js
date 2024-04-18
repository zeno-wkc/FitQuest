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
          <i class="icon-Group-150"></i>
          <div className={styles.imgContainer}>
            <Image className={styles.imgHomeBackground} src="/background-home.jpg" width={5840} height={2560} alt="homepage background" />
          </div>
          <div className={styles.textContainer}>
          <h2>Welcome To</h2>
          <div className={styles.imglogoContainer}><Image className={styles.imglogo} src="/FitQuest-logo.png" width={1713} height={430} alt="homepage background" />
          </div>
          <p>Your Perfect Home Workout Companion!</p>
          <Link href="/quiz"><button className={styles.startButton}>GET STARTED <i class="icon-Group-165"></i></button></Link>
          <p>Already have account? <span>Sign up</span></p>
          </div>
        </div>
      </main>
    </>
  );
}
