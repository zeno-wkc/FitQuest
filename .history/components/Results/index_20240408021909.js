import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answers}) {
  console.log(answers);
  const obj = Object.values(answers[4]);
  console.log(obj);
  console.log(`${answers[1].Answer}`);
  console.log(videoInventory);



  const filterVideo = videoInventory
  .filter((item) => {return item.tag.includes(`${answers[1].Answer}`) });
  // .filter((item) => {return item.tag.includes(`${answers[2].Answer}`) })
  // .filter((item) => {return item.tag.includes(`${answers[3].Answer}`) });
  // .filter((item) => {return item.tag.includes(`${obj[0]}`) })
  // .filter((item) => {return item.tag.includes(`${obj[1]}`) })
  // .filter((item) => {return item.tag.includes(`${obj[2]}`) })
  // .filter((item) => {return item.tag.includes(`${obj[3]}`) })
  // .filter((item) => {return item.tag.includes(`${obj[4]}`) });
  
  console.log('result: ', filterVideo);
  return (
    // filterVideo1.map((items, key) => {
    // })
    <div>
    <h2>Filtered Videos</h2>
    <pre>{JSON.stringify(answers, null, 2)}</pre>
  </div>

  );
}