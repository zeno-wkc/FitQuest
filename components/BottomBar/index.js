import styles from './BottomBar.module.css';
import Link from 'next/link';

export default function BtmBar() {
  return (
    <>
      <div className={styles.bottomBarContainer}>
        <Link className={styles.workoutBtnLink} href="/">
          <div className={`${styles.btnContainer} ${styles.bottomBarBtn}`}>
            <i className="icon-Group-163"></i>
            <h6>Workout</h6>
          </div>
        </Link>
        <Link className={styles.rewardsBtnLink} href="/">
          <div className={`${styles.btnContainer} ${styles.bottomBarBtn}`}>       
            <i className="icon-Group-162"></i>
            <h6>Rewards</h6>
          </div>
        </Link>
        <Link className={styles.homeBtnLink} href="/homepage">
          <div className={`${styles.btnContainer} ${styles.bottomBarBtn}`}>
            <i className="icon-Group-159"></i>
            <h6>Home</h6>
          </div>
        </Link>
        <Link className={styles.nutritionBtnLink} href="/nutrition">
          <div className={`${styles.btnContainer} ${styles.bottomBarBtn}`}>
            <i className="icon-Group-160"></i>
            <h6>Nutrition</h6>
          </div>
        </Link>
        <Link className={styles.settingBtnLink} href="/">
          <div className={`${styles.btnContainer} ${styles.bottomBarBtn}`}>
            <i className="icon-Group-161"></i>
            <h6>Setting</h6>
          </div>
        </Link>
      </div>
    </>
  )
}