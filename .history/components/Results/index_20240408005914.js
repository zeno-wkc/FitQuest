import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({ans}) {
  
// Extracting answer values from answers.js
const answerValues = Object.values(ans).map(obj => obj.Answer);

// Filtering video list based on answer values
const filteredVideos = videoInventory.filter(video => {
    // Checking if any of the answer values are present in the video's answers list
    return answerValues.some(answer => video.answers.includes(answer));
});

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