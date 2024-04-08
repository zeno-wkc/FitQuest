import { useState } from 'react';
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const { questions } = inventory;

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex - 1);
  };

  const handleAnswer = (answerTag) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [currentQuestionIndex + 1]: answerTag
    }));
  };

  const renderQuestion = (question) => (
    <div key={question.id}>
      <h3>{question.question}</h3>
      {question.answers.map(answer => (
        <div key={answer.answerId}>
          <input
            type={question.id === 5 ? 'checkbox' : 'text'}
            onChange={() => handleAnswer(answer.answerTag)}
            checked={answers[currentQuestionIndex + 1] === answer.answerTag}
          />
          <label>{answer.answerLabel}</label>
          {answer.answerDesc && <p>{answer.answerDesc}</p>}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {renderQuestion(questions[currentQuestionIndex])}
      <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>Prev</button>
      <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={() => console.log('Answers:', answers)}>Submit</button>
      )}
    </div>
  );
};
