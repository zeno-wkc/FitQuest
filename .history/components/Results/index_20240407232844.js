import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({ans}) {
  
  const obj = Object.values(ans[4]);
  console.log(obj);


  const filterVideo1 = videoInventory.filter((item) => {
    
    return item.tag.includes(${obj}) 
  });
  // .filter((item) => {return item.tag.includes(`${ans[1].Answer}`) })
  // .filter((item) => {return item.tag.includes(`${ans[2].Answer}`) })
  // .filter((item) => {return item.tag.includes(`${ans[3].Answer}`) })
  console.log(filterVideo1);
  return (
    filterVideo1.map((items, key) => {
    })
  )
}