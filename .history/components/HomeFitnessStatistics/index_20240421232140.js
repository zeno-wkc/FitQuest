import styles from "./HomeFitnessStatistics.module.css";
import Link from "next/link";
import Image from "next/image";


export default function HomeFitnessStatistics() {
  return (
    <div className={styles.fitnessStatisticsContainer}>
      <div className={styles.titleContainer}>
        <h3>Fitness Statistics</h3>
        <Link className={styles.showBtnLink} href="/">
        Show more
        </Link>
      </div>
      <div className={styles.fitnessStatisticsContainer}>
        <Link className={styles.cardContainerLink} href="/homepage">
        </Link>
        <Link className={styles.cardContainerLink} href="/homepage">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/Fitness-Statistics-01.png" width={400} height={164} alt="homepage background" />
          </div>
        </Link>
        <Link className={styles.cardContainerLink} href="/homepage">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/Fitness-Statistics-02.png" width={400} height={164} alt="homepage background" />
          </div>
        </Link>
      </div>
    </div>
  )
}