import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Workout.module.css";
import videoInventory from "@/data/videoInventory.json";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";

export default function workout({ dir }) {
  const page = 'workout';
  const { locales } = useRouter();
  const intl = useIntl();
  const filterVideo = videoInventory;
  const title = intl.formatMessage({ id: 'page.workout.head.title' });
  const description = intl.formatMessage({ id: 'page.workout.head.meta.description' });
  const bodyPart1 = intl.formatMessage({ id: 'page.result.bodyPart1' });
  const bodyPart2 = intl.formatMessage({ id: 'page.result.bodyPart2' });
  const bodyPart3 = intl.formatMessage({ id: 'page.result.bodyPart3' });
  const bodyPart4 = intl.formatMessage({ id: 'page.result.bodyPart4' });
  
  const bodypart = (items) => {
    let tempItems = "";
    let hasYoga = false;
    items.forEach((item) => {
      if (item.includes('upperBody')) tempItems += `${bodyPart1} / `;
      if (item.includes('lowerBody')) tempItems += `${bodyPart2} / `;
      if (item.includes('coreBody')) tempItems += `${bodyPart3} / `;
      if (['fullBody', 'yoga'].some(keyword => item.includes(keyword))) {
        if (!hasYoga) {
          tempItems += `${bodyPart4} / `;
          hasYoga = true;
        }
      }
    });
    return tempItems.slice(0, -2);
  }

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
        <main dir={dir} className={`${styles.main}`}>
        <h2 className={styles.pageTitle}><FormattedMessage id="page.workout.title" /></h2>

          { 
            filterVideo.map((item, key) => (
                <div key={`${key}`}>
                  <Link className={styles.linkage} href={{ pathname: '/videoPageFull', query: { videoURL: item.videoURL }}}>
                    <div key={`video${key}`} className={styles.videoCardItems}>
                      <div className={styles.imageContainer}>
                        <img className={styles.imageItem} src={`/image-thumbnail/${item.thumbnailLink}.jpeg`} />
                      </div>
                      <div className={styles.videoContentContainer}>
                        <div className={styles.videoContentUpperContainer}>
                          <h2>{bodypart(item.tag)}</h2>
                        </div>
                        <div className={styles.videoContentBottomContainer}>
                          <h3 className={styles.videoTitle}>{item.videoName}</h3>
                          <p>{item.videoTime}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
            ))
          }
        </main>
        <BottomBar />
      </div>
    </>
  );
}