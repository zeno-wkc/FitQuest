import Head from "next/head";
import Link from 'next/link';
import styles from '@/styles/videoPage.module.css'
import BottomBar from "@/components/BottomBar";
import TopBar from "@/components/TopBar";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function videoPage() {
  const [iframeHeight, setIframeHeight] = useState(0);
  const router = useRouter();
  const { videoURL } = router.query;

  useEffect(() => {
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
      </Head>
      <TopBar />
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
            src={videoURL}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </main>
      <BottomBar />
    </>
  );
};

<iframe width="560" height="315" src="https://www.youtube.com/embed/RcLz_atcq8w?si=U1-U3V2Fscg2kJLj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>