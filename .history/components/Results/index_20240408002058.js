import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({ans}) {
  
  // Extract answers
  const answerKeys = Object.keys(ans);
  const extractedAnswers = answerKeys.map(key => ans[key].Answer);
  
  // Filter video inventory based on answers
  const filteredVideos = Object.values(videoInventory).filter(video => {
    // Check if the video's tags match any of the extracted answers
    return extractedAnswers.some(answer => {
      // If the video has tags field, check if it contains the answer
      if (video.tags) {
        return video.tags.includes(answer);
      }
      return false;
    });
  });
  
  // Display filtered videos
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