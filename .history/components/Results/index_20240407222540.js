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
    console.log(item);
    return item.tag.includes(`${ans[3].Answer}`) })

   ;
  return (
    filterVideo.map((items, key) => {

      console.log(filterVideo);
    })
  )
}