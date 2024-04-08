import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answers}) {
// Function to filter videos based on answers
function filterVideos(answers, videos) {
  const filteredVideos = videos.filter(video => {
    // Iterate over each answer
    for (const key in answers) {
      // Check if the answer corresponds to a tag in the video
      const tag = answers[key]["Answer"] || answers[key];
      if (!video.tag.includes(tag)) {
        return false; // If the tag is not found, skip to the next video
      }
    }
    return true; // If all conditions are met, include the video in the filtered list
  });

  return filteredVideos;
}

// Filter videos based on answers
const filteredVideos = filterVideos(answers, videoInventory);

// Log the filtered videos
console.log(filteredVideos);


  // const filterVideo1 = videoInventory
  // .filter((item) => {return item.tag.includes(`${ans[1].Answer}`) })
  // .filter((item) => {return item.tag.includes(`${ans[2].Answer}`) })
  // .filter((item) => {return item.tag.includes(`${ans[3].Answer}`) })
  

  return (
    // filterVideo1.map((items, key) => {
    // })
    <div>
    <h2>Filtered Videos</h2>
    <ul>
      {filteredVideos.map(video => (
        <li key={video.id}>
          <a href={video.videoURL} target="_blank" rel="noopener noreferrer">
            {video.videoName}
          </a>
        </li>
      ))}
    </ul>
    <pre>{JSON.stringify(answers, null, 2)}</pre>
  </div>

  );
}