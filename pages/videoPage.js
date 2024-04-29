import Head from "next/head";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function videoPage() {
  const [iframeHeight, setIframeHeight] = useState(0);

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
      <div id="iframe-container" style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
        <iframe
          style={{
            position: 'absolute',
            width: '100%',
            height: `${iframeHeight}px`,
            top: 0,
            left: 0,
          }}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Embedded YouTube Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};