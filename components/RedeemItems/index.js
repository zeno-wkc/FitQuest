import styles from "./RedeemItems.module.css";
import Image from "next/image";
import Link from "next/link";
import { redeemItems } from "@/data/inventory";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function RedeemItems() {
  const { locales } = useRouter();
  const intl = useIntl();
  const redeemBtn = intl.formatMessage({ id: 'page.global.redeem' });
  const redeemPoint = intl.formatMessage({ id: 'page.redeem.item.point' });

  return (
    <>

      <div className={styles.redeemItemsContainer}>
        {
          redeemItems.map((item, key) => (
            <div key={key} className={styles.redeemItemContainer}>
              <Image className={styles.redeemItemLeftContent} src={`/gift/${item.image}.jpg`} width={2304} height={1536} alt={`${item.image}`} priority={true} />
              <div className={styles.redeemItemRightContent}>
                <p className={styles.redeemItemTitle}><FormattedMessage id={`page.redeem.item.title0${key}`} /></p>
                <p className={styles.redeemItemScores}>{item.scores} {redeemPoint}
                {
                  !item.unlock && (<i className={`icon-Group-188 ${styles.redeemItemUnlock}`}></i>)
                }</p>
                <Link className={styles.redeemItemBtn} href={`/redeemPage`}><button><span>{redeemBtn}</span><i className="icon-Group-165"></i></button></Link>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}