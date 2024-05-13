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
    link: "/nutrition",
    image: "/smartWatch.png",
    alt: "Smart Watch",
  },
  {
    title: "Best Fruits To Add To Your Shakes",
    link: "/nutrition",
    image: "/smoothie.png",
    alt: "Smoothie",
  },
];

export const settingValues = [
  { 
    title: "Notifications", 
    settingItems: [{
      itemName: "Show Notifications",
      icon: "166",
      default: true
    }]
  },{
    title: "Appearance",
    settingItems: [{
      itemName: "Brightness",
      icon: "179",
      default: true
    },{
      itemName: "Text Size",
      icon: "180",
      default: true
    }]
  },{
    title: "Sound & Vibration",
    settingItems: [{
      itemName: "Sound On",
      icon: "178",
      default: true
    },{
      itemName: "Vibration On",
      icon: "184",
      default: false
    }]
  },{
    title: "Privacy Setting",
    settingItems: [{
      itemName: "Allow GPS",
      icon: "176",
      default: true
    },{
      itemName: "Sync to other health apps",
      icon: "181",
      default: false
    },{
      itemName: "Delete all progress & data",
      icon: "177",
      default: false
    }]
  },{
    title: "Language", 
    settingItems: [{
      itemName: "Language",
      icon: "183",
      default: true
    }]
  },{
    title: "FAQ", 
    settingItems: [{
      itemName: "FAQ",
      icon: "189",
      link: "faq",
      default: true
    }]
  }
];

export const history = [
  {
    icon: "185",
    title: "Outdoor Running",
    result: "3.80km",
    status: "Success",
    date: "2024.05.12"
  },{
    icon: "151",
    title: "Full Body Workout",
    result: "2hr",
    status: "Success",
    date: "2024.05.11"
  },{
    icon: "150",
    title: "Core Workout",
    result: "5min",
    status: "Failure",
    date: "2024.05.10"
  },{
    icon: "185",
    title: "Outdoor Running",
    result: "4.80km",
    status: "Success",
    date: "2024.05.09"
  },{
    icon: "185",
    title: "Outdoor Running",
    result: "5.80km",
    status: "Success",
    date: "2024.05.08"
  },{
    icon: "185",
    title: "Outdoor Running",
    result: "3.80km",
    status: "Success",
    date: "2024.05.07"
  },{
    icon: "149",
    title: "Upper Body Workout",
    result: "3hr",
    status: "Success",
    date: "2024.05.07"
  },{
    icon: "185",
    title: "Outdoor Running",
    result: "0.50km",
    status: "Failure",
    date: "2024.05.06"
  },
];

export const redeemItems = [
  {
    image: "sport-drink",
    title: "Get 1 Free Bottle of Good Sport Energy Drink",
    scores: "500",
    unlock: true
  },{
    image: "unnu",
    title: "Get 1 Free Bottle of Nuun Sport Drink",
    scores: "500",
    unlock: true
  },{
    image: "yoga-mat",
    title: "Get 1 Free Fitness Mat",
    scores: "1000",
    unlock: true
  },{
    image: "decathlon",
    title: "Get 20% off for Online Purchase",
    scores: "1000",
    unlock: true
  },{
    image: "nutrition",
    title: "Get 1 Free Nutrition Consultation",
    scores: "2000",
    unlock: false
  },{
    image: "nike",
    title: "$50 Gift card from Nike",
    scores: "5000",
    unlock: false
  },{
    image: "adidas",
    title: "$50 Gift card from Adidas",
    scores: "5000",
    unlock: false
  },{
    image: "under-armour",
    title: "$50 Gift card from Under Armour",
    scores: "5000",
    unlock: false
  },{
    image: "lululemon",
    title: "$50 Gift card from Lululemon",
    scores: "5000",
    unlock: false
  },{
    image: "doordash",
    title: "$100 Gift card from DoorDash",
    scores: "10000",
    unlock: false
  },{
    image: "dick-sporting",
    title: "$100 Gift card from DICK'S Sporting Goods",
    scores: "10000",
    unlock: false
  },{
    image: "decathloncard",
    title: "$100 Gift card from Decathlon",
    scores: "10000",
    unlock: false
  }
];


export const faqItems = [
  { 
    id: "1",
    question: "Does FitQuest store my personal information?",
    anwser: "FitQuest only collects essential personal information, such as your name and email address, for registration purposes. Rest assured that any data inputted during the quiz upon signup remains strictly confidential and inaccessible to FitQuest or any third parties."
  },{
    id: "2",
    question: "How do I change the language preferences?",
    anwser: "To change the language preferences go to Settings > Languages > Turn the Switch of your preferred language on (orange)."
  },{
    id: "3",
    question: "Can I download nutrition articles?",
    anwser: "While nutrition articles cannot be downloaded, users have the option to favourite them for future reference. By simply clicking the heart icon, articles can be added to your favorites. To access all your favorited articles conveniently, navigate to the main nutrition page and select 'View Favorites'."
  },{
    id: "4",
    question: "How are my recommended videos curated to me?",
    anwser: "Our recommended videos feature is designed to tailor content to your specific needs and preferences. By analyzing your quiz results, as well as considering your fitness goals and any limitations you may have, we curate a selection of videos aimed at optimizing your fitness journey. This personalized approach ensures that you receive the most relevant and beneficial content to support you in achieving your fitness objectives."
  },{
    id: "5",
    question: "If I close app will I lose my progress?",
    anwser: "You will need to sign in again if you close the app, but you will still be able to see your favourited articles. You will not be able to pick up from where you left off if you were in the middle of a video when you closed the app however."
  }
];