import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answers}) {
// Function to filter videos based on answers
function filterVideos(answers, videos) {
  const filteredVideos = videos.filter(video => {
    // Check if video tags match all answers
    return Object.keys(answers).every(questionId => {
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
  });

  // Log the filtered videos
  console.log("Filtered videos:", filteredVideos);

  return filteredVideos;
}

// Filter videos based on answers
const filteredVideos = filterVideos(answers, videoInventory);


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