import Head from "next/head";
import styles from "@/styles/Water.module.css";
import Image from "next/image";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";
import TopBarBack from "@/components/TopBarBack";
import BottomBar from "@/components/BottomBar";

export default function Water() {
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.water.head.title' });
  const description = intl.formatMessage({ id: 'page.water.head.meta.description' });
  const contentTitle = intl.formatMessage({id: 'page.water.title'});
  const contentDescription = intl.formatMessage({id: 'page.water.description'});

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 " />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="zh" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
      </Head>
      <div className={styles.mobileContainer}>
        <TopBarBack linkPath="nutrition" linkText="Back" page="water" />
        <main className={`${styles.main}`}>
          <div className={styles.articleContainer}>
            <div className={styles.titleContainer}>
              <h1>{contentTitle }</h1>
              <p>{contentDescription}</p>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.imgContainer}>
                <Image className={styles.Img} src="/waterExtended.png" width={390} height={200} alt="A glass of water" priority={true} />
              </div>
              <p className={styles.paragraph}><FormattedMessage id={`page.water.content01`} /></p>
              <ul className={styles.listContainer}>
                <li className={styles.listItem}>
                  <p><span className={styles.bold}><FormattedMessage id={`page.water.bold.content02`} /></span><FormattedMessage id={`page.water.content02`} /></p>
                </li>
                <li className={styles.listItem}>
                  <p><span className={styles.bold}><FormattedMessage id={`page.water.bold.content03`} /></span><FormattedMessage id={`page.water.content03`} /></p>
                </li>
                <li className={styles.listItem}>
                  <p><span className={styles.bold}><FormattedMessage id={`page.water.bold.content04`} /></span><FormattedMessage id={`page.water.content04`} /></p>
                </li>
                <li className={styles.listItem}>
                  <p><span className={styles.bold}><FormattedMessage id={`page.water.bold.content05`} /></span><FormattedMessage id={`page.water.content05`} /></p>
                </li>
                <li className={styles.listItem}>
                  <p><span className={styles.bold}><FormattedMessage id={`page.water.bold.content06`} /></span><FormattedMessage id={`page.water.content06`} /></p>
                </li>
                <li className={styles.listItem}>
                  <p><span className={styles.bold}><FormattedMessage id={`page.water.bold.content07`} /></span><FormattedMessage id={`page.water.content07`} /></p>
                </li>
              </ul>
            </div>
          </div>
        </main>
        <BottomBar />
      </div>
    </>
  );
}