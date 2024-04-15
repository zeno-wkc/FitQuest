import styles from "./Quiz.module.css";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { inventory } from "@/data/inventory";

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(inventory.questions.length).fill({}));
  const [showPopup, setShowPopup] = useState(false);

  const { questions } = inventory;
  const { id, type, question, answers: questionAnswers } = questions[currentQuestion];
  console.log(questionAnswers);

  const handleSelectQuestion = (action) => {
    if (action === "next" && currentQuestion < questions.length - 1) {
      checkAllAnswersFilled() ? setCurrentQuestion((prevIndex) => prevIndex + 1) : setShowPopup(true);
    } else if (action === "prev" && currentQuestion > 0) {
      setCurrentQuestion((prevIndex) => prevIndex - 1);
    }
  };

  const handleAnswer = (key, value) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = { ...updatedAnswers[currentQuestion], [key]: value };
      return updatedAnswers;
    });
  };

  const getAnswer = (key) => {
    return answers[currentQuestion][key] || "";
  };

  const checkAllAnswersFilled = () => {
    const currentAnswers = answers[currentQuestion];
    switch (type) {
      case 'input': return Object.values(currentAnswers).every(value => value !== "");
      case 'radio': return Object.values(currentAnswers).some(value => value !== "");
      case 'checkbox': return Object.values(currentAnswers).some(value => value);
      default: return false;
    }
  };

  const input = () => {
    return (
      <>
      {(() => questionAnswers.map((k, i) => (
        <input type="number"
          className={styles.inputAnswer}
          key={k.answerId}
          id={k.answerTag}
          name={currentQuestion}
          placeholder={k.answerLabel}
          onChange={(e) => handleAnswer(k.answerTag, e.target.value)}
        />
      )))()}
      </>
    )
  };

  const radio = () => {
    return (
      <>
      {(() => questionAnswers.map((k, i) => (
      <div className={styles.answerContainer} key={k.answerId}>
        <input type="radio"
          className={styles.inputRadioIcon}
          id={k.answerTag}
          name={currentQuestion}
          value={k.answerTag}
          onChange={() => handleAnswer("Answer", k.answerTag)}
        />
        <label className={styles.inputRadioLabel} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
      </div>
      )))()}
      </>
    )
  };

  const checkbox = () => {
    return (
      <>
      {(() => questionAnswers.map((k, i) => (
      <div className={styles.answerContainer} key={k.answerId}>
        <input type="checkbox"
          className={styles.inputCheckboxIcon}
          key={k.answerId}
          id={k.answerTag}
          name={currentQuestion}
          value={k.answerTag}
          onChange={() => handleAnswer("Answer" + k.answerId, !getAnswer("Answer" + k.answerId))}
        />
        <label className={styles.inputCheckboxLabel} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
      </div>
      )))()}
      </>
    )
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    console.log('Current Question :', currentQuestion);
    console.log('Answers: ', answers);
  }, [answers, currentQuestion]);

  return (
    <>
      <div className={styles.quizSumOfQuestion} >Question {currentQuestion + 1}/{questions.length}</div>
      <div className={styles.quizContainer}>
        <form key={id} className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          <label>{question}</label>
            {(() => {
              switch (type) {
                case 'input': return input(); 
                case 'radio': return radio();
                case 'checkbox': return checkbox();
                default: return null;
              }
            })()}
        </form>
        <div>
          <button onClick={() => handleSelectQuestion('prev')}>Prev</button>
          <button onClick={() => handleSelectQuestion('next')}>Next</button>
        </div>
        {showPopup && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <p>Please fill in all answers before proceeding.</p>
              <button onClick={handleClosePopup}>OK</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}



// export default function Question() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [inputAnswer, setInputAnswer] = useState({});
//   const [radioAnswer, setRadioAnswer] = useState({});
//   const [checkboxAnswer, setCheckboxAnswer] = useState({});
//   const [finalAnswer, setFinalAnswer] = useState({});
//   const [activeSet, setActiveSet] = useState();

//   const { questions } = inventory;
//   const { id, type, question, answers } = questions[currentQuestion];

//   const handleSelectQuestion = (action) => {
//     if (currentQuestion <= 4) {
//       setCurrentQuestion((nextIndex) =>
//           action === "next" ? (nextIndex + 1) : (nextIndex - 1)
//       );
//     }
//   };

//   const resetData = () => {
//     setInputAnswer({});
//     setCheckboxAnswer({});
//     setCheckboxAnswer({});
//   }

//   const clearSelectRecord = () => {
//     var input = document.querySelector('input');
//     for (var i = input.length - 1; i >= 0; i--) {
//       if ('radio' === input[i].type || 'checkbox' === input[i].type) {
//         input[i].checked = false;
//       }
//     }
//   }

//   const deleteStateVariable = (functionName, result, param) => {
//     const { [param]: tmp, ...rest } = result;
//     functionName(rest);
//   }

//   const handleAnswer = (functionName, result, key, e, checkValue) => {
//     let { value, checked, input } = e.target;
//     if (functionName === setFinalAnswer) {
//       switch (checkValue) {
//         case 'inputAnswer': value = inputAnswer; break;
//         case 'radioAnswer': value = radioAnswer; break;
//         case 'checkboxAnswer': value = checkboxAnswer; break;
//         default: null; break;
//       }
//     }
    
//     checked || (functionName === setFinalAnswer) || (functionName === setInputAnswer)
//     ? (functionName((prevAnswers) => ({
//       ...prevAnswers, [key]: value,
//     })))
//     : (deleteStateVariable(functionName, result, key));
//   };
  
//   const input = () => {
//     return (
//       <>
//       {(() => answers.map((k, i) => (
//         <input type="number"
//           className={styles.inputAnswer}
//           key={k.answerId}
//           id={k.answerTag}
//           name={currentQuestion}
//           placeholder={k.answerLabel}
//           onChange={(e) => {handleAnswer(setInputAnswer, inputAnswer, k.answerTag, e);  setActiveSet('inputAnswer');}}
//         />
//       )))()}
//       </>
//     )
//   };

//   const radio = () => {
//     return (
//       <>
//       {(() => answers.map((k, i) => (
//       <div className={styles.answerContainer}>
//         <input type="radio"
//           className={styles.inputRadioIcon}
//           id={k.answerTag}
//           name={currentQuestion}
//           value={k.answerTag}
//           onChange={(e) => {setRadioAnswer(''); handleAnswer(setRadioAnswer, radioAnswer, 'Answer', e);  setActiveSet('radioAnswer');}}
//         />
//         <label className={styles.inputRadioLabel} key={i} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
//       </div>
//       )))()}
//       </>
//     )
//   };

//   const checkbox = () => {
//     return (
//       <>
//       {(() => answers.map((k, i) => (
//       <div className={styles.answerContainer}>
//         <input type="checkbox"
//           className={styles.inputCheckboxIcon}
//           key={k.answerId}
//           id={k.answerTag}
//           name={currentQuestion}
//           value={k.answerTag}
//           onChange={(e) => { handleAnswer(setCheckboxAnswer, checkboxAnswer, 'Answer' + k.answerId, e);  setActiveSet('checkboxAnswer');}}
//         />
//         <label className={styles.inputCheckboxLabel} key={i} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
//       </div>
//       )))()}
//       </>
//     )
//   };

//   useEffect(() => {
//     console.log('Current Question :', currentQuestion);
//     console.log('activeSet :', activeSet);
//     console.log('Input Answer: ', inputAnswer);
//     console.log('Radio Answer: ', radioAnswer);
//     console.log('Checkbox Answer: ', checkboxAnswer);
//     console.log('Final Answer: ', finalAnswer);
//   }, [finalAnswer, inputAnswer, radioAnswer, checkboxAnswer, currentQuestion, activeSet]);

//   return (
//     <>
//       <div className={styles.quizSumOfQuestion} >Question {currentQuestion + 1}/{questions.length}</div>
//       <div className={styles.quizContainer}>
//         <form key={id} className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
//           <label>{question}</label>
//           {(() => {
//             switch (type) {
//               case 'input': return input(); 
//               case 'radio': return radio();
//               case 'checkbox': return checkbox();
//               default: return null;
//             }
//           })()}
//         </form>
//         {
//           currentQuestion === 4 && (
//             <>
//               <button onClick={(e) => { handleSelectQuestion('prev'); clearSelectRecord(); resetData(); }}>Prev</button>
//               <button onClick={(e) => { handleAnswer(setFinalAnswer, finalAnswer, currentQuestion, e, activeSet);}}>Finish</button>
//             </>
//           )
//         }
//         {
//           currentQuestion === 0 && (
//               <button onClick={(e) => { handleAnswer(setFinalAnswer, finalAnswer, currentQuestion, e, activeSet); handleSelectQuestion('next'); }}>Next</button>
//           )
//         }
//         {
//           (currentQuestion !== 0 && currentQuestion < 4) && (
//             <>
//               <button onClick={(e) => { handleSelectQuestion('prev'); clearSelectRecord(); resetData(); }}>Prev</button>
//               <button onClick={(e) => { handleAnswer(setFinalAnswer, finalAnswer, currentQuestion, e, activeSet); handleSelectQuestion('next'); }}>Next</button>
//             </>
//           )
//         }
//       </div>
//     </>
//   )
// }