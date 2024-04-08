import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({ans}) {
  
  const obj = Object.values(ans[4]);

  const b = (obj) => { obj.map( (k, i) => {
    const filterVideo1 = videoInventory.filter((item) => {return item.tag.includes(`${obj[i]}`) });
    return filterVideo1;
  })};

  console.log(`b`, b(obj));

  // const filterVideo1 = videoInventory
  // .filter((item) => {return item.tag.includes(`${ans[1].Answer}`) })
  // .filter((item) => {return item.tag.includes(`${ans[2].Answer}`) })
  // .filter((item) => {return item.tag.includes(`${ans[3].Answer}`) })
  

  return (
    // filterVideo1.map((items, key) => {
    // })
    <></>
  )
}