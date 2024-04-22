import styles from "./TopBar.module.css";
import Link from "next/link";
import Image from "next/image";


export default function TopBar() {
  return (
    <div className={styles.topBarContainer}>
      <Link className={styles.fitquestLogoLink} href="/">
        <div className={styles.fitquestLogoContainer}>
          <Image ClassName={styles.fitquestLogoImg} src="/FitQuest-logo.png" width={1713} height={430} alt="homepage background" />
        </div>
      </Link>
      <Link className={styles.settingBtnLink} href="/">
      <div className={`${styles.btnContainer} ${styles.bottomBarBtn}`}>
        <i class="icon-Group-166"></i>
      </div>
      </Link>
    </div>
  )
}