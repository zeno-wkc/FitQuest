import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Quiz.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";
import Quiz from "@/components/Quiz";
import Results from "@/components/Results";

export default function quiz({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.quiz.head.title' });
  const description = intl.formatMessage({ id: 'page.quiz.head.meta.description' });
  const contentH1 = intl.formatMessage({id: 'page.quiz.h1'});
  const startQuiz = intl.formatMessage({id: 'page.global.startQuiz'});
  const content01 = intl.formatMessage({id: 'page.quiz.content01'});
  const content02 = intl.formatMessage({id: 'page.quiz.content02'});
  
  const [showDesc, setShowDesc] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [finalAnswers, setFinalAnswers] = useState({});

  const handleResetSession = () => { sessionStorage.removeItem('sessionData'); };

  return (
    <>      
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="zh" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
      </Head>
      <div className={styles.mobileContainer}>
        <main dir={dir} className={`${styles.main}`}>
          {(showDesc && !showQuiz) && (
          <div className={styles.quizDescContainer}>
            <div className={styles.bannerContainer}>
              <Image className={styles.imgBanner} src="/background-quiz.jpg" width={1295} height={648} alt="homepage background" priority={true} />
              <h2>Quiz</h2>
            </div>
            <div className={styles.contentContainer}>
              <h1>{contentH1}</h1>
              <div className={styles.content}>
                <p>{content01}</p>
                <p>{content02}</p>
              </div>
              <button className={styles.startButton} onClick={() => {setShowQuiz(true); setShowDesc(false);}}>{startQuiz} <i className="icon-Group-165"></i></button>
            </div>
          </div>)}
          {(showQuiz && !showResult) && (
          <><Quiz setShowResult={setShowResult} setFinalAnswers={setFinalAnswers} dir={dir} /></>)}
          {/* {showResult && (<><Results finalAnswers={finalAnswers} dir={dir} /></>)} */}
        </main>
      </div>
    </>
  )
}