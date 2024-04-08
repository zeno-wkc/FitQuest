import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import { videoInventory } from "@/data/inventory";


export default function Result({ans}) {

  const filterVideo = videoInventory.filter((item) => { item.tag.includes(ans["1"]["Answer"]) })
  return (
    <></>
  )
}