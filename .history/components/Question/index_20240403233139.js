import styles from "./Question.module.css";
import { inventory } from "@/data/inventory";

export default function Question({page = '1'}) {
  const questions = inventory.questions;
  const question = (page) => { return questions[`question_${page}`][`question`]; }
  const answer = (page, obj = questions[`question_${page}`][`answer`]) => {
    let results = '';
    var i = 0;
    for (let key in obj) {
      console.log(key.match(/[_]/) ? true : false, i++);
      console.log(typeof key);
      console.log(`key : `, newKey);
      var newKey = key.toString().replace(/_/gi, "a");
      console.log(`change : `,  newKey);
      results += `<label for="question_${page}_${key}">${key}</label><input type="text" id="question_${page}_${key}" name="question_${page}_${key}" value="${key}"><br>`; }
    return results;
  }
  const Form = `<p>${question(page)}</p><form>${answer(page)}<input type="submit" value="next"></form>`;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: Form }} />
    </>
  );
}