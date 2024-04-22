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
      case 'loseWeight': return 'Lose Weight';
      case 'gainMuscles': return 'Gain Muscles';
      case 'balance': return 'Maintain well-being';
      default: return null
    }
  }

  console.log('result: ', filterVideo);

  return (
    <>
    <TopBar />
    <div className={styles.videoCardContainer}>
      <h2 className={styles.pageTitle}>Recommanded Videos</h2>
      <div>
        {
          filterVideo.map((item, key) => (
            <div key={key} className={styles.videoCardItems}>
              <Link className={styles.linkage} href={item.videoURL}>
                <div className={styles.imageContainer}>
                  <img className={styles.imageItem} src={`./image-thumbnail/${item.thumbnailLink}.jpeg`} />
                </div>
              </Link>
              <div className={styles.videoContentContainer}>
                <div className={styles.videoContentUpperContainer}>
                  <h2>{bodyPart(finalAnswers[3].Answer)}</h2>
                </div>
                <div className={styles.videoContentBottomContainer}>
                  <h2 className={styles.videoTitle}>{item.videoName}</h2>
                  <p>{item.videoTime}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    <BottomBar />
    </>
  );
}