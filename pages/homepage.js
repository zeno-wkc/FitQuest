import Head from "next/head";
import styles from "@/styles/Homepage.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import HomeNutritonTips from "@/components/HomeNutritonTips";
import HomeFitnessStatistics from "@/components/HomeFitnessStatistics";
import ProfileHeader from "@/components/ProfileHeader";
import ChallengeCard from "@/components/ChallengeCard";
import Weather from "@/components/Weather";
import NewVideo from "@/components/NewVideo";

export default function Homepage({ dir }) {
  const page = "homepage";
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.homepage.head.title' });
  const description = intl.formatMessage({ id: 'page.homepage.head.meta.description' });
  
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
        <TopBar page={page} />
        <main dir={dir} className={`${styles.main}`}>
          <ProfileHeader userName={"Jane"} pointBalance={"1580"}/>
          <section className={styles.firstSection}>
            <ChallengeCard />
            <Weather />
          </section>
          <NewVideo />
          <HomeFitnessStatistics />
          <HomeNutritonTips />
        </main>
        <BottomBar />
      </div>
    </>
  );
}