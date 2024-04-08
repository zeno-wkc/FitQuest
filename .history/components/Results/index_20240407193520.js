import styles from "./Results.module.css";
import { useState, useEffect } from "react";
import { videoInventory } from "@/data/inventory";


export default function Result({ans}) {

  const { questions } = videoInventory;
  const { question, answers } = questions[currentQuestion];

  return (
    <></>
  )
}