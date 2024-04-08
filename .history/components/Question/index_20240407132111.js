import { useState } from 'react';
import { inventory } from './inventory';

export default function Question() {
  const [answers, setAnswers] = useState({});

  const handleInputChange = (questionId, answerTag) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answerTag
    }));
  };

  const handleMultiSelectChange = (questionId, answerTag, checked) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: {
        ...(prevAnswers[questionId] || {}),
        [answerTag]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers);
    // You can perform further actions with the answers here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inventory.questions.map(question => (
          <div key={question.id}>
            <h3>{question.question}</h3>
            {question.answers.map(answer => (
              <div key={answer.answerId}>
                {question.id === 5 ? (
                  <label>
                    <input
                      type="checkbox"
                      checked={answers[question.id] && answers[question.id][answer.answerTag]}
                      onChange={(e) => handleMultiSelectChange(question.id, answer.answerTag, e.target.checked)}
                    />
                    {answer.answerLabel}
                  </label>
                ) : (
                  <input
                    type="text"
                    value={answers[question.id] || ''}
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    placeholder={answer.answerLabel}
                    name={answer.answerTag}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}