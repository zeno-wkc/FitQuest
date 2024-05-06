import styles from "./ChallengeCard.module.css"
import Image from "next/image";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function ChallengeCard() {
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.challengeCard.content.title' });
  const description = intl.formatMessage({ id: 'page.challengeCard.content.description' });
  const days = intl.formatMessage({ id: 'page.challengeCard.content.days' });

  return(
    <>
      <div className={styles.challengeCardContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.progressBar}>
          <div className={`${styles.progress2} ${styles.progress_moved}`}>
            <div className={styles.progress_bar2}>
              <Image src="/progressBar_icon.svg" width={22.4} height={21.6} alt="progress bar icon" priority={true} />
            </div>
          </div>
          <p>{days}</p>
        </div>
      </div> 
    </>
  )
}