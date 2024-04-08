import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({ans}) {
  const filterVideo = videoInventory
  .filter((item) => {return item.tag.includes(`${ans[1].Answer}`) })
  .filter((item) => {return item.tag.includes(`${ans[2].Answer}`) })
  .filter((item) => {return item.tag.includes(`${ans[3].Answer}`) })
  .filter((item) => {return item.tag.includes(`${ans[3].Answer}`) })
  .filter((item) => {
    const obj = ans[4];
    for (const item in obj) {
      console.log(obj[item]);
    }});

   ;
  return (
    filterVideo.map((items, key) => {

      console.log(filterVideo);
    })
  )
}