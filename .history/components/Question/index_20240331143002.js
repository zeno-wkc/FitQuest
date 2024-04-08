import styles from "./Question.module.css";
import { inventory } from "@/data/inventory";

export default function Question({page = '1'}) {
  const questions = inventory.questions;
  const question = (page) => { return questions[`question_${page}`][`question`]; }
  console.log(question(page));
  var Form = `<p>{${question(page)}}</p>`

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: Form }} />
    </>
  );
}