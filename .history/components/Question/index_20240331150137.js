import styles from "./Question.module.css";
import { inventory } from "@/data/inventory";

export default function Question({page = '1'}) {
  const questions = inventory.questions;
  const question = (page) => { return questions[`question_${page}`][`question`]; }
  const answer = (page, obj = questions[`question_${page}`][`answer`]) => {
    for (let key in obj) {
      let results;
      results += `<li>${key}</li>`;
    }
    return results;
  }
  const Form = `<p>${question(page)}</p><ul>${answer(page)}</ul>`;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: Form }} />
    </>
  );
}