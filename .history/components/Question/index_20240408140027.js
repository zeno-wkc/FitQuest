import styles from "./Question.module.css";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { inventory } from "@/data/inventory";
import Result from "@/components/Results";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerObject, setAnswerObject] = useState({});
  const [finalAnswerObject, setFinalAnswerObject] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const { questions } = inventory;
  const { question, answers } = questions[currentQuestion];

  const handleFinalAnswer = (currentQuestion, value) => {
    setFinalAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: value,
    }));
    setAnswerObject({});
    clearSelectRecord();
  };

  const handleAnswerInput = (answersTag, value) => {
    setAnswerObject((prevAnswers) => ({
      ...prevAnswers,
      [answersTag]: value,
    }))
  };

  const handleAnswerCheckbox = (answersTag, e) => {
    const { value, checked } = e.target;
    const tempAns = answerObject;
    !checked ? delete answerObject[answersTag] : "";

    checked
      ? (setAnswerObject((prevAnswers) => ({
        ...prevAnswers,
        [answersTag]: value,
      })))
      : (setAnswerObject(tempAns));
  };

  const clearSelectRecord = () => {
    var input = document.getElementsByTagName('input');
    for (var i = input.length - 1; i >= 0; i--) {
      if ('radio' === input[i].type) input[i].checked = false;
      if ('checkbox' === input[i].type) input[i].checked = false;
    }
  }

  const handleQuestion = (action) => {
    console.log(currentQuestion);
    if(currentQuestion <4){
    setCurrentQuestion((prevIndex) =>
      action === "next" ? (prevIndex + 1) : (prevIndex - 1)
    );
    }
    clearSelectRecord();
  };

  useEffect(() => {
    console.log('answerObject', answerObject);
    console.log('finalAnswerObject', finalAnswerObject);
  }, [answerObject, finalAnswerObject]);

  return (
    <>
    {!isFinished && (
      <> 
      <div className={styles.quizContainer}>
        <div><Image
          src="/background-img.jpg"
          width={1295}
          height={648}
          alt="banner background image"
        /></div>
        <div className={styles.quizSumOfQuestion} >Question {currentQuestion + 1}/{questions.length}</div>
        <div className={styles.questionContainer}>
          <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
            <label className={styles.questionlabel}>{question}{currentQuestion === 4 && (<p className={styles.tips}>(multiple choice)</p>)}</label>
            {
              currentQuestion === 0 ? (
                answers.map((k, i) => (
                  <input
                    className={styles.inputAnswer}
                    key={k.answerId}
                    type="number"
                    id={k.answerTag}
                    name={currentQuestion}
                    placeholder={k.answerLabel}

                    onChange={(e) => handleAnswerInput(k.answerTag, e.target.value)}
                  />))
              ) : (
                currentQuestion === 4 ? (
                  answers.map((k, i) => (
                    <div className={styles.answerContainer}>
                      <input
                        type="checkbox"
                        className={styles.inputCheckboxIcon}
                        id={k.answerTag}
                        name={currentQuestion}
                        value={k.answerTag}
                        onChange={(e) => {
                          handleAnswerCheckbox('Answer'+k.answerId, e)
                        }}
                      />
                      <label className={styles.inputCheckboxLabel} key={i} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
                    </div>
                  ))
                ) : ( [1,2,3].includes(currentQuestion) &&
                  answers.map((k, i) => (
                    <div className={styles.answerContainer}>
                      {/* <label className={styles.inputRadioLabel} key={i} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel} {currentQuestion === 3 ? (<p className={styles.answerDesc}>{k.answerDesc}</p>) : ''}</label> */}
                      <input
                        type="radio"
                        className={styles.inputRadioIcon}
                        id={k.answerTag}
                        name={currentQuestion}
                        value={k.answerTag}
                        onChange={(e) => handleAnswerInput('Answer', e.target.value)}
                      />
                      <label className={styles.inputRadioLabel} key={i} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
                    </div>
                  ))
                )

              )
            }

            {
              currentQuestion === questions.length - 1
                ? (<>
                  {/* <button name="prev" type="submit" onClick={(e) => {
                    handleQuestion('prev'); 
                  }}>Prev</button> */}
                  <button className={styles.submitButton} name="finish" type="submit" onClick={(e) => {
                    handleFinalAnswer(currentQuestion, answerObject);
                    handleQuestion('next'); setIsFinished(true);
                  }}>Finish</button>
                  </>)
                : (<>
                  {/* <button name="prev" type="submit" onClick={(e) => {
                    currentQuestion !== 4 ? handleQuestion('prev') : ''; 
                  }}>Prev</button> */}
                  <button className={styles.submitButton} name="next" type="submit" onClick={(e) => {
                    handleFinalAnswer(currentQuestion, answerObject);
                    currentQuestion !== 4 ? handleQuestion('next') : ''; 
                  }}>Next</button>
                  </>)
            }
            {/* <pre>{JSON.stringify(finalAnswerObject, null, 2)}</pre> */}
          </form>
        
        </div>
      </div>
      </>
    )}
   
   {isFinished && (<><Result answers={finalAnswerObject} /></>)}
        
    </>
  )
}