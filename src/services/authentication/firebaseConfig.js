import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCMAp3P0Gn89eWXNi5kOpsFOjA-_Qk0Muc",
  authDomain: "mealstogo-b79a5.firebaseapp.com",
  projectId: "mealstogo-b79a5",
  storageBucket: "mealstogo-b79a5.appspot.com",
  messagingSenderId: "456772287905",
  appId: "1:456772287905:web:972d8f7948e3b8c9b31fe0",
  measurementId: "G-0KV4ZMSCXY",
};

export const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
