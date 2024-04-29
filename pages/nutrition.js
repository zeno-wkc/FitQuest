import Head from "next/head";
import styles from "@/styles/Nutrition.module.css";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import FilterBar from "@/components/FilterBar";
import Articles from "@/components/Articles";

export default function Nutrition() {
  return (
    <>
    <Head>
      <title>FitQuest - Nutrition</title>
      <meta name="description" content="FitQuest Nutrition" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TopBar />
    <main className={`${styles.main}`}>
      <div className={styles.searchContainer}>
        <input placeholder="Search Articles" type="text" className={styles.searchBar}/>
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.heading}>Browse Articles</h1>
        <i className="icon-Group-172"></i>
      </div>
      <FilterBar />
      <Articles />
    </main>
    <BottomBar />
    </>
  )
}