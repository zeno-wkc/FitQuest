import styles from "./Question.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(3);
  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  return (
    <form>
      <label>{question}</label>
    </form>
  );
}