import styles from "./ProfileHeader.module.css";
import Image from "next/image";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function ProfileHeader({userName, pointBalance}) {
  const { locales } = useRouter();
  const intl = useIntl();
  const greetingText = intl.formatMessage({ id: 'page.profile.greeting.text' });
  const pointBalanceText = intl.formatMessage({ id: 'page.profile.point.text' });

  return(
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <Image src="/ProfileHead.svg" alt="profile Image" width={46} height={46} />
        <h2>{greetingText}{userName}!</h2>
      </div>
      <div className={styles.pointContainer}>
        <div className={styles.currentPoint}>
          <span>{pointBalance}</span>
          <Image src="/fire_icon.svg" alt="point icon" width={17} height={23}/>
        </div>
        <p>{pointBalanceText}</p>
      </div>
    </div>
  )
}