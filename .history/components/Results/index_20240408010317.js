import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answers}) {
  
// Extracting answer values
const answerValues = Object.values(answers).map(answer => Object.values(answer)[0]);

// Filtering videos
const filteredVideos = videoInventory.filter(video => {
  const tags = video.tag || [];
  return answerValues.every(answer => tags.includes(answer));
});

console.log(filteredVideos);

  // const filterVideo1 = videoInventory
  // .filter((item) => {return item.tag.includes(`${ans[1].Answer}`) })
  // .filter((item) => {return item.tag.includes(`${ans[2].Answer}`) })
  // .filter((item) => {return item.tag.includes(`${ans[3].Answer}`) })
  

  return (
    // filterVideo1.map((items, key) => {
    // })
    <><pre>{JSON.stringify(answers, null, 2)}</pre></>
  )
}