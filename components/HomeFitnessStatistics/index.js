import styles from "./HomeFitnessStatistics.module.css";
import Link from "next/link";
import Image from "next/image";
import ChartBar from "@/components/ChartBar";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function HomeFitnessStatistics() {
  const { locales } = useRouter();
  const intl = useIntl();
  const homeFitnessStatistics = intl.formatMessage({ id: 'page.homeFitnessStatistics.title' });
  const showMore = intl.formatMessage({ id: 'page.global.showMore' });

  return (
    <div className={styles.homeFitnessStatisticsContainer}>
      <div className={styles.titleContainer}>
        <h3>{homeFitnessStatistics}</h3>
        <Link className={styles.showBtnLink} href="/">{showMore}<i className={`${`icon-Group-186`} ${styles.showMoreBtnIcon}`}></i></Link>
      </div>
      <div className={styles.homeFitnessStatisticsContentContainer}>
        <Link className={styles.cardContainerLink} href="/homepage">
          <div className={styles.barContainer}>
          <ChartBar />
          </div>
        </Link>
        <Link className={styles.cardContainerLink} href="/homepage">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/Fitness-Statistics-01.png" width={300} height={400} alt="homepage background" priority={true} />
          </div>
        </Link>
        <Link className={styles.cardContainerLink} href="/homepage">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/Fitness-Statistics-02.png" width={300} height={400} alt="homepage background" priority={true} />
          </div>
        </Link>
      </div>
    </div>
  )
}