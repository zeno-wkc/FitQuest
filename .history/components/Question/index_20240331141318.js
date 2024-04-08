import styles from "./Question.module.css";
import Script from 'next/script';

export default function Question() {
  var Form = `<p>Testing</p>`
  return (
    <>
    <div dangerouslySetInnerHTML={{ __html: `Form` }} />
    </>
  );
}