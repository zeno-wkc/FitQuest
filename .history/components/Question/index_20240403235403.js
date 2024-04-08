import styles from "./Question.module.css";
import { inventory } from "@/data/inventory";

export default function Question({page = '1'}) {
  const questions = inventory.questions;
  const changeUnit = (key) => { return key.replace(/_/g, ` (`) +`)` };
  const question = (page) => { return questions[`question_${page}`][`question`]; }
  const answer = (page, obj = questions[`question_${page}`][`answer`]) => {
    let results = '';
    for (let key in obj) {
      results += `<label for="question_${page}_${key}">${newKey.capitalize()}</label><input type="text" id="question_${page}_${key}" name="question_${page}_${key}" value="${newKey.capitalize()}"><br>`; }
    return results;
  }
  const Form = `<p>${question(page)}</p><form>${answer(page)}<input type="submit" value="next"></form>`;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: Form }} />
    </>
  );
}