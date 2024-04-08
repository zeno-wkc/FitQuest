export const inventory = {
    questions: [{
        id: 1,
        question: "Personal Information",
        answers: [{
            answerId: 1,
            answerTag: "age",
            answerLabel: "Age"
          },{
            answerId: 2,
            answerTag: "weight_lb",
            answerLabel: "Weight (lb)"
          },{
            answerId: 3,
            answerTag: "height_cm", 
            answerLabel: "Height (cm)"
        }]
      },{
        id: 2,
        question: "At which exercise level do you believe you are?",
        answers: [{
            answerId: 1,
            answerTag: "beginner",
            answerLabel: "Beginner"
          },{
            answerId: 2,
            answerTag: "intermediator",
            answerLabel: "Intermediator"
          },{
            answerId: 3,
            answerTag: "advance",
            answerLabel: "Advance"
        }]
      },{
        id: 3,
        question: "What are your exercise goals?",
        answers: [{
            answerId: 1,
            answerTag: "loseWeight",
            answerLabel: "Lose Weight"
          },{
            answerId: 2,
            answerTag: "balance",
            answerLabel: "Balance"
          },{
            answerId: 3,
            answerTag: "gainMuscles", 
            answerLabel: "Gain Muscles"
        }]
      },{
        id: 4,
        question: "Choose one body part you want to improve?",
        answers: [{
            answerId: 1,
            answerTag: "upperBody",
            answerLabel: "Upper Body",
            answerDesc: "Improving strength in the arms, shoulders, chest, and upper back"
          },{
            answerId: 2,
            answerTag: "lowerBody",
            answerLabel: "Lower Body",
            answerDesc: "Developing strength and flexibility in the legs, hips, and lower back"
          },{
            answerId: 3,
            answerTag: "coreBody", 
            answerLabel: "Core Body",
            answerDesc: "Strengthening muscles of the abdomen, obliques, and lower back"
          },{
            answerId: 4,
            answerTag: "fullBody",
            answerLabel: "Full Body",
            answerDesc: "Enhancing overall fitness and physique through a balanced workout incorporating cardiovascular exercise"
        }]
      },{
        id: 5,
        question: "Do you have any physical limitations?",
        answers: [{
            answerId: 1,
            answerTag: "neckPain",
            answerLabel: "Neck Pain"
          }, {
            answerId: 2,
            answerTag: "backPain",
            answerLabel: "Back Pain"
          }, {
            answerId: 3,
            answerTag: "shoulderPain", 
            answerLabel: "Shoulder Pain"
          },{
            answerId: 4,
            answerTag: "kneePain",
            answerLabel: "Knee Pain"
          },{
            answerId: 5,
            answerTag: "all",
            answerLabel: "No, I am all good"
        }]
      }
    ],
    videos:{
  
    }
  }
   
  //  {
  //   video-01: { url: '', thumbnailLink: '', videoTime: '', tag: [beginner, loseWeight, upperBody, kneePain]},
  //   video-02: { url: '', thumbnailLink: '', videoTime: '', tag: [beginner, loseWeight, balance, lowBody, kneePain]},
  //   video-03: { url: '', thumbnailLink: '', videoTime: '', tag: [beginner, loseWeight, gainMuscles, fullBody, kneePain, neckPain]}
  //  }