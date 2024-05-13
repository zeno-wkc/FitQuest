import Head from "next/head";
import styles from "@/styles/Faq.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";
import TopBarBack from "@/components/TopBarBack";
import BottomBar from "@/components/BottomBar";
import FaqList from "@/components/FaqList";

export default function Settings({ dir }) {
  const page = "faq";
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.faq.head.title' });
  const description = intl.formatMessage({ id: 'page.faq.head.meta.description' });
  const heading = intl.formatMessage({ id: 'page.faq.title' });

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
        <TopBarBack linkPath={`settings`} linkText={`back`} page={page} />
        <main className={`${styles.mainContainer}`}>
          <h1 className={styles.heading}>{heading}</h1>
          <FaqList />
        </main>
        <BottomBar />
      </div>
    </>
  );
}