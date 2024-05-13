import styles from "./FilterBarRedeem.module.css";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function FilterBarRedeem() {
  const { locales } = useRouter();
  const intl = useIntl();
  const keyword01 = intl.formatMessage({ id: 'page.redeem.filter.keywords01' });
  const keyword02 = intl.formatMessage({ id: 'page.redeem.filter.keywords02' });
  const keyword03 = intl.formatMessage({ id: 'page.redeem.filter.keywords03' });
  const keyword04 = intl.formatMessage({ id: 'page.redeem.filter.keywords04' });

  return(
    <div className={styles.filterBarRedeemContainer}>
      <ul className={styles.filterBarRedeem}>
        <li className={styles.filterBarRedeemBtn}><p>{keyword01}</p></li>
        <li className={styles.filterBarRedeemBtn}><p>{keyword02}</p></li>
        <li className={styles.filterBarRedeemBtn}><p>{keyword03}</p></li>
        <li className={styles.filterBarRedeemBtn}><p>{keyword04}</p></li>
      </ul>
    </div>
  )
}