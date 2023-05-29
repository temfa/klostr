import Alert from "../assets/super.png";
import Home from "../assets/home.png";

export const Data = [
  {
    questions: "Personal Information",
    multiStep: true,
    alert: false,
    current: 1,
    total: 2,
  },
  {
    questions: "Connect a social account",
    multiStep: true,
    alert: false,
    current: 2,
    total: 2,
  },
  {
    questions: "Fantastic! We’ve got what we need Now to the final, most important details.",
    multiStep: false,
    alert: true,
    img: Alert,
  },
  {
    questions: "What is your current situation?",
    slug: "situation",
    answer: [
      {
        slug: "flatmate",
        name: "I already have a place, just looking for a flatmate",
      },
      {
        slug: "both",
        name: "I need both a home and a flatmate",
      },
      //   {
      //     slug: "flat",
      //     name: "I'm only looking for only a home",
      //   },
    ],
    multiStep: false,
    alert: false,
    indicator: true,
  },

  {
    questions: "We’re excited to help you! Now tell us what you’re looking for",
    multiStep: false,
    alert: true,
    img: Home,
  },

  {
    questions: "Show us a place you have in mind",
    multiStep: true,
    alert: false,
    current: 1,
    total: 4,
  },
  {
    questions: "Where do you want to live?",
    multiStep: true,
    current: 2,
    total: 4,
    alert: false,
  },
  {
    questions: "How many bedrooms?",
    slug: "apartment_type",
    answer: [
      {
        slug: "one_bedroom",
        name: "1 Bedrooms",
      },
      {
        slug: "two_bedroom",
        name: "2 Bedrooms",
      },
      {
        slug: "three_bedroom",
        name: "3 Bedrooms",
      },
      {
        slug: "three_plus_bedroom",
        name: "+3 Bedrooms",
      },
    ],
    multiStep: true,
    current: 3,
    total: 4,
    alert: false,
  },
  {
    questions: "What is your budget?",
    multiStep: true,
    current: 4,
    total: 4,
    alert: false,
  },
  {
    questions: "Super! Now help us figure out the type of person you’d like to live with",
    multiStep: false,
    alert: true,
    img: Alert,
  },
  {
    questions: "Who can you live with?",
    slug: "roomate_gender",
    answer: [
      {
        slug: "male",
        name: "Male Only",
      },
      {
        slug: "female",
        name: "Female Only",
      },
      {
        slug: "both",
        name: "Both male and female",
      },
    ],
    multiStep: true,
    current: 1,
    total: 5,
    alert: false,
  },
  {
    questions: "What’s your opinion on chores?",
    slug: "chores",
    answer: [
      {
        slug: "hire",
        name: "Let's hire someone to clean",
      },
      {
        slug: "weekends",
        name: "We can clean on weekends",
      },
      {
        slug: "immediately",
        name: "Clean up immediately",
      },
    ],
    multiStep: true,
    current: 2,
    total: 5,
    alert: false,
  },
  {
    questions: "Can you live with pets?",

    answer: [
      {
        slug: "hire",
        name: "Dogs only",
      },
      {
        slug: "weekends",
        name: "Cats only",
      },
      {
        slug: "immediately",
        name: "All animals welcome",
      },
      {
        slug: "immediately",
        name: "Heck no!!!",
      },
    ],
    multiStep: true,
    current: 3,
    total: 5,
    alert: false,
  },
  {
    questions: "How often can we have friends/family over?",
    slug: "friend_visits",
    answer: [
      {
        slug: "weekends",
        name: "Weekends are fine",
      },
      {
        slug: "everyday",
        name: "Everyday",
      },
      {
        slug: "never",
        name: "Never that's what bars are for.",
      },
    ],
    multiStep: true,
    current: 4,
    total: 5,
    alert: false,
  },
  {
    questions: "How do we split the bills?",

    answer: [
      {
        slug: "hire",
        name: "You take care of some things",
      },
      {
        slug: "weekends",
        name: "I take care of others",
      },
      {
        slug: "immediately",
        name: "We split every bill halfway",
      },
    ],
    multiStep: true,
    current: 5,
    total: 5,
    alert: false,
  },

  {
    questions: "The magic has begun! Now we’ll find your dream home",
    multiStep: false,
    alert: true,
    img: Alert,
  },
];

// const questionData = [
//   {
//     "personal Details": [
//       {
//         questions: "Personal Information",
//         multiStep: true,
//         alert: false,
//         current: 1,
//         total: 2,
//       },
//       {
//         questions: "Connect a social account",
//         multiStep: true,
//         alert: false,
//         current: 2,
//         total: 2,
//       },
//     ],
//   },
//   {
//     "Living Preferences": [
//       {
//         questions: "Where do you want to live?",
//         multiStep: true,
//         current: 1,
//         total: 3,
//         alert: false,
//       },
//       {
//         questions: "How many bedrooms?",
//         answer: ["1 bedroom", "2 bedroom", "3 bedroom", "+ 3 bedroom"],
//         multiStep: true,
//         current: 2,
//         total: 3,
//         alert: false,
//       },
//       {
//         questions: "What is your budget?",
//         multiStep: true,
//         current: 3,
//         total: 3,
//         alert: false,
//       },
//       {
//         questions: "Super! Now help us figure out the type of person you’d like to live with",
//         multiStep: false,
//         alert: true,
//         img: Alert,
//       },
//     ],
//   },
//   {
//     "Social Preferences": [
//       {
//         questions: "Who can you live with?",
//         answer: ["Male only", "Female only", "Both male and female"],
//         multiStep: true,
//         current: 1,
//         total: 5,
//         alert: false,
//       },
//       {
//         questions: "What’s your opinion on chores?",
//         answer: ["Let’s hire someone to clean", "We can clean on the weekends", "Clean up immediately!"],
//         multiStep: true,
//         current: 2,
//         total: 5,
//         alert: false,
//       },
//       {
//         questions: "Can you live with pets?",
//         answer: ["Dogs only", "Cats only", "All animals welcome", "Heck no!!!"],
//         multiStep: true,
//         current: 3,
//         total: 5,
//         alert: false,
//       },
//       {
//         questions: "How often can we have friends/family over?",
//         answer: ["Weekends are fine", "Everyday", "Never. That’s what bars are for"],
//         multiStep: true,
//         current: 4,
//         total: 5,
//         alert: false,
//       },
//       {
//         questions: "How do we split the bills?",
//         answer: ["You take care of some things, I take care of others", "We split every bill halfway"],
//         multiStep: true,
//         current: 5,
//         total: 5,
//         alert: false,
//       },
//     ],
//   },
// ];
