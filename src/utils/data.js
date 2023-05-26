import Alert from "../assets/super.png";
import Home from "../assets/home.png";

export const Data = [
  {
    questions: "What is your current situation?",
    answer: ["I already have a place, just looking for a flatmate", "I need both a home and a flatmate", "I’m only looking for only a home"],
    multiStep: false,
    alert: false,
  },
  {
    questions: "Fantastic! We’ve got what we need Now to the final, most important details.",
    multiStep: false,
    alert: true,
    img: Alert,
  },
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
    answer: ["One bedroom", "Two bedroom", "Three bedroom", "+ Three bedroom"],
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
    answer: ["Male only", "Female only", "Both male and female"],
    multiStep: true,
    current: 1,
    total: 5,
    alert: false,
  },
  {
    questions: "What’s your opinion on chores?",
    answer: ["Let’s hire someone to clean", "We can clean on the weekends", "Clean up immediately!"],
    multiStep: true,
    current: 2,
    total: 5,
    alert: false,
  },
  {
    questions: "Can you live with pets?",
    answer: ["Dogs only", "Cats only", "All animals welcome", "Heck no!!!"],
    multiStep: true,
    current: 3,
    total: 5,
    alert: false,
  },
  {
    questions: "How often can we have friends/family over?",
    answer: ["Weekends are fine", "Everyday", "Never. That’s what bars are for"],
    multiStep: true,
    current: 4,
    total: 5,
    alert: false,
  },
  {
    questions: "How do we split the bills?",
    answer: ["You take care of some things, I take care of others", "We split every bill halfway"],
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
