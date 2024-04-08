import styles from "./Question.module.css";
import { useState } from "react";
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAns, setShowAns] = useState(false);
  const [answerObject, setAnswerObject] = useState({});

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  const updateAnswer = (key, answerTag) => {
    setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [key] : answerTag
    }))
  }

  const handleQuestion = (action) => {
    action === 'next' ? setCurrentQuestion(prevIndex => prevIndex + 1) : setCurrentQuestion(nextIndex => nextIndex - 1);
  };

  const formSubmit = e => {
    e.preventDefault();
    return console.log(showAns);
  }
  
  console.log(answerObject);

  return (
    <>
    <div className={styles.quizContainer}>
      <div>Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.questionContainer}>
        <div className={styles.question}>{question}</div> 
          { 
            !showAns && currentQuestion == 0 ? 
              (<form> {answers.map((k, i) => (<><input type="text" placeholder={answers[i].answerLabel} /></>))} </form>) : 
              (<ul>{answers.map((k, i) => (<><li key={answers[i].answerId} id={answers[i].answerTag} onClick={() => {updateAnswer(currentQuestion + 1, answers[i].answerTag)}} select="true">{answers[i].answerLabel}</li></>))}</ul>)
          }
          { currentQuestion < questions.length - 1 && currentQuestion !== questions.length - 1 ? currentQuestion == 0 ? (<button onClick={() => handleQuestion('next') }>Next</button>) : (<><button onClick={() => handleQuestion('prev') }>Prev</button><button onClick={() => handleQuestion('next') }>Next</button></>) : (<><button onClick={() => handleQuestion('prev') }>Prev</button><div><h2>All questions answered!</h2><pre>{JSON.stringify(answerObject, null, 2)}</pre></div></>) }
        </div>
        <div>
          <form onSubmit={formSubmit}>
            <label>{question}</label>
            { !showAns && currentQuestion == 0 ? 
              (<>{answers.map((k, i) => (<><input type="text" placeholder={answers[i].answerLabel} /></>))}</>) : 
              (<>{answers.map((k, i) => (<><input type="checkbox" key={answers[i].answerId} id={answers[i].answerTag} name={answers[i].answerLabel} value={answers[i].answerTag} /></>))}</>)
            }
            <input type="submit" value ="submit" onClick={() => handleQuestion('next'))} />
          </form>
        </div>
    </div>
    </>
  );
}