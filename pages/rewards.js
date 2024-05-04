import Head from "next/head";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import FilterBar from "@/components/FilterBar";
import Image from "next/image";
import styles from "@/styles/Rewards.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Rewards() {
    return (
      <>
      <Head>
        <title>FitQuest - Rewards</title>
        <meta name="description" content="FitQuest Rewards" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar/>
      <main className={`${styles.main}`}>
        <section className={styles.rewardsContainer}>
            <div className={styles.rewardsTitle}>
                <h1>My Rewards</h1>
            </div>
            <div className={styles.rewardsItems}>
                <Image className={styles.cardImage} src="/fitnessRewards.jpeg" width={237} height={161} alt="Fitness Rewards" />  
                <div className={styles.rewardsItemsDetails}>
                    <h3>Get Rewards Here!</h3>
                    <p>Redeem your points for rewards</p>
                    <button className={styles.redeemButton} onClick={() => {}}>Redeem <i className="icon-Group-165"></i></button>
                </div>
            </div>
        </section>

        <section className={styles.achievementsContainer}>
            <div className={styles.achievementsTitle}>
                <h3>Achievements</h3>
                <p>Show More</p>
            </div>
            <div className={styles.BadgesContainer}>
                <div className={styles.Badges}>
                    <Image className={styles.archievementsImage} src="/rewards/Silver-badge.svg" width={80} height={86} alt="Silver Badge" /> 
                    <p><span>30</span> Upper Body Videos Completed </p>
                </div>
                <div className={styles.Badges}>
                    <Image className={styles.archievementsImage} src="/rewards/Gold-badge.svg" width={80} height={86} alt="Silver Badge" /> 
                    <p><span>50</span> Full Body Videos Completed </p>
                </div>
                <div className={styles.Badges}>
                    <Image className={styles.archievementsImage} src="/rewards/Bronze-badge.svg" width={80} height={86} alt="Silver Badge" /> 
                    <p><span>20</span> Core Training Videos Completed </p>
                </div>
            </div>
        </section>

        <section className={styles.weightContainer}>
            <div className={styles.weightTitle}>
                <h3>Weight</h3>
            </div>
            <div className={styles.weight}>
                <Image src="/rewards/weight.svg" width={350} height={99} alt="Weight" />  
            </div>
        </section>

        <section className={styles.historyContainer}>
            <div className={styles.historyTitle}>
                <h3>History</h3>
                <p>Show More</p>
            </div>
            <div className={styles.history}>
                <Image src="/rewards/history.svg" width={430} height={230} alt="History record" />  
            </div>
        </section>
    </main>
    <BottomBar/>
    </>
  )
}