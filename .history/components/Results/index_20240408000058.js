import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({ans}) {

  console.log(videoInventory[tag]);
  
  const obj = Object.values(ans[4]);
  let itemsInA = b.filter(item => obj.includes(item));
  

  const filterVideo1 = videoInventory.filter((item) => {
    
    item.tag.includes(`${obj[1]}`) 
  
  });


  console.log(`b: `, filterVideo1);

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