import Image from "next/image";
import styles from "@/styles/Homepage.module.css";
import { useState, useEffect } from "react";
import BottomBar from "@/components/BottomBar";
import TopBar from "@/components/TopBar";
import HomeNutritonTips from "@/components/HomeNutritonTips";
import HomeFitnessStatistics from "@/components/HomeFitnessStatistics";
import Weather from "@/components/Weather";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className={`${styles.mainContainer}`}>
        <Weather />
        <HomeFitnessStatistics />
        <HomeNutritonTips />
      </main>
      <BottomBar />
    </>
  );
}
