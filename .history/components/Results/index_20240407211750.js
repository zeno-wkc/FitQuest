import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";


export default function Result({ans}) {

  console.log(ans);
  console.log(ans[1].Answer);

  const filterVideo = videoInventory
  .filter((item) => {
    item.tag.includes(ans[1].Answer) });
  return (
    <></>
  )
}