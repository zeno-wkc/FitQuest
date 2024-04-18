import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";
import Link from "next/link";


export default function Result({finalAnswers}) {
  const obj = Object.values(finalAnswers[4]);
  const videoFilter = videoInventory;

  const filterVideo = videoInventory
  .filter((item) => {return item.tag.includes(`${finalAnswers[1].Answer}`) })
  .filter((item) => {return item.tag.includes(`${finalAnswers[2].Answer}`) })
  .filter((item) => {return item.tag.includes(`${finalAnswers[3].Answer}`) })
  //.filter((item) => {return item.tag.includes(`${obj[0]}`) })
  //.filter((item) => {return item.tag.includes(`${obj[1]}`) })
  //.filter((item) => {return item.tag.includes(`${obj[2]}`) })
  //.filter((item) => {return item.tag.includes(`${obj[3]}`) })
  .filter((item) => {return item.tag.includes(`${obj[4]}`) });
  
  console.log('result: ', filterVideo);
  // console.log(typeof filterVideo);

  return (
    <>
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
                <h2 className={styles.videoTitle}>{item.videoName}</h2>
              </Link>
              <p>{item.videoTime}</p>
            </div>
          ))
        }
      </div>
    </div>
    <pre>{JSON.stringify(finalAnswers, null, 2)}</pre>
    </>

  );
}