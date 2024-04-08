import { useState } from 'react';
import { inventory } from '@/data/inventory';

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestion = inventory.questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleAnswerSelection = (answerTag) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: answerTag,
    });
  };

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <form>
        {currentQuestion.answers.map((answer) => (
          <div key={answer.answerId}>
            <input
              type={currentQuestion.id === 5 ? 'checkbox' : 'text'}
              id={answer.answerTag}
              name={answer.answerTag}
              onChange={() => handleAnswerSelection(answer.answerTag)}
              checked={answers[currentQuestion.id] === answer.answerTag}
            />
            <label htmlFor={answer.answerTag}>{answer.answerLabel}</label>
          </div>
        ))}
      </form>
      <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
        Prev
      </button>
      <button onClick={handleNextQuestion} disabled={currentQuestionIndex === inventory.questions.length - 1}>
        Next
      </button>
      <div>
        <h3>Current Answers:</h3>
        <pre>{JSON.stringify(answers, null, 2)}</pre>
      </div>
    </div>
  );
}
