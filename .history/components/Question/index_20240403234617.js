import styles from "./Question.module.css";
import { inventory } from "@/data/inventory";

export default function Question({page = '1'}) {
  const questions = inventory.questions;
  const question = (page) => { return questions[`question_${page}`][`question`]; }
  const answer = (page, obj = questions[`question_${page}`][`answer`]) => {
    let results = '';
    var i = 0;
    for (let key in obj) {
      const changeKeyValue = () => { return key.replace(/_/g, ` (`) +`)` };
      const newKey = key.match(/[_]/) ? changeKeyValue() : key;
      results += `<label for="question_${page}_${key}">${newKey}</label><input type="text" id="question_${page}_${key}" name="question_${page}_${key}" value="${newKey}"><br>`; }
    return results;
  }
  const Form = `<p>${question(page)}</p><form>${answer(page)}<input type="submit" value="next"></form>`;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: Form }} />
    </>
  );
}