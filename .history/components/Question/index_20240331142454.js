import styles from "./Question.module.css";
import { inventory } from "@/data/inventory";

export default function Question({page}) {
  const questions = inventory.questions;
  const question = (page) => { questions[`question_${page}`].question }
  var Form = `<p>{${question}}</p>`

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: Form }} />
    </>
  );
}