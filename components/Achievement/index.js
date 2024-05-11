import styles from './Achievement.module.css';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function Achievement() {
  const { locales } = useRouter();
  const intl = useIntl();
  const showMore = intl.formatMessage({ id: 'page.global.showMore' });
  const achievementTitle = intl.formatMessage({ id: 'page.achievement.title' });
  const badgeStatus = intl.formatMessage({ id: 'page.achievement.Status' });

  return (
    <>
      <div className={styles.titleContainer}>
        <h3>{achievementTitle}</h3>
        <Link className={styles.showBtnLink} href="/rewards">{showMore}<i className={`${`icon-Group-186`} ${styles.showMoreBtnIcon}`}></i></Link>
      </div>
      <div className={styles.achievementsContainer}>
        <div className={styles.badgesItem}>
          <Image className={styles.badgesImage} src="/Silver-badge.svg" width={80} height={86} alt="Silver Badge" priority={true} />
          <p className={styles.badgesItemDesc}><span><FormattedMessage id='page.achievement.finished01' /></span><FormattedMessage id='page.achievement.activity01' /><br/>{badgeStatus}</p>
        </div>
        <div className={styles.badgesItem}>
          <Image className={styles.badgesImage} src="/Gold-badge.svg" width={80} height={86} alt="Gold Badge" priority={true} />
          <p className={styles.badgesItemDesc}><span><FormattedMessage id='page.achievement.finished02' /></span><FormattedMessage id='page.achievement.activity02' /><br/>{badgeStatus}</p>
        </div>
        <div className={styles.badgesItem}>
          <Image className={styles.badgesImage} src="/Bronze-badge.svg" width={80} height={86} alt="Bronze Badge" priority={true} />
          <p className={styles.badgesItemDesc}><span><FormattedMessage id='page.achievement.finished03' /></span><FormattedMessage id='page.achievement.activity03' /><br/>{badgeStatus}</p>
        </div>
      </div>
    </>
  )
}