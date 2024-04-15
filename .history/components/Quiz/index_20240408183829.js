import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];
  

  return (
    <>
    </>
  )
}