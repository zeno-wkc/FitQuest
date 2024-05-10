import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function Home({ dir }) {
  const page = '';
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.home.head.title' });
  const description = intl.formatMessage({ id: 'page.home.head.meta.description' });
  const contentDescription = intl.formatMessage({id: 'page.home.description'});
  const getStart = intl.formatMessage({id: 'page.global.getStart'});
  const signUp = intl.formatMessage({id: 'page.global.signUp'});
  const content01 = intl.formatMessage({id: 'page.home.content01'});
  const content02 = intl.formatMessage({id: 'page.home.content02'});
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = (locale) => {
    console.log("Switching to locale:", locale);
    setShowMenu(false);
  };

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="zh" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
      </Head>
      <div className={styles.mobileContainer}>
        <main dir={dir} className={`${styles.main}`}>
          <div className={styles.languageDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`${styles.btnContainer} ${styles.topBarBtn}`}>
              <i className="icon-Group-183"></i>
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
          <div className={styles.contentContainer}>
            <div className={styles.imgContainer}>
              <Image className={styles.imgHomeBackground} src="/background-home.jpg" width={5840} height={2560} alt="homepage background" priority={true} />
            </div>
            <div className={styles.textContainer}>
            <h2>{contentDescription}</h2>
            <div className={styles.imglogoContainer}><Image className={styles.imglogo} src="/FitQuest-logo.png" width={1713} height={430} alt="homepage background" />
            </div>
            <p>{content01}</p>
            <Link href="/quiz"><button className={styles.startButton}>{getStart} <i className="icon-Group-165"></i></button></Link>
            <p>{content02} <span>{signUp}</span></p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
