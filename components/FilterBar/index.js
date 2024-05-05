import styles from "./FilterBar.module.css";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function FilterBar() {
  const { locales } = useRouter();
  const intl = useIntl();
  const keyword01 = intl.formatMessage({ id: 'page.nutrition.filter.keywords01' });
  const keyword02 = intl.formatMessage({ id: 'page.nutrition.filter.keywords02' });
  const keyword03 = intl.formatMessage({ id: 'page.nutrition.filter.keywords03' });
  const keyword04 = intl.formatMessage({ id: 'page.nutrition.filter.keywords04' });

  return(
    <div className={styles.filterBarContainer}>
      <ul className={styles.filterBar}>
        <li className={styles.filterBarBtn}><p>{keyword01}</p></li>
        <li className={styles.filterBarBtn}><p>{keyword02}</p></li>
        <li className={styles.filterBarBtn}><p>{keyword03}</p></li>
        <li className={styles.filterBarBtn}><p>{keyword04}</p></li>
      </ul>
    </div>
  )
}