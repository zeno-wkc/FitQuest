import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Homepage.module.css";
import { useState, useEffect } from "react";
import BottomBar from "@/components/BottomBar";
import TopBar from "@/components/TopBar";
import HomeNutritonTips from "@/components/HomeNutritonTips";
import HomeFitnessStatistics from "@/components/HomeFitnessStatistics";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>FitQuest - Home</title>
        <meta name="description" content="FitQuest Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className={`${styles.mainContainer}`}>
        <HomeFitnessStatistics />
        <HomeNutritonTips />
      </main>
      <BottomBar />
    </>
  );
}
