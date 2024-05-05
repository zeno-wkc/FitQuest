import styles from "./TopBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function TopBar({ page }) {
  const { locales } = useRouter();
  const intl = useIntl();
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = (locale) => {
    console.log("Switching to locale:", locale);
    setShowMenu(false);
  };

  const handleMouseEnter = () => setShowMenu(true);
  const handleMouseLeave = () => setShowMenu(false);

  return (
    <div className={styles.topBarContainer}>
      <Link className={styles.fitquestLogoLink} href="/">
        <div className={styles.fitquestLogoContainer}>
          <Image className={styles.fitquestLogoImg} src="/FitQuest-logo.png" width={1713} height={430} alt="homepage background" priority={true} />
        </div>
      </Link>
      <div className={styles.languageDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`${styles.btnContainer} ${styles.topBarBtn}`}>
          <i className="icon-Group-175"></i>
        </div>
        {showMenu && (
          <div className={styles.languageMenu}>
            {[...locales].sort().map((locale) => (
              <Link key={locale} href={page ? `/${page}` : '/'} locale={locale}>
                <div>{ locale === 'en' ? 'English' : '中文(繁)'}</div></Link>
            ))}
          </div>
        )}
      </div>
      <Link className={styles.alertBtnLink} href="/">
      <div className={`${styles.btnContainer} ${styles.topBarBtn}`}>
        <i className="icon-Group-166"></i>
      </div>
      </Link>
    </div>
  )
}