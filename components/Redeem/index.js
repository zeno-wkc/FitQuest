import styles from "./Redeem.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function Redeem() {
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.redeem.title' });
  const location = intl.formatMessage({ id: 'page.redeem.title' });

  return (
    <>
      <div className={styles.redeemContainer}>
        <div className={styles.redeemContentContainer}>
          <Image className={styles.redeemLeftContent} src={`/fitnessRewards.jpg`} width={2304} height={1536} alt="get rewards here" priority={true} />
          <div className={styles.redeemRightContent}>
            <h2><FormattedMessage id="page.redeem.title" /></h2>
            <p><FormattedMessage id="page.redeem.description" /></p>
          </div>
        </div>
        <Link className={styles.redeemBtn} href={`/redeemPage`}><button><span>Redeem</span><i className="icon-Group-165"></i></button></Link>
      </div>
    </>
  );
}