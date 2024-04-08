import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";
import Link from "next/link";


export default function Result({answers}) {
  const obj = Object.values(answers[4]);
  const videoFilter = videoInventory;

  const filterVideo = videoInventory
  .filter((item) => {return item.tag.includes(`${answers[1].Answer}`) })
  .filter((item) => {return item.tag.includes(`${answers[2].Answer}`) })
  .filter((item) => {return item.tag.includes(`${answers[3].Answer}`) })
  .filter((item) => {return item.tag.includes(`${obj[0]}`) })
  .filter((item) => {return item.tag.includes(`${obj[1]}`) })
  .filter((item) => {return item.tag.includes(`${obj[2]}`) })
  .filter((item) => {return item.tag.includes(`${obj[3]}`) })
  .filter((item) => {return item.tag.includes(`${obj[4]}`) });
  
  // console.log('result: ', filterVideo);
  // console.log(typeof filterVideo);

  return (
    <>
    <div>
      <h2>Recommanded Videos</h2>
      <div>
        {
          filterVideo.map((item, key) => (
            <>
              <Link href={item.videoURL}>
                <h2>{item.videoName}</h2>
                <div className={styles.imageContainer}>
                  <img src={`./image-thumbnail/${item.thumbnailLink}.jpeg`} />
                </div>
              </Link>
              <p>{item.videoTime}</p>
            </>
          ))
        }
      </div>
    </div>
    <pre>{JSON.stringify(answers, null, 2)}</pre>
    </>

  );
}