import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({ans}) {

  const filteringCriteria = Object.values(ans).map(obj => obj.Answer);

  // Function to check if a video matches the filtering criteria
  const videoMatchesCriteria = (video, criteria) => {
      // Check if any of the criteria are present in the video's tags
      return criteria.some(criterion => video.tags.includes(criterion));
  };
  
  // Filter the video inventory based on the filtering criteria
  const filteredVideos = videoInventory.filter(video => {
      // For each video, check if it matches the filtering criteria
      return videoMatchesCriteria(video, filteringCriteria);
  });
  
  // Output the filtered videos
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