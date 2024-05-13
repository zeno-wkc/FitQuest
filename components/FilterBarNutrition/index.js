import styles from "./FilterBarNutrition.module.css";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function FilterBarNutrition() {
  const { locales } = useRouter();
  const intl = useIntl();
  const keyword01 = intl.formatMessage({ id: 'page.nutrition.filter.keywords01' });
  const keyword02 = intl.formatMessage({ id: 'page.nutrition.filter.keywords02' });
  const keyword03 = intl.formatMessage({ id: 'page.nutrition.filter.keywords03' });
  const keyword04 = intl.formatMessage({ id: 'page.nutrition.filter.keywords04' });

  return(
    <div className={styles.filterBarNutritionContainer}>
      <ul className={styles.filterBarNutrition}>
        <li className={styles.filterBarNutritionBtn}><p>{keyword01}</p></li>
        <li className={styles.filterBarNutritionBtn}><p>{keyword02}</p></li>
        <li className={styles.filterBarNutritionBtn}><p>{keyword03}</p></li>
        <li className={styles.filterBarNutritionBtn}><p>{keyword04}</p></li>
      </ul>
    </div>
  )
}