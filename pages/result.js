import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Quiz.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";
import Results from "@/components/Results";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";

export default function Result({ dir }) {
  const {locale, query} = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.result.head.title' });
  const description = intl.formatMessage({ id: 'page.result.head.meta.description' });

  const [finalAnswers, setFinalAnswers] = useState(null);

  useEffect(() => {
    const { finalAnswers } = query;
    if (finalAnswers) {
      const parsedFinalAnswers = JSON.parse(finalAnswers);
      setFinalAnswers(parsedFinalAnswers);
    }
  }, [query]);

  console.log(finalAnswers);

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
        <TopBar page={`result`} />
        <main dir={dir} className={`${styles.main}`}>
          {finalAnswers && <Results finalAnswers={finalAnswers} dir={dir} />}
        </main>
        <BottomBar />
      </div>
    </>
  );
}