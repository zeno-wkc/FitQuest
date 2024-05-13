import Head from "next/head";
import styles from "@/styles/Rewards.module.css"
import Image from "next/image";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import History from "@/components/History";
import Achievement from "@/components/Achievement";
import Redeem from "@/components/Redeem";

export default function Rewards({ dir }) {
  const page="rewards";
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.rewards.head.title' });
  const description = intl.formatMessage({ id: 'page.rewards.head.meta.description' });
  const contentTitle = intl.formatMessage({ id: 'page.rewards.title' });

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
        <TopBar page={page} />
        <main className={`${styles.main}`}>
          <h1 className={styles.heading}>{contentTitle}</h1>
          <Redeem />
          <Achievement />
          <History />
        </main>
        <BottomBar />
      </div>
    </>
  );
}