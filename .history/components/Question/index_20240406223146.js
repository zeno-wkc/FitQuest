import styles from "./Question.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  return (
    <form>
      <label>{questions}</label>
    </form>
  );
}