import styles from "./Question.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finalAnswerObject, setFinalAnswerObject] = useState({});

  const { questions } = inventory;
  const { question, answers: questionAnswers } = questions[currentQuestion];

  const handleAnswerInput = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  const handleAnswerSelect = (answerTag) => {
    setAnswers({ [currentQuestion]: answerTag });
  };

  const handleMultiSelect = (answerTag, checked) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [answerTag]: checked
    }));
  };

  const submitAnswer = () => {
    setFinalAnswerObject((prevFinalAnswers) => ({
      ...prevFinalAnswers,
      ...answers
    }));
    // Proceed to next question
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    // Clear answers for the next question
    setAnswers({});
  };

  const resetAnswers = () => {
    setFinalAnswerObject({});
    setAnswers({});
  };

  return (
    <div className={styles.quizContainer}>
      <div>Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.questionContainer}>
        <form onSubmit={(e) => { e.preventDefault(); submitAnswer(); }}>
          <label>{question}</label><br />
          {currentQuestion === 0 && questionAnswers.map((answer, index) => (
            <input
              key={index}
              type="text"
              name={answer.answerTag}
              placeholder={answer.answerLabel}
              value={answers[answer.answerTag] || ""}
              onChange={handleAnswerInput}
            />
          ))}
          {currentQuestion >= 1 && currentQuestion <= 4 && questionAnswers.map((answer, index) => (
            <div key={index}>
              <input
                type="radio"
                id={answer.answerTag}
                name="answer"
                value={answer.answerTag}
                checked={answers[currentQuestion] === answer.answerTag}
                onChange={() => handleAnswerSelect(answer.answerTag)}
              />
              <label htmlFor={answer.answerTag}>{answer.answerLabel}</label>
            </div>
          ))}
          {currentQuestion === 4 && questionAnswers.map((answer, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={answer.answerTag}
                name={answer.answerTag}
                checked={answers[answer.answerTag] || false}
                onChange={(e) => handleMultiSelect(answer.answerTag, e.target.checked)}
              />
              <label htmlFor={answer.answerTag}>{answer.answerLabel}</label>
            </div>
          ))}
          <button type="submit">Next</button>
        </form>
        {currentQuestion > 0 && (
          <button onClick={() => setCurrentQuestion((prevQuestion) => prevQuestion - 1)}>Prev</button>
        )}
        {currentQuestion === questions.length - 1 && (
          <button onClick={resetAnswers}>Reset Answers</button>
        )}
      </div>
    </div>
  );
}
