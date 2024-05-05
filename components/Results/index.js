import styles from './Results.module.css';
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function Result({finalAnswers, dir}) {
  const { locales } = useRouter();
  const intl = useIntl();
  const pageTitle = intl.formatMessage({ id: 'page.result.pageTitle' });
  const beginnerH1 = intl.formatMessage({ id: 'page.result.beginnerH1' });
  const intermediateH1 = intl.formatMessage({ id: 'page.result.intermediateH1' });
  const advancedH1 = intl.formatMessage({ id: 'page.result.advancedH1' });
  const beginnerContent = intl.formatMessage({ id: 'page.result.beginnerContent' });
  const intermediateContent = intl.formatMessage({ id: 'page.result.intermediateContent' });
  const advancedContent = intl.formatMessage({ id: 'page.result.advancedContent' });
  const bodyPart1 = intl.formatMessage({ id: 'page.result.bodyPart1' });
  const bodyPart2 = intl.formatMessage({ id: 'page.result.bodyPart2' });
  const bodyPart3 = intl.formatMessage({ id: 'page.result.bodyPart3' });
  const bodyPart4 = intl.formatMessage({ id: 'page.result.bodyPart4' });


  const obj = Object.values(finalAnswers[4]);
  // const videoFilter = videoInventory;
  const filterVideo = videoInventory
  .filter((item) => {return item.tag.includes(`${finalAnswers[1].Answer}`)})
  .filter((item) => {return item.tag.includes(`${finalAnswers[2].Answer}`)})
  .filter((item) => {return item.tag.includes(`${finalAnswers[3].Answer}`)})
  .filter((item) => {if (obj[0] !== undefined) { return item.tag.includes(`${obj[0]}`) || item.tag.includes(`${obj[1]}`) || item.tag.includes(`${obj[2]}`) || item.tag.includes(`${obj[3]}`) || item.tag.includes(`${obj[4]}`)}});
  const level = finalAnswers[1].Answer;
  const storedFinalAnswers = JSON.parse(sessionStorage.getItem('sessionData'));
  console.log(storedFinalAnswers);
  const bodyPart = (data) => {
    switch (data) {
      case 'upperBody': return bodyPart1;
      case 'lowerBody': return bodyPart2;
      case 'coreBody': return bodyPart3;
      case 'fullBody': return bodyPart4;
      default: return null;
    }
  };

  return (
    <>
      <div className={styles.videoCardContainer}>
        {(() => {
          switch (level) {
            case 'beginner':
              return (
                <>
                  <div key={`level_1`} className={styles.levelContainer}>
                    <h1>{beginnerH1}</h1>
                    <Image className={styles.levelImage} src="/Beginner.png" width={314} height={190} alt="Beginner icon image" priority={true} />
                    <p>{beginnerContent}</p>
                  </div>
                </>
              );
            case 'intermediator':
              return (
                <>
                  <div key={`level_2`} className={styles.levelContainer}>
                    <h1>{intermediateH1}</h1>
                    <Image className={styles.levelImage} src="/Intermediate.png" width={314} height={190} alt="Intermediate icon image" priority={true} />
                    <p>{intermediateContent}</p>
                  </div>
                </>
              );
            case 'advance': 
              return (
                <>
                  <div key={`level_3`} className={styles.levelContainer}>
                    <h1>{advancedH1}</h1>
                    <Image className={styles.levelImage} src="/Advanced.png" width={314} height={190} alt="Advanced icon image" priority={true} />
                    <p>{advancedContent}</p>
                  </div>
                </>
              );
            default:
              return null;
          }
        })()}
        <h2 className={styles.pageTitle}>{pageTitle}</h2>

          { 
            filterVideo.map((item, key) => (
              <>
                <div key={`${key}`}>
                  <Link className={styles.linkage} href={{ pathname: '/videoPage', query: { videoURL: item.videoURL , finalAnswers: JSON.stringify(storedFinalAnswers) }}}>
                    <div key={`video${key}`} className={styles.videoCardItems}>
                      <div className={styles.imageContainer}>
                        <img className={styles.imageItem} src={`/image-thumbnail/${item.thumbnailLink}.jpeg`} />
                      </div>
                      <div className={styles.videoContentContainer}>
                        <div className={styles.videoContentUpperContainer}>
                          <h2>{bodyPart(finalAnswers[3].Answer)}</h2>
                        </div>
                        <div className={styles.videoContentBottomContainer}>
                          <h3 className={styles.videoTitle}>{item.videoName}</h3>
                          <p>{item.videoTime}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            ))
          }
      </div>
    </>
  );
}