import styles from "./FitnessStatistics.module.css";
import Link from "next/link";
import Image from "next/image";


export default function FitnessStatistics() {
  return (
    <>
      <div className={styles.titleContainer}>
        <h3>Fitness Statistics</h3>
        <Link className={styles.showBtnLink} href="/">
        Show more
        </Link>
      </div>
      <div className={StatisticsContainer}>
        <Link className={styles.cardContainerLink} href="/">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/Fitness-Statistics-01.png" width={400} height={164} alt="homepage background" />
          </div>
        </Link>
        <Link className={styles.cardContainerLink} href="/">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/Fitness-Statistics-02.png" width={400} height={164} alt="homepage background" />
          </div>
        </Link>
        <Link className={styles.cardContainerLink} href="/">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/card-3.png" width={400} height={164} alt="homepage background" />
          </div>
        </Link>
      </div>
    </>
  )
}