import Head from "next/head";
import styles from "@/styles/RedeemPage.module.css"
import Image from "next/image";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";
import TopBarBack from "@/components/TopBarBack";
import BottomBar from "@/components/BottomBar";
import ProfileHeader from "@/components/ProfileHeader";
import FilterBarRedeem from "@/components/FilterBarRedeem";
import RedeemItems from "@/components/RedeemItems";

export default function RedeemPage({ dir }) {
  const page="redeemPage";
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.redeem.head.title' });
  const description = intl.formatMessage({ id: 'page.redeem.head.meta.description' });
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
        <TopBarBack linkPath={`rewards`} page={page} />
        <main className={`${styles.main}`}>
          <ProfileHeader userName={"Jane"} pointBalance={"1580"}/>
          <h1 className={styles.heading}>{contentTitle}</h1>
          <FilterBarRedeem />
          <div className={styles.redeemItems} >
            <RedeemItems />
          </div>
        </main>
        <BottomBar />
      </div>
    </>
  );
}