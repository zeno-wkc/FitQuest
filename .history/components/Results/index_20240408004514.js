import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answer}) {
  
// Extracting Answer values from the answers.js file
const answerValues = Object.values(answers).map(item => item.Answer);

// Filtering videos based on Answer values
const filteredVideos = videoInventory.filter(video => {
    // Checking if the video has any of the Answer values
    return Object.values(video).some(value => answerValues.includes(value));
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