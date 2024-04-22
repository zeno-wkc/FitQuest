import styles from './Results.module.css';
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";
import Link from "next/link";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";

export default function Result({finalAnswers}) {
  const obj = Object.values(finalAnswers[4]);
  const videoFilter = videoInventory;
  const filterVideo = videoInventory
  .filter((item) => {return item.tag.includes(`${finalAnswers[1].Answer}`)})
  .filter((item) => {return item.tag.includes(`${finalAnswers[2].Answer}`)})
  .filter((item) => {return item.tag.includes(`${finalAnswers[3].Answer}`)})
  .filter((item) => {if (obj[0] !== undefined) { return item.tag.includes(`${obj[0]}`) || item.tag.includes(`${obj[1]}`) || item.tag.includes(`${obj[2]}`) || item.tag.includes(`${obj[3]}`) || item.tag.includes(`${obj[4]}`)}});
  const level = finalAnswers[1].Answer;
  const bodyPart = (data) => {
    switch (data) {
      case 'upperBody': return 'Upper Body';
      case 'lowerBody': return 'Lower Body';
      case 'coreBody': return 'Core Body';
      case 'fullBody': return 'Full Body';
      default: return null;
    }
  };

  return (
    <>
      <TopBar />
      <div className={styles.videoCardContainer}>
        <div>
        {(() => {
          switch (level) {
            case 'beginner':
              return (
                <>
                  <div key={`level_1`} className={styles.levelContainer}>
                    <h1>Beginner Level!</h1>
                    <Image className={styles.levelImage} src="/Beginner.png" width={314} height={190} alt="Beginner icon image" />
                    <p>It's good to start doing more exercises from now on! You can find below the workout videos we recommend to you!</p>
                  </div>
                </>
              );
            case 'intermediator':
              return (
                <>
                  <div key={`level_2`} className={styles.levelContainer}>
                    <h1>Intermediate Level!</h1>
                    <Image className={styles.levelImage} src="/Intermediate.png" width={314} height={190} alt="Intermediate icon image" />
                    <p>Try more challenging exercises to enhance yourself. You can find below the workout videos we recommend to you!</p>
                  </div>
                </>
              );
            case 'advance': 
              return (
                <>
                  <div key={`level_3`} className={styles.levelContainer}>
                    <h1>Advanced Level!</h1>
                    <Image className={styles.levelImage} src="/Advanced.png" width={314} height={190} alt="Advanced icon image" />
                    <p>Work with a wider variety of exercises to keep your body fit! You can find below the workout videos we recommend to you!</p>
                  </div>
                </>
              );
            default:
              return null;
          }
        })()}</div>
        <h2 className={styles.pageTitle}>Recommanded Videos</h2>
        <div className={styles.resultVideoContainer}>
          {
            filterVideo.map((item, key) => (
              <>
                <Link key={key} className={styles.linkage} href={item.videoURL}>
                  <div className={styles.videoCardItems}>
                    <div className={styles.imageContainer}>
                      <img className={styles.imageItem} src={`./image-thumbnail/${item.thumbnailLink}.jpeg`} />
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
              </>
            ))
          }
        </div>
      </div>
      <BottomBar />
    </>
  );
}