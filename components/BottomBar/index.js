import styles from './BottomBar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function BtmBar() {
  const { locales } = useRouter();
  const intl = useIntl();
  const workout = intl.formatMessage({ id: 'page.bottomBar.workout' });
  const rewards = intl.formatMessage({ id: 'page.bottomBar.rewards' });
  const home = intl.formatMessage({ id: 'page.bottomBar.home' });
  const nutrition = intl.formatMessage({ id: 'page.bottomBar.nutrition' });
  const setting = intl.formatMessage({ id: 'page.bottomBar.setting' });

  return (
    <>
      <div className={styles.bottomBarContainer}>
        <Link className={styles.workoutBtnLink} href="/">
          <div className={`${styles.btnContainer} ${styles.bottomBarBtn}`}>
            <i className="icon-Group-163"></i>
            <h6>{workout}</h6>
          </div>
        </Link>
        <Link className={styles.rewardsBtnLink} href="/">
          <div className={`${styles.btnContainer} ${styles.bottomBarBtn}`}>       
            <i className="icon-Group-162"></i>
            <h6>{rewards}</h6>
          </div>
        </Link>
        <Link className={styles.homeBtnLink} href="/homepage">
          <div className={`${styles.btnContainer} ${styles.bottomBarBtn}`}>
            <i className="icon-Group-159"></i>
            <h6>{home}</h6>
          </div>
        </Link>
        <Link className={styles.nutritionBtnLink} href="/nutrition">
          <div className={`${styles.btnContainer} ${styles.bottomBarBtn}`}>
            <i className="icon-Group-160"></i>
            <h6>{nutrition}</h6>
          </div>
        </Link>
        <Link className={styles.settingBtnLink} href="/">
          <div className={`${styles.btnContainer} ${styles.bottomBarBtn}`}>
            <i className="icon-Group-161"></i>
            <h6>{setting}</h6>
          </div>
        </Link>
      </div>
    </>
  )
}