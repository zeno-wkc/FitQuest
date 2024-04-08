import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answers}) {
  
// Extract the "Answer" values
const answerValues = Object.values(answers).map(item => item.Answer).filter(answer => answer);

// Filter the videos based on the answer values
const filteredVideos = videos.filter(video => answerValues.includes(video.answer));

// Print the filtered videos
console.log(filteredVideos);

  // const filterVideo1 = videoInventory
  // .filter((item) => {return item.tag.includes(`${ans[1].Answer}`) })
  // .filter((item) => {return item.tag.includes(`${ans[2].Answer}`) })
  // .filter((item) => {return item.tag.includes(`${ans[3].Answer}`) })
  

  return (
    // filterVideo1.map((items, key) => {
    // })
    <><pre>{JSON.stringify(ans, null, 2)}</pre></>
  )
}