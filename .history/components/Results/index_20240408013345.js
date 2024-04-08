import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answers}) {
  
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    const filtered = videoInventory.filter(video => {
      // Check if the video tags match the answers
      for (const key in answers) {
        if (key === '0') {
          // Apply filters based on user attributes like age, weight, height
          // Add your conditions here
        } else if (answers[key].hasOwnProperty('Answer')) {
          // Filter videos based on user preferences like beginner, balance, etc.
          if (!video.tag.includes(answers[key].Answer)) {
            return false;
          }
        } else {
          // Filter videos based on specific conditions like pain types
          for (const answerKey in answers[key]) {
            if (!video.tag.includes(answers[key][answerKey])) {
              return false;
            }
          }
        }
      }
      return true;
    });

    setFilteredVideos(filtered);
  }, [answers, videoInventory]);


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