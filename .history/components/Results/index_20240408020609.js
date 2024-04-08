import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answers}) {
// Function to filter videos based on answers
function filterVideos(answers, videos) {
  const filteredVideos = videos.filter(video => {
    // Check if video tags match all answers
    const matches = Object.keys(answers).every(questionId => {
      const answerKey = `Answer${questionId}`;
      const answer = answers[questionId][answerKey];
      
      // Check if the answer corresponds to a tag in the video
      if (video.hasOwnProperty(answerKey)) {
        const tagIndex = parseInt(answerKey.substring(6)) - 1;
        const tag = `tag${tagIndex}`;
        return video[tag].includes(answer);
      } else {
        return video.tag.includes(answer);
      }
    });

    // Log the video if it matches all answers
    if (matches) {
      console.log(`Matching video found: ${video.title}`);
    }

    return matches;
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
    <pre>{JSON.stringify(answers, null, 2)}</pre>
  </div>

  );
}