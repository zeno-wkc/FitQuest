import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerObject, setAnswerObject] = useState({});
  const [finalAnswerObject, setFinalAnswerObject] = useState({});
  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];
  
  const handleAnswerInput = (currentAnswer, value) => {
    if (currentQuestion >= 1 && currentQuestion <= 3) {
      // For questions 2-4 (index 1-3), handle radio inputs
      setAnswerObject((prevAnswers) => ({
        ...Object.fromEntries(
          Object.entries(prevAnswers).map(([key]) => [key, false])
        ), // Deselect all previous answers
        [currentAnswer]: true, // Select the current radio button
      }));
    } else {
      // For other questions, handle checkbox inputs
      if (typeof value === 'boolean') {
        setAnswerObject((prevAnswers) => ({
          ...prevAnswers,
          [currentAnswer]: value,
        }));
      } else {
        const updatedAnswerObject = {};
        Object.keys(answerObject).forEach((key) => {
          if (key === currentAnswer) {
            updatedAnswerObject[key] = true; // Select the current radio button
          } else {
            updatedAnswerObject[key] = false; // Deselect other radio buttons in the same group
          }
        });
        setAnswerObject(updatedAnswerObject);
      }
    }
  };

  const submitAnswer = () => {
    setFinalAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: answerObject,
    }));
    console.log(finalAnswerObject);
    handleQuestion('next');
  };

  const handleQuestion = (action) => {
    setCurrentQuestion((prevIndex) =>
      action === "next" ? prevIndex + 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    console.log('answerObject', answerObject);
    console.log('finalAnswerObject', finalAnswerObject);
  }, [answerObject, finalAnswerObject]);

  return (
    <div className={styles.quizContainer}>
      <div>Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.questionContainer}>
        <form onSubmit={(e) => { e.preventDefault(); submitAnswer(); }}>
          <label>{question}</label>
          {answers.map((k, i) => (
            <div key={k.answerId}>
              <label className={styles.label} htmlFor={k.answerTag}>
                {k.answerLabel}
              </label>
              {currentQuestion === 0 ? (
                <input
                  type="number"
                  id={k.answerTag}
                  name={k.answerTag}
                  placeholder={k.answerLabel}
                  onChange={(e) => handleAnswerInput(k.answerTag, e.target.value)}
                />
              ) : (
                currentQuestion === 4 ? (
                  <input
                    type="checkbox"
                    id={k.answerTag}
                    name={k.answerTag}
                    checked={answerObject[k.answerTag] || false}
                    onChange={(e) => handleAnswerInput(k.answerTag, !answerObject[k.answerTag])}
                  />
                ) : (
                  <input
                    type="radio"
                    id={k.answerTag}
                    name={k.answerTag} // Ensure all radio inputs in the same group have the same name
                    checked={answerObject[k.answerTag] || false}
                    onChange={() => handleAnswerInput(k.answerTag, true)} // Pass true for radio inputs
                  />
                )
              )}
            </div>
          ))}
          <button type="submit">{currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}</button>
        </form>
      </div>
    </div>
  );
}