import styles from "./Redeem.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function Redeem() {
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.redeem.title' });
  const description = intl.formatMessage({ id: 'page.redeem.description' });

  return (
    <>
      <div className={styles.redeemContainer}>
        <div className={styles.redeemContentContainer}>
          <Image className={styles.redeemLeftContent} src={`/fitnessRewards.jpg`} width={2304} height={1536} alt="get rewards here" priority={true} />
          <div className={styles.redeemRightContent}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <Link className={styles.redeemBtn} href={`/redeemPage`}><button><span><FormattedMessage id="page.global.redeem" /></span><i className="icon-Group-165"></i></button></Link>
      </div>
    </>
  );
}