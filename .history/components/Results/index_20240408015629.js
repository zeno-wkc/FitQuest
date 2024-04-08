import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answers}) {
// Function to filter videos based on answers
function filterVideos(answers, videos) {
  const filteredVideos = videos.filter(video => {
    // Check if video tags match all answers
    return Object.values(answers).every(answer => {
      // Check if the answer corresponds to a tag in the video
      if (answer.startsWith("Answer")) {
        const tagIndex = parseInt(answer.substring(6)) - 1;
        const tag = Object.keys(video).find(key => key.startsWith("tag") && parseInt(key.substring(3)) === tagIndex);
        return tag ? video[tag].includes(answers[answer]) : true;
      } else {
        return video.tag.includes(answer);
      }
    });
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