export const inventory = {
    questions: [{
        id: 1,
        type: 'input',
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
        }],
        answerObj:{
          age:'',
          weight_lb:'',
          height_cm:'',
        }
      },{
        id: 2,
        type: 'radio',
        question: "At which exercise level do you believe you are?",
        answers: [{
            answerId: 1,
            answerTag: "beginner",
            answerLabel: "Beginner"
          },{
            answerId: 2,
            answerTag: "intermediator",
            answerLabel: "Intermediate"
          },{
            answerId: 3,
            answerTag: "advance",
            answerLabel: "Advanced"
        }]
      },{
        id: 3,
        type: 'radio',
        question: "What are your exercise goals?",
        answers: [{
            answerId: 1,
            answerTag: "loseWeight",
            answerLabel: "Lose Weight"
          },{
            answerId: 2,
            answerTag: "gainMuscles",
            answerLabel: "Gain Muscles"
          },{
            answerId: 3,
            answerTag: "balance", 
            answerLabel: "Maintain well-being"
        }]
      },{
        id: 4,
        type: 'radio',
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
        type: 'checkbox',
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
            answerLabel: "None"
        }]
      }
    ]
  }

export const articles = [
    {
      title: "Are you drinking enough water?",
      link: "/water",
      image: "/water.png",
      alt: "Water",
    },
    {
      title: "Adding Protein to your Salads",
      link: "/salads",
      image: "/salad.png",
      alt: "Salad",
    },
    {
      title: "How To Properly Track Calories",
      link: "/calories",
      image: "/smartWatch.png",
      alt: "Smart Watch",
    },
    {
      title: "Best Fruits To Add To Your Shakes",
      link: "/shakes",
      image: "/smoothie.png",
      alt: "Smoothie",
    },
  ];