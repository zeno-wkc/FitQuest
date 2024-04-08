import React, { useState } from 'react';

const QuestionForm = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerChange = (e) => {
    const answer = e.target.value;
    if (selectedAnswers.includes(answer)) {
      setSelectedAnswers(selectedAnswers.filter(item => item !== answer));
    } else {
      setSelectedAnswers([...selectedAnswers, answer]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAnswerObject = {
      answers: selectedAnswers
    };
    console.log(userAnswerObject); // You can send this object to your backend or store it wherever you need.
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Question:</h2>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              value="Answer 1"
              checked={selectedAnswers.includes('Answer 1')}
              onChange={handleAnswerChange}
            />
            Answer 1
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="Answer 2"
              checked={selectedAnswers.includes('Answer 2')}
              onChange={handleAnswerChange}
            />
            Answer 2
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="Answer 3"
              checked={selectedAnswers.includes('Answer 3')}
              onChange={handleAnswerChange}
            />
            Answer 3
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="Answer 4"
              checked={selectedAnswers.includes('Answer 4')}
              onChange={handleAnswerChange}
            />
            Answer 4
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="Answer 5"
              checked={selectedAnswers.includes('Answer 5')}
              onChange={handleAnswerChange}
            />
            Answer 5
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="Answer 6"
              checked={selectedAnswers.includes('Answer 6')}
              onChange={handleAnswerChange}
            />
            Answer 6
          </label>
        </li>
      </ul>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionForm;