import styles from "./TopBarBack.module.css";
import Link from "next/link";
import Image from "next/image";

export default function TopBarBack({ linkPath, linkText }) {
  return (
    <div className={styles.topBarContainer}>
      <Link className={styles.backBtnLink} href={linkPath}>
        <div className={`${styles.btnContainer} ${styles.topBarBtn}`}>
          <i className="icon-Group-174"></i>
        </div>
      </Link>
      <Link className={styles.fitquestLogoLink} href="/">
        <div className={styles.fitquestLogoContainer}>
          <Image className={styles.fitquestLogoImg} src="/FitQuest-logo.png" width={1713} height={430} alt="homepage background" />
        </div>
      </Link>
      <Link className={styles.alertBtnLink} href="/">
        <div className={`${styles.btnContainer} ${styles.topBarBtn}`}>
          <i className="icon-Group-166"></i>
        </div>
      </Link>
    </div>
  )
}