import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answers}) {
  
  function filterVideos(answers, videoInventory) {
    return videoInventory.filter(video => {
      // Check if all tags in answers match the video's tags
      return Object.keys(answers).every(key => {
        if (key === "0") return true; // Ignore age, weight, height
        if (key === "4") {
          // Check for multiple tags in Answer2, Answer3, Answer4, Answer5
          for (let i = 2; i <= 5; i++) {
            if (answers[key]["Answer" + i] && !video.tag.includes(answers[key]["Answer" + i])) {
              return false;
            }
          }
          return true;
        }
        // Check if the video has the specific tag mentioned in the answer
        return video.tag.includes(answers[key]["Answer"]);
      });
    });
  }
  
  // Call the function to get filtered videos
  const filteredVideos = filterVideos(answers, videoInventory);
  
  // Output the filtered videos
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