import Head from "next/head";
import styles from "@/styles/Nutrition.module.css";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import FilterBar from "@/components/FilterBar";
import Articles from "@/components/Articles";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function Nutrition() {
  const page = "nutrition";
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.nutrition.head.title' });
  const description = intl.formatMessage({ id: 'page.nutrition.head.meta.description' });
  const contentTitle = intl.formatMessage({id: 'page.nutrition.title'});
  const searchPlaceholder = intl.formatMessage({id: 'page.nutrition.search.placeholder'});

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
      <TopBar page= {page} />
      <main className={`${styles.main}`}>
        <div className={styles.searchContainer}>
          <input placeholder={searchPlaceholder} type="text" className={styles.searchBar}/>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.heading}>{contentTitle}</h1>
          <i className="icon-Group-172"></i>
        </div>
        <FilterBar />
        <Articles />
      </main>
      <BottomBar />
    </div>
    </>
  )
}