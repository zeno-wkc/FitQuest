import styles from "./TopBar.module.css";
import Link from "next/link";
import Image from "next/image";


export default function TopBar() {
  return (
    <div className={styles.topBarContainer}>
      <Link className={styles.fitquestLogoLink}>
        <div className={styles.fitquestLogoContainer}>
          <Image ClassName={styles.fitquestLogoImg} src="/background-quiz.jpg" width={1295} height={648} alt="homepage background" />
        </div>
      </Link>
      <Link className={styles.settingBtnLink} href="/">
      <div className={`${styles.btnContainer} ${styles.bottomBarBtn}`}>
        <i class="icon-Group-161"></i>
        <h6>Setting</h6>
      </div>
      </Link>
    </div>
  )
}