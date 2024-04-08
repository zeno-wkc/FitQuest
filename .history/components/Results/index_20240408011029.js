import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answers}) {
  
// Extract tag values from answers
const tags = Object.values(answers).map(obj => obj.Answer || obj.Answer1 || obj.Answer2 || obj.Answer3 || obj.Answer4 || obj.Answer5);

// Filter videos based on tags
const filteredVideos = videoInventory.filter(video => {
  return tags.every(tag => video.tag.includes(tag));
});

// Output filtered videos
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