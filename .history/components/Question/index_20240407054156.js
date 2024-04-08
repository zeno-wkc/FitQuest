import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalAnswerObject, setFinalAnswerObject] = useState({});
  const [answers, setAnswers] = useState({}); // Store answers for each question

  const { questions } = inventory;
  const { question, answers: questionAnswers } = questions[currentQuestion];

  const handleAnswer = (answerTag, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [answerTag]: value
    }));
  };

  const handleNextQuestion = () => {
    // Store the answers for the current question
    setFinalAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: answers
    }));

    // Move to the next question
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setAnswers({}); // Reset answers for the next question
  };

  const handlePrevQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setFinalAnswerObject({});
  };

  return (
    <div className={styles.quizContainer}>
      <div>Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.questionContainer}>
        <form onSubmit={(e) => { e.preventDefault(); handleNextQuestion(); }}>
          <label>{question}</label><br />
          {questionAnswers.map((answer) => (
            <div key={answer.answerTag} className={styles.answerContainer}>
              <label className={styles.label} htmlFor={answer.answerTag}>{answer.answerLabel}</label>
              {currentQuestion === 0 ? (
                <input
                  type="number"
                  id={answer.answerTag}
                  name={answer.answerTag}
                  value={answers[answer.answerTag] || ''}
                  onChange={(e) => handleAnswer(answer.answerTag, e.target.value)}
                />
              ) : (
                <input
                  type="radio"
                  id={answer.answerTag}
                  name={answer.answerTag}
                  value={answer.answerTag}
                  checked={answers[answer.answerTag] === answer.answerTag}
                  onChange={() => handleAnswer(answer.answerTag, answer.answerTag)}
                />
              )}
            </div>
          ))}
          <button type="submit">Next</button>
        </form>
        {currentQuestion > 0 && (
          <button onClick={handlePrevQuestion}>Prev</button>
        )}
        {currentQuestion === questions.length - 1 && (
          <button onClick={handleRestart}>Restart</button>
        )}
      </div>
      {currentQuestion === questions.length && (
        <div>
          <h2>All questions answered!</h2>
          <pre>{JSON.stringify(finalAnswerObject, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
