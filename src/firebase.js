import firebaseApp from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCglqgVNXD6Z7Cnbo9rTRx0rG_4PYJ9tpA",
  authDomain: "nepazon-8b822.firebaseapp.com",
  databaseURL: "https://nepazon-8b822.firebaseio.com",
  projectId: "nepazon-8b822",
  storageBucket: "nepazon-8b822.appspot.com",
  messagingSenderId: "655551295327",
  appId: "1:655551295327:web:17bca42be8cdf0ecc990ea",
  measurementId: "G-ZEN2J8MFXX",
};

// initialize firebase app
const app = firebaseApp.initializeApp(firebaseConfig);

// initialize the database

const db = app.firestore();

// initialize auth
const auth = app.auth();

export { db, auth };
