import styles from "./HomeFitnessStatistics.module.css";
import Link from "next/link";
import Image from "next/image";


export default function HomeFitnessStatistics() {
  return (
    <div className={styles.homeFitnessStatisticsContainer}>
      <div className={styles.titleContainer}>
        <h3>Fitness Statistics</h3>
        <Link className={styles.showBtnLink} href="/">
        Show more
        </Link>
      </div>
      <div className={styles.homeFitnessStatisticsContentContainer}>
        <Link className={styles.cardContainerLink} href="/homepage">
          <div style="width: 200px">sssssss</div>
        </Link>
        <Link className={styles.cardContainerLink} href="/homepage">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/Fitness-Statistics-01.png" width={300} height={400} alt="homepage background" />
          </div>
        </Link>
        <Link className={styles.cardContainerLink} href="/homepage">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/Fitness-Statistics-02.png" width={300} height={400} alt="homepage background" />
          </div>
        </Link>
      </div>
    </div>
  )
}