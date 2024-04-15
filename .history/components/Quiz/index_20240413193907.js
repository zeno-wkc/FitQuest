import styles from "./Quiz.module.css";
import { useState, useEffect } from "react";
import { inventory } from "@/data/inventory";

// export default function Question() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState(Array(inventory.questions.length).fill({}));
//   const [showPopup, setShowPopup] = useState(false);

//   const { questions } = inventory;
//   const { id, type, question, answers: questionAnswers } = questions[currentQuestion];

//   const handleSelectQuestion = (action) => {
//     if (action === "next" && currentQuestion < questions.length - 1) {
//       if (checkAllAnswersFilled()) {
//         setCurrentQuestion((prevIndex) => prevIndex + 1);
//       } else {
//         setShowPopup(true);
//       }
//     } else if (action === "prev" && currentQuestion > 0) {
//       setCurrentQuestion((prevIndex) => prevIndex - 1);
//     }
//   };

//   const handleAnswer = (key, value) => {
//     setAnswers((prevAnswers) => {
//       const updatedAnswers = [...prevAnswers];
//       updatedAnswers[currentQuestion] = { ...updatedAnswers[currentQuestion], [key]: value };
//       return updatedAnswers;
//     });
//   };

//   const getAnswer = (key) => {
//     return answers[currentQuestion][key] || "";
//   };

//   const checkAllAnswersFilled = () => {
//     const currentAnswers = answers[currentQuestion];

//     switch (type) {
//       case 'input':
//         return Object.values(currentAnswers).every(value => value !== "");
//       case 'radio':
//         return Object.values(currentAnswers).some(value => value !== "");
//       case 'checkbox':
//         return Object.values(currentAnswers).some(value => value);
//       default:
//         return false;
//     }
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   useEffect(() => {
//     console.log('Current Question :', currentQuestion);
//     console.log('Answers: ', answers);
//   }, [answers, currentQuestion]);

//   return (
//     <>
//       <div className={styles.quizSumOfQuestion}>Question {currentQuestion + 1}/{questions.length}</div>
//       <div className={styles.quizContainer}>
//         <form key={id} className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
//           <label>{question}</label>
//           {(() => {
//             switch (type) {
//               case 'input':
//                 return (
//                   <>
//                     {questionAnswers.map((k) => (
//                       <input
//                         type="number"
//                         className={styles.inputAnswer}
//                         key={k.answerId}
//                         id={k.answerTag}
//                         name={currentQuestion}
//                         placeholder={k.answerLabel}
//                         value={getAnswer(k.answerTag)}
//                         onChange={(e) => handleAnswer(k.answerTag, e.target.value)}
//                       />
//                     ))}
//                   </>
//                 );
//               case 'radio':
//                 return (
//                   <>
//                     {questionAnswers.map((k) => (
//                       <div className={styles.answerContainer} key={k.answerId}>
//                         <input
//                           type="radio"
//                           className={styles.inputRadioIcon}
//                           id={k.answerTag}
//                           name={currentQuestion}
//                           value={k.answerTag}
//                           checked={getAnswer("Answer") === k.answerTag}
//                           onChange={() => handleAnswer("Answer", k.answerTag)}
//                         />
//                         <label className={styles.inputRadioLabel} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
//                       </div>
//                     ))}
//                   </>
//                 );
//               case 'checkbox':
//                 return (
//                   <>
//                     {questionAnswers.map((k) => (
//                       <div className={styles.answerContainer} key={k.answerId}>
//                         <input
//                           type="checkbox"
//                           className={styles.inputCheckboxIcon}
//                           id={k.answerTag}
//                           name={currentQuestion}
//                           value={k.answerTag}
//                           checked={getAnswer("Answer" + k.answerId)}
//                           onChange={() => handleAnswer("Answer" + k.answerId, !getAnswer("Answer" + k.answerId))}
//                         />
//                         <label className={styles.inputCheckboxLabel} htmlFor={k.answerTag}>{k.answerId}. {k.answerLabel}</label>
//                       </div>
//                     ))}
//                   </>
//                 );
//               default:
//                 return null;
//             }
//           })()}
//         </form>
//         <div>
//           <button onClick={() => handleSelectQuestion('prev')}>Prev</button>
//           <button onClick={() => handleSelectQuestion('next')}>Next</button>
//         </div>
//       </div>
//       {showPopup && (
//         <div className={styles.popup}>
//           <div className={styles.popupContent}>
//             <p>Please fill in all answers before proceeding.</p>
//             <button onClick={handleClosePopup}>OK</button>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(inventory.questions.length).fill({}));
  const [showPopup, setShowPopup] = useState(false);

  const { questions } = inventory;
  const { id, type, question, answers: questionAnswers } = questions[currentQuestion];

  const handleSelectQuestion = (action) => {
    if (action === "next" && currentQuestion < questions.length - 1) {
      console.log('testing');
      (checkAllAnswersFilled()) ? setCurrentQuestion((prevIndex) => prevIndex + 1) : setShowPopup(true);
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
    console.log('current:', currentAnswers);
    console.log('Type:', Object.values(currentAnswers).every());
    console.log('Type:', type);
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
          { currentQuestion != 0 && (<button onClick={() => handleSelectQuestion('prev')}>Prev</button>) }
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