import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({ans}) {
  
// Extracting answer values from answers.js
const answerValues = Object.values(ans).map(item => item.Answer || item.Answer1 || item.Answer2 || item.Answer3 || item.Answer4 || item.Answer5);
console.log('a: ', answerValues);
// Filtering videos based on answer values
const filteredVideos = videoInventory.filter(video => {
    const { answers } = video;
    if (!answers) return false; // If video doesn't have answers, skip it
    for (const answer of answerValues) {
        if (answers.includes(answer)) {
            return true; // Include the video if it contains at least one of the answer values
        }
    }
    return false; // Exclude the video if none of the answer values match
});

console.log("s :", filteredVideos);

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