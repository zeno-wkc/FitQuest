import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answers}) {
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    const filterVideos = () => {
      let filtered = videoinventory;

      // Filtering based on answers
      Object.keys(answers).forEach(key => {
        const answer = answers[key];
        if (answer.Answer) {
          filtered = filtered.filter(video => video.tag.includes(answer.Answer));
        } else if (answer.Answer2 && answer.Answer3 && answer.Answer4 && answer.Answer5) {
          filtered = filtered.filter(video =>
            video.tag.includes(answer.Answer2) ||
            video.tag.includes(answer.Answer3) ||
            video.tag.includes(answer.Answer4) ||
            video.tag.includes(answer.Answer5)
          );
        }
      });

      setFilteredVideos(filtered);
    };

    filterVideos();
  }, [answers, videoinventory]);


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
  </div>
);
    <><pre>{JSON.stringify(answers, null, 2)}</pre></>
  )
}