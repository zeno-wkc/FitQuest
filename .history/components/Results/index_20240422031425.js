import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";
import Link from "next/link";
import BottomBar from "../BottomBar";
import TopBar from "../TopBar";

export default function Result({finalAnswers}) {
  const obj = Object.values(finalAnswers[4]);
  const videoFilter = videoInventory;
  const filterVideo = videoInventory
  .filter((item) => {return item.tag.includes(`${finalAnswers[1].Answer}`)})
  .filter((item) => {return item.tag.includes(`${finalAnswers[2].Answer}`)})
  .filter((item) => {return item.tag.includes(`${finalAnswers[3].Answer}`)})
  .filter((item) => {if (obj[0] !== undefined) { return item.tag.includes(`${obj[0]}`) || item.tag.includes(`${obj[1]}`) || item.tag.includes(`${obj[2]}`) || item.tag.includes(`${obj[3]}`) || item.tag.includes(`${obj[4]}`)}});

  const bodyPart = (data) => {
    switch (data) {
      case 'upperBody': return 'Upper Body';
      case 'lowerBody': return 'Lower Body';
      case 'coreBody': return 'Core Body';
      case 'fullBody': return 'Full Body';
      default: return null;
    }
  }

  const level = (data) => {
    const s = `<div><h1>Beginner Level!</h1><p>It’s good to start doing more exercises from now on! You can find below the workout videos we recommend to you!</p></div>`
    switch (data) {
      case 'beginner': return {s};
      case 'intermediator': return 'Lower Body';
      case 'advance': return `<div><h1>Beginner Level!</h1><p>It’s good to start doing more exercises from now on! You can find below the workout videos we recommend to you!</p></div>`;
      default: return null;
    }
  }

  console.log('result: ', filterVideo);
  console.log('Ans: ', finalAnswers[3].Answer);
  console.log('level: ', finalAnswers[1].Answer);
  return (
    <>
    <TopBar />
    <div className={styles.videoCardContainer}>
      <div>{level(finalAnswers[1].Answer)}</div>
      <h2 className={styles.pageTitle}>Recommanded Videos</h2>
      <div>
        {
          filterVideo.map((item, key) => (
            <Link className={styles.linkage} href={item.videoURL}>
              <div key={key} className={styles.videoCardItems}>
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
          ))
        }
      </div>
    </div>
    <BottomBar />
    </>
  );
}