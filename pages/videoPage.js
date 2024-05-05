import Head from "next/head";
import Link from 'next/link';
import styles from '@/styles/videoPage.module.css'
import BottomBar from "@/components/BottomBar";
import TopBarBack from "@/components/TopBarBack";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function videoPage({ dir }) {
  const { locale, query, back } = useRouter();
  const { videoURL, finalAnswers } = query;
  const [iframeHeight, setIframeHeight] = useState(0);
  const [parsedFinalAnswers, setParsedFinalAnswers] = useState(null);

  useEffect(() => {
    if (finalAnswers) {
      const parsedAnswers = JSON.parse(finalAnswers);
      setParsedFinalAnswers(parsedAnswers);
    }
    const calculateIframeHeight = () => {
      const width = document.getElementById('iframe-container').offsetWidth;
      const height = (width / 16) * 9;
      setIframeHeight(height);
    };
    calculateIframeHeight();
    window.addEventListener('resize', calculateIframeHeight);
    return () => {
      window.removeEventListener('resize', calculateIframeHeight);
    };
  }, []);

  return (
    <>
      <Head>
        <title>FitQuest - Quiz</title>
        <meta name="description" content="FitQuest Quiz" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 " />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="zh" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
      </Head>
      <div className={styles.mobileContainer}>
        <TopBarBack linkPath={`result?finalAnswers=${encodeURIComponent(finalAnswers)}`} page={`videoPage?videoURL=${encodeURIComponent(videoURL)}&finalAnswers=${encodeURIComponent(finalAnswers)}`} linkText="Back" />
        <main className={`${styles.main}`}>
          <div id="iframe-container" style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
            <iframe
              style={{
                position: 'absolute',
                width: '100%',
                height: `${iframeHeight}px`,
                top: 0,
                left: 0,
              }}
              src={videoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
            ></iframe>
          </div>
        </main>
        <BottomBar />
      </div>
    </>
  );
}