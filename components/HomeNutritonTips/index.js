import styles from "./HomeNutritonTips.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function HomeNutritonTips() {
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.homeNutritonTips.title' });
  const showMore = intl.formatMessage({ id: 'page.global.showMore' });

  return (
    <div className={styles.homeNutritonTipsContainer}>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
        <Link className={styles.showBtnLink} href="/nutrition">{showMore}</Link>
      </div>
      <div className={styles.homeNutritonTipsContentContainer}>
        <Link className={styles.cardContainerLink} href="/salads">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/card-3.png" width={400} height={164} alt="card image background" priority={true} />
            <div className={styles.contentContainer}>
              <h2><FormattedMessage id="page.homeNutritonTips.article01.title" /></h2>
              <p><FormattedMessage id="page.homeNutritonTips.description" /></p>
            </div>
          </div>
        </Link>
        <Link className={styles.cardContainerLink} href="/Homepage">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/card-1.png" width={400} height={164} alt="card image background" priority={true} />
            <div className={styles.contentContainer}>
              <h2><FormattedMessage id="page.homeNutritonTips.article02.title" /></h2>
              <p><FormattedMessage id="page.homeNutritonTips.description" /></p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}