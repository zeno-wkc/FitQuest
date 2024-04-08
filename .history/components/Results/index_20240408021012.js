import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({answers}) {
  console.log(answers);
  const obj = Object.values(answers[4]);
  console.log(obj);

  const filterVideo1 = videoInventory
  .filter((item) => {return item.tag.includes(`${ans[1].Answer}`) })
  .filter((item) => {return item.tag.includes(`${ans[2].Answer}`) })
  .filter((item) => {return item.tag.includes(`${ans[3].Answer}`) })
  .filter((item) => {return item.tag.includes(`${ans[3].Answer}`) })
  

  return (
    // filterVideo1.map((items, key) => {
    // })
    <div>
    <h2>Filtered Videos</h2>
    <pre>{JSON.stringify(answers, null, 2)}</pre>
  </div>

  );
}