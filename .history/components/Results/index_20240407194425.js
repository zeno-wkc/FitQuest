import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import { videoInventory } from "@/data/inventory";


export default function Result({ans}) {

  const filterVideo = videoInventory.filter((item) => { item.tag.includes(ans["1"]["Answer"]) }).filter((item) => { item.tag.includes(ans["2"]["Answer"]) }).filter((item) => { item.tag.includes(ans["3"]["Answer"]) }).filter((item) => { item.tag.includes(ans["4"]["Answer"]) });

  return (
    <></>
  )
}