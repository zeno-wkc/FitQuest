import styles from "./Question.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";

export default function Question({page = '1'}) {
  const [activeQuestion, SetActiveQuestion] = useState('1');
  const { questions } = inventory;
  const { question, answers } = questions[activeQuestion-1];

  console.log(questions);
  console.log('Q:', question); 
  console.log('A:', answers);
  // const changeUnit = (key) => { return key.replace(/_/g, ` (`) +`)` };
  // const capitalize = (string) => { return string.replace(/^./, string[0].toUpperCase()); }
  // const question = (page) => { return questions[`question_${page}`][`question`]; }
  // const answer = (page, obj = questions[`question_${page}`][`answer`], results = '') => {
  //   for (let key in obj) {
  //     const newKey = key.match(/[_]/) ? changeUnit(key) : key;
  //     results += `<label for="question_${page}_${key}">${capitalize(newKey)}</label><input type="text" id="question_${page}_${key}" name="question_${page}_${key}" value="${capitalize(newKey)}"><br>`; }
  //   return results;
  // }
  // const Form = `<p>${question(page)}</p><form>${answer(page)}<input type="submit" value="next"></form>`;

  return (
    <>
    <div>
      <div>{activeQuestion}/{questions.length}</div>
      <div>{question}</div>
    </div>
    </>
  );
}