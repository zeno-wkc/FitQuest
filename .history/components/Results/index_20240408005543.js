import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({ans}) {
  
// Function to check if an object has the "Answer" key
const hasAnswerKey = (obj) => {
  return Object.keys(obj).some(key => key === 'Answer');
};

// Filter videos based on the presence of "Answer" key in answers.js
const filteredVideos = videoInventory.filter((video, index) => {
  return hasAnswerKey(answers[index]);
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