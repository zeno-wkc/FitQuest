import styles from "./Question.module.css";

export default function Question() {
  var Form = `<p>Testing</p>`
  return (
    <>
    <div dangerouslySetInnerHTML={{ __html: `Form` }} />
    </>
  );
}