import styles from "./Question.module.css";
import { inventory } from "@/data/inventory";

export default function Question({page = '1'}) {
  const questions = inventory.questions;
  const question = (page) => { return questions[`question_${page}`][`question`]; }
  const answer = (page, obj = questions[`question_${page}`][`answer`]) => {
    const answerList = document.createElement("ul");
      for (let key in obj) {
        results += `<li>${key}</li>`;
      }
      return results;
    }

  }
  var Form = `<p>${question(page)}</p><ul>${answer(page)}</ul>`

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: Form }} />

    </>
  );
}