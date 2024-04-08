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
        }],
        answerObj:{
          age:'',
          weight_lb:'',
          height_cm:'',
        }
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
      },
      {
        id: 6,
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
        }]}
    ],
    videos: [
      {
        "id": 1,
        "videoName": "10 Minute Full Body Stretch & Mobility",
        "videoURL": "https://www.youtube.com/watch?v=KOvE5oAubpA&t=1s&ab_channel=Juice%26Toya",
        "thumbnailLink": "10 Minute Full Body Stretch & Mobility",
        "videoTime": "12:05",
        "tag": [
          "beginner",
          "balance",
          "yoga",
          "shoulder-pain",
          "all"
        ]
      },
      {
        "id": 2,
        "videoName": "Back Pain Relief Stretches | 10 min. Yoga for Relaxation & Recovery",
        "videoURL": "https://www.youtube.com/watch?v=2eA2Koq6pTI&ab_channel=MadyMorrison",
        "thumbnailLink": "Back Pain Relief Stretches-10 min",
        "videoTime": "11:48",
        "tag": [
          "beginner",
          "balance",
          "yoga",
          "neckPain",
          "backPain",
          "shoulderPain",
          "kneePain",
          "all",
          ""
        ]
      },
      {
        "id": 3,
        "videoName": "10 Min Upper Body & Arms Workout | Beginner Friendly No Equipment",
        "videoURL": "https://www.youtube.com/watch?v=7L-Td_p0bXE&ab_channel=ChloeTing",
        "thumbnailLink": "10 Min Upper Body & Arms Workout",
        "videoTime": "10:49",
        "tag": [
          "beginner",
          "loseWeight",
          "gainMuscles",
          "balance",
          "upperBody",
          "neckPain",
          "shoulderPain",
          "kneePain",
          "all",
          ""
        ]
      },
      {
        "id": 4,
        "videoName": "10 MIN UPPER BODY WORKOUT - for toned arms, chest & back muscles",
        "videoURL": "https://www.youtube.com/watch?v=eBnSe3CIPn4&ab_channel=PamelaReif",
        "thumbnailLink": "10 Min Upperbody Workout Pamela Reif",
        "videoTime": "10:27",
        "tag": [
          "beginner",
          "loseWeight",
          "gainMuscles",
          "balance",
          "upperBody",
          "neckPain",
          "backPain",
          "shoulderPain",
          "kneePain",
          "all",
          ""
        ]
      },
      {
        "id": 5,
        "videoName": "10 MIN LOWER AB WORKOUT - Beginner, with Medium Options",
        "videoURL": "https://www.youtube.com/watch?v=WJcA-yAvgP8&ab_channel=PamelaReif",
        "thumbnailLink": "10 Min Lower Ab Workout",
        "videoTime": "10:36",
        "tag": [
          "beginner",
          "loseWeight",
          "gainMuscles",
          "balance",
          "coreBody",
          "shoulderPain",
          "kneePain",
          "all",
          ""
        ]
      },
      {
        "id": 6,
        "videoName": "10 Minute Abs For Beginners [Daily Core Strength Workout]",
        "videoURL": "https://www.youtube.com/watch?v=BLKZwvObX_U&ab_channel=Juice%26Toya",
        "thumbnailLink": "10 Minute Abs For Beginners",
        "videoTime": "12:21",
        "tag": [
          "beginner",
          "loseWeight",
          "gainMuscles",
          "balance",
          "coreBody",
          "neckPain",
          "shoulderPain",
          "kneePain",
          "all",
          ""
        ]
      },
      {
        "id": 7,
        "videoName": "12 Min STANDING FAT BURN | No Jumping",
        "videoURL": "https://www.youtube.com/watch?v=ycjI5Zt5J9Y&ab_channel=EleniFit",
        "thumbnailLink": "12 Min Standing Fat Burn",
        "videoTime": "12:22",
        "tag": [
          "beginner",
          "loseWeight",
          "gainMuscles",
          "balance",
          "fullBody",
          "neckPain",
          "backPain",
          "shoulderPain",
          "kneePain",
          "all",
          ""
        ]
      },
      {
        "id": 8,
        "videoName": "15 Min All Standing HIIT Workout for Fat Burn",
        "videoURL": "https://www.youtube.com/watch?v=4__mb_-VLN4&ab_channel=OliverSjostrom",
        "thumbnailLink": "15 Min HIIT Workout for Fat Burn",
        "videoTime": "15:14",
        "tag": [
          "beginner",
          "loseWeight",
          "gainMuscles",
          "balance",
          "fullBody",
          "neckPain",
          "backPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 9,
        "videoName": "10 MIN BEGINNER LEG WORKOUT—Booty, Thighs & Hamstrings",
        "videoURL": "https://www.youtube.com/watch?v=nG69wuXHwxg&ab_channel=PamelaReif",
        "thumbnailLink": "10 Min Beginner Leg Workout",
        "videoTime": "10:30",
        "tag": [
          "beginner",
          "loseWeight",
          "gainMuscles",
          "balance",
          "lowerBody",
          "fullBody",
          "neckPain",
          "backPain",
          "shoulderPain",
          "kneePain",
          "all"
        ]
      },
      {
        "id": 10,
        "videoName": "10 MIN BOOTY PUMP WORKOUT AT HOME",
        "videoURL": "https://www.youtube.com/watch?v=hBGfmC4SR4I&ab_channel=AllblancTV",
        "thumbnailLink": "10 Min Booty Pump",
        "videoTime": "10:23",
        "tag": [
          "beginner",
          "loseWeight",
          "gainMuscles",
          "balance",
          "lowerBody",
          "fullBody",
          "neckPain",
          "backPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 11,
        "videoName": "15 min Abs and Hip Workout | Pilates for Beginners",
        "videoURL": "https://www.youtube.com/watch?v=K3GLIs6yNp4&ab_channel=FlowwithMira",
        "thumbnailLink": "15 Min Abs Hip Workout",
        "videoTime": "15:40",
        "tag": [
          "beginner",
          "loseWeight",
          "gainMuscles",
          "balance",
          "lowerBody",
          "fullBody",
          "yoga",
          "kneePain",
          "neckPain",
          "backPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 12,
        "videoName": "20 Minute Upper Body Strength Workout",
        "videoURL": "https://www.youtube.com/watch?v=0Yx_qbbzM0c&t=215s&ab_channel=Juice%26Toya",
        "thumbnailLink": "20 Minute Upper Body Strength Workout",
        "videoTime": "21:08",
        "tag": [
          "intermediator",
          "loseWeight",
          "gainMuscles",
          "upperBody",
          "fullBody",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 13,
        "videoName": "10 MIN SIXPACK WORKOUT- BEGINNER TO MEDIUM LEVEL",
        "videoURL": "https://www.youtube.com/watch?v=MmNbGJS57U8&ab_channel=PamelaReif",
        "thumbnailLink": "10 Min Sixpack",
        "videoTime": "10:33",
        "tag": [
          "beginner",
          "intermediator",
          "loseWeight",
          "gainMuscles",
          "upperBody",
          "fullBody",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 14,
        "videoName": "BURN 500 CALORIES with this 20 Minute Cardio HIIT Workout",
        "videoURL": "https://www.youtube.com/watch?v=RcLz_atcq8w&ab_channel=Nobadaddiction",
        "thumbnailLink": "20 Min HIIT",
        "videoTime": "22:22",
        "tag": [
          "intermediator",
          "loseWeight",
          "gainMuscles",
          "balance",
          "fullBody",
          "backPain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 15,
        "videoName": "10min Abs Tabata l Belly Fat Burn",
        "videoURL": "https://www.youtube.com/watch?v=CPl2DiKtvLg&ab_channel=AllblancTV",
        "thumbnailLink": "10min Abs Tabata",
        "videoTime": "10:16",
        "tag": [
          "intermediator",
          "loseWeight",
          "gainMuscles",
          "balance",
          "coreBody",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 16,
        "videoName": "20 Minute Pilates Workout for Lower Back Pain",
        "videoURL": "https://www.youtube.com/watch?v=I7j4K6V8stU&ab_channel=Well%2BGood",
        "thumbnailLink": "20 Minute Pilates Workout for Lower Back Pain",
        "videoTime": "20:04",
        "tag": [
          "intermediator",
          "balance",
          "lowerBody",
          "yoga",
          "backPain",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 17,
        "videoName": "Pilates Lower Back Pain Exercises - Back Pain Relief Workout",
        "videoURL": "https://www.youtube.com/watch?v=dHaP4JC9ulM&ab_channel=FlowwithMira",
        "thumbnailLink": "Pilates for Lower Back Pain",
        "videoTime": "29:36",
        "tag": [
          "intermediator",
          "balance",
          "lowerBody",
          "yoga",
          "backPain",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 18,
        "videoName": "10 Min Cardio Workout At Home",
        "videoURL": "https://www.youtube.com/watch?v=pxegq_K6jqI&ab_channel=OliverSjostrom",
        "thumbnailLink": "10 Min Cardio Workout At Home",
        "videoTime": "10:39",
        "tag": [
          "beginner",
          "loseWeight",
          "gainMuscles",
          "balance",
          "fullBody",
          "neckPain",
          "shoulderPain",
          "backPain",
          "all",
          ""
        ]
      },
      {
        "id": 19,
        "videoName": "30 MIN FULL BODY STANDING PILATES WORKOUT",
        "videoURL": "https://www.youtube.com/watch?v=enW_6s3jOV0&ab_channel=growwithjo",
        "thumbnailLink": "30 Min Full Body Pilates",
        "videoTime": "30:34",
        "tag": [
          "intermediator",
          "balance",
          "fullBody",
          "yoga",
          "backPain",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 20,
        "videoName": "10 MIN FULLBODY WORKOUT AT HOME - INTERMEDIATE",
        "videoURL": "https://www.youtube.com/watch?v=N-15wUPnqpc&ab_channel=AllblancTV",
        "thumbnailLink": "10 Min Full Body Intermediate",
        "videoTime": "10:17",
        "tag": [
          "intermediator",
          "loseWeight",
          "gainMuscles",
          "fullBody",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 21,
        "videoName": "30-Minute BACK-FRIENDLY STANDING WORKOUT",
        "videoURL": "https://www.youtube.com/watch?v=582hyw9IP2o&ab_channel=BrianSyuki-FocusFitness",
        "thumbnailLink": "Back-friendly Standing Workout",
        "videoTime": "29:28",
        "tag": [
          "intermediator",
          "loseWeight",
          "gainMuscles",
          "balance",
          "fullBody",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "backPain",
          "all"
        ]
      },
      {
        "id": 22,
        "videoName": "20 MIN Low Impact + All Standing KNEE FRIENDLY HIIT",
        "videoURL": "https://www.youtube.com/watch?v=OpQyhIXcpuk&ab_channel=AudreyKoomar-HomeWorkouts",
        "thumbnailLink": "20 Min All Standing HIIT",
        "videoTime": "20:14",
        "tag": [
          "beginner",
          "intermediator",
          "loseWeight",
          "gainMuscles",
          "balance",
          "fullBody",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "backPain",
          "all"
        ]
      },
      {
        "id": 23,
        "videoName": "DEEP FULL BODY STRETCH | Intermediate/Advance 30-Minutes",
        "videoURL": "https://www.youtube.com/watch?v=Q1G2U4XfX28&ab_channel=CatMeffan",
        "thumbnailLink": "Full Body Deep Stretch 30 Mins",
        "videoTime": "32:58",
        "tag": [
          "intermediator",
          "balance",
          "fullBody",
          "yoga",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "backPain",
          "all"
        ]
      },
      {
        "id": 24,
        "videoName": "Total Body Deep Stretches Yoga for Good Health",
        "videoURL": "https://www.youtube.com/watch?v=NQXSJzyNfH8&ab_channel=BreatheandFlow",
        "thumbnailLink": "Total Body Stretches",
        "videoTime": "26:30",
        "tag": [
          "intermediator",
          "balance",
          "fullBody",
          "yoga",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "backPain",
          "all"
        ]
      },
      {
        "id": 25,
        "videoName": "30 Minute Full Body Cardio-HIIT Workout",
        "videoURL": "https://www.youtube.com/watch?v=K44TJK9iNf8&ab_channel=Juice%26Toya",
        "thumbnailLink": "30 Mins Cardio x HIIT",
        "videoTime": "34:06",
        "tag": [
          "intermediator",
          "advance",
          "loseWeight",
          "gainMuscles",
          "balance",
          "fullBody",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 26,
        "videoName": "25 Minute Lower Body Dumbbel Workout",
        "videoURL": "https://www.youtube.com/watch?v=HWSlRhGzdXU&ab_channel=Juice%26Toya",
        "thumbnailLink": "25 Mins Dumbbell x Legs",
        "videoTime": "34'19",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "lowerBody",
          "backPain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 27,
        "videoName": "20 Mins Standing Dumbbell Fat Burn",
        "videoURL": "https://www.youtube.com/watch?v=YMaTxFo0Q7Q&ab_channel=MrandMrsMuscle",
        "thumbnailLink": "20 Mins Standing Dumbbell Fat Burn",
        "videoTime": "21:58",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "balance",
          "upperBody",
          "lowerBody",
          "coreBody",
          "fullBody",
          "backPain",
          "neckPain",
          "shoulderPain",
          "kneePain",
          "all"
        ]
      },
      {
        "id": 28,
        "videoName": "FAT BURNING 50MIN FULLBODY WORKOUT",
        "videoURL": "https://www.youtube.com/watch?v=qS00Q5Mgkec&ab_channel=AllblancTV",
        "thumbnailLink": "50 Mins HITT FullBody",
        "videoTime": "49:21",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "fullBody",
          "backPain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 29,
        "videoName": "8 MIN INTENSE ABS (No Equipment) - Total Killer Core",
        "videoURL": "https://www.youtube.com/watch?v=HM3rDUAraV4&ab_channel=TIFFxDAN",
        "thumbnailLink": "8 MIN INTENSE ABS",
        "videoTime": "8:35",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "coreBody",
          "kneePain",
          "neckPain",
          "all"
        ]
      },
      {
        "id": 30,
        "videoName": "30 MIN UPPER BODY & CARDIO (Advanced) HIIT Workout",
        "videoURL": "https://www.youtube.com/watch?v=8Xlv99EGEEQ&ab_channel=growingannanas",
        "thumbnailLink": "30 Mins UpperBody Cardio",
        "videoTime": "33:23",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "upperBody",
          "fullBody",
          "neckPain",
          "kneePain",
          "all"
        ]
      },
      {
        "id": 31,
        "videoName": "Advanced Vinyasa Yoga Flow",
        "videoURL": "https://www.youtube.com/watch?v=6LeKFE_aB4I&ab_channel=YouAligned",
        "thumbnailLink": "Advanced Yoga",
        "videoTime": "35:43",
        "tag": [
          "advance",
          "balance",
          "yoga",
          "fullBody",
          "neckPain",
          "backPain",
          "shoulderPain",
          "kneePain",
          "all"
        ]
      },
      {
        "id": 32,
        "videoName": "INTENSE FULL BODY CRUSHER - HIIT WORKOUT",
        "videoURL": "https://www.youtube.com/watch?v=-YpRYNREDV8&ab_channel=growingannanas",
        "thumbnailLink": "30 Mins Full Body HIIT",
        "videoTime": "30:38",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "fullBody",
          "all"
        ]
      },
      {
        "id": 33,
        "videoName": "30 MIN KILLER Lower Body HIIT Workout",
        "videoURL": "https://www.youtube.com/watch?v=m2L5SMWDRV8&ab_channel=growingannanas",
        "thumbnailLink": "30 Mins Killer Leg Day",
        "videoTime": "34:43",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "lowerBody",
          "neckPain",
          "backPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 34,
        "videoName": "UPPER BODY BURNER | Build Muscle & Strength",
        "videoURL": "https://www.youtube.com/watch?v=9V5TmtWWyyg&ab_channel=AlexCrockford",
        "thumbnailLink": "40 Mins UpperBody Burn",
        "videoTime": "42:12",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "upperBody",
          "fullBody",
          "neckPain",
          "backPain",
          "all"
        ]
      },
      {
        "id": 35,
        "videoName": "20 MIN LOWER BODY WORKOUT",
        "videoURL": "https://www.youtube.com/watch?v=X0xt0fYTZv8&ab_channel=TIFFxDAN",
        "thumbnailLink": "20 Mins Lower Body",
        "videoTime": "20:35",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "lowerBody",
          "neckPain",
          "backPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 36,
        "videoName": "30 Minute Full Body Strength Workout",
        "videoURL": "https://www.youtube.com/watch?v=9FBIaqr7TjQ&ab_channel=Juice%26Toya",
        "thumbnailLink": "30 Mins FullBody Strength",
        "videoTime": "34:56",
        "tag": [
          "intermediator",
          "advance",
          "loseWeight",
          "gainMuscles",
          "fullBody",
          "backPain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 37,
        "videoName": "High Intensity Full body TABATA",
        "videoURL": "https://www.youtube.com/watch?v=PFK9eQqdmuU&ab_channel=AllblancTV",
        "thumbnailLink": "20 Mins High Intensity Full Body",
        "videoTime": "19:29",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "fullBody",
          "kneePain",
          "backPain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 38,
        "videoName": "UPPER BODY (PUSH & PULL) to BUILD MUSCLE",
        "videoURL": "https://www.youtube.com/watch?v=aq6uN_bMEEE&ab_channel=AlexCrockford",
        "thumbnailLink": "30 Mins Upper Boday Muscle",
        "videoTime": "31:06",
        "tag": [
          "intermediator",
          "advance",
          "loseWeight",
          "gainMuscles",
          "upperBody",
          "neckPain",
          "kneePain",
          "all"
        ]
      },
      {
        "id": 39,
        "videoName": "10 Minute High Intensity Abs/Core Workout",
        "videoURL": "https://www.youtube.com/watch?v=g2jocInockU&ab_channel=Juice%26Toya",
        "thumbnailLink": "10 Mins High Intensity Abs Workout",
        "videoTime": "10:41",
        "tag": [
          "intermediator",
          "advance",
          "loseWeight",
          "gainMuscles",
          "coreBody",
          "shoulderPain",
          "neckPain",
          "kneePain",
          "all"
        ]
      },
      {
        "id": 40,
        "videoName": "Boost Recovery with Full Body Stretch Yoga for Athletes",
        "videoURL": "https://www.youtube.com/watch?v=wCUI1bwlJqA&ab_channel=BreatheandFlow",
        "thumbnailLink": "Boost Recovery Full Body",
        "videoTime": "33:24",
        "tag": [
          "advance",
          "balance",
          "fullBody",
          "backPain",
          "shoulderPain",
          "neckPain",
          "kneePain",
          "all"
        ]
      },
      {
        "id": 41,
        "videoName": "30 minute fat burning home workout for beginners",
        "videoURL": "https://www.youtube.com/watch?v=gC_L9qAHVJ8&ab_channel=BodyProject",
        "thumbnailLink": "Low impact Beginner Workout",
        "videoTime": "29'11",
        "tag": [
          "beginner",
          "loseWeight",
          "gainMuscles",
          "balance",
          "fullBody",
          "neckPain",
          "shoulderPain",
          "kneePain",
          "backPain",
          "all",
          ""
        ]
      },
      {
        "id": 42,
        "videoName": "Low impact, high intensity intermediate home cardio workout",
        "videoURL": "https://www.youtube.com/watch?v=Ba3qZjzPonI&ab_channel=BodyProject",
        "thumbnailLink": "High intensity intermediate home cardio workout",
        "videoTime": "31:37",
        "tag": [
          "intermediator",
          "loseWeight",
          "gainMuscles",
          "balance",
          "fullBody",
          "backPain",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 43,
        "videoName": "FUN cardio workout to music! ALL fitness levels.",
        "videoURL": "https://www.youtube.com/watch?v=pHTBWOpRHMY&ab_channel=BodyProject",
        "thumbnailLink": "FUN cardio workout",
        "videoTime": "30:36",
        "tag": [
          "beginner",
          "intermediator",
          "loseWeight",
          "gainMuscles",
          "balance",
          "fullBody",
          "backPain",
          "neckPain",
          "shoulderPain",
          "kneePain",
          "all",
          ""
        ]
      },
      {
        "id": 44,
        "videoName": "10 MIN ADVANCED AB WORKOUT",
        "videoURL": "https://www.youtube.com/watch?v=UIy3_bO6pX8&ab_channel=TRAINWITHGAINSBYBRAINS",
        "thumbnailLink": "10 Mins Abs Female",
        "videoTime": "10:23",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "coreBody",
          "shoulderPain",
          "neckPain",
          "kneePain",
          "all"
        ]
      },
      {
        "id": 45,
        "videoName": "45 Min DUMBBELL LEG WORKOUT at Home",
        "videoURL": "https://www.youtube.com/watch?v=DENm10PI8Xc&ab_channel=CarolineGirvan",
        "thumbnailLink": "Advanced Leg Workout Dumbbell",
        "videoTime": "45:10",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "lowerBody",
          "neckPain",
          "backPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 46,
        "videoName": "THE BEST AT HOME BOOTY WORKOUT (No Equipment, 20 mins)",
        "videoURL": "https://www.youtube.com/watch?v=5KYAVG7BWAU&ab_channel=MadFit",
        "thumbnailLink": "20 Mins Booty",
        "videoTime": "22:05",
        "tag": [
          "intermediator",
          "balance",
          "gainMuscles",
          "lowerBody",
          "backPain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 47,
        "videoName": "30 MIN FULL UPPER BODY Workout",
        "videoURL": "https://www.youtube.com/watch?v=WGA_ctAMkMk&ab_channel=growingannanas",
        "thumbnailLink": "30 Mins UpperBody Workout",
        "videoTime": "35:23",
        "tag": [
          "intermediator",
          "loseWeight",
          "gainMuscles",
          "balance",
          "upperBody",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 48,
        "videoName": "30 MIN LEG WORKOUT with weights, dumbbells | LOW IMPACT",
        "videoURL": "https://www.youtube.com/watch?v=olJ6ljjtoTM&ab_channel=growingannanas",
        "thumbnailLink": "30 Mins LowerBody Workout",
        "videoTime": "30:33",
        "tag": [
          "intermediator",
          "loseWeight",
          "gainMuscles",
          "balance",
          "lowerBody",
          "backPain",
          "kneePain",
          "neckPain",
          "shoulderPain",
          "all"
        ]
      },
      {
        "id": 49,
        "videoName": "20 Minute HIIT Cardio Workout Glutes & Abs",
        "videoURL": "https://www.youtube.com/watch?v=5HIFBp6a6OU&ab_channel=SELF",
        "thumbnailLink": "20 Mins Butt Abs",
        "videoTime": "29:39",
        "tag": [
          "intermediator",
          "advance",
          "loseWeight",
          "gainMuscles",
          "coreBody",
          "fullBody",
          "neckPain",
          "shoulderPain",
          "backPain",
          "all"
        ]
      },
      {
        "id": 50,
        "videoName": "20 Minute Upper Body Dumbbell Workout",
        "videoURL": "https://www.youtube.com/watch?v=YxBpeOqvBWw&ab_channel=SELF",
        "thumbnailLink": "20 Minute Upper Body Dumbbell Workout",
        "videoTime": "34:27",
        "tag": [
          "advance",
          "loseWeight",
          "gainMuscles",
          "upperBody",
          "neckPain",
          "shoulderPain",
          "kneePain",
          "all"
        ]
      }
    ]
  }
   
  //  {
  //   video-01: { url: '', thumbnailLink: '', videoTime: '', tag: [beginner, loseWeight, upperBody, kneePain]},
  //   video-02: { url: '', thumbnailLink: '', videoTime: '', tag: [beginner, loseWeight, balance, lowBody, kneePain]},
  //   video-03: { url: '', thumbnailLink: '', videoTime: '', tag: [beginner, loseWeight, gainMuscles, fullBody, kneePain, neckPain]}
  //  }