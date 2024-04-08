import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({ans}) {

  console.log(ans);
  console.log(typeof ans[1].Answer);

  const filterVideo = videoInventory
  .filter((item) => {
    return item.tag.includes(`${ans[1].Answer}`) })
    .filter((item) => {
      return item.tag.includes(`${ans[2].Answer}`) })
      .filter((item) => {
        return item.tag.includes(`${ans[3].Answer}`) })
   ;
console.log(filterVideo);
  return (
    <></>
  )
}