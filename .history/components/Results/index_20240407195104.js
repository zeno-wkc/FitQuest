import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({ans}) {

  console.log(...videoInventory);

  const filterVideo = videoInventory.filter((item) => { item.tag.includes(ans["1"]["Answer"]) }).filter((item) => { item.tag.includes(ans["2"]["Answer"]) }).filter((item) => { item.tag.includes(ans["3"]["Answer"]) }).filter((item) => { item.tag.includes(ans["4"]["Answer"]) });

  return (
    <></>
  )
}