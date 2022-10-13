
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDOuxgNQlgrKqkTxPPRtXwc0kKS0dTquSk",
  authDomain: "react-registration-963ce.firebaseapp.com",
  projectId: "react-registration-963ce",
  storageBucket: "react-registration-963ce.appspot.com",
  messagingSenderId: "614723580041",
  appId: "1:614723580041:web:f9fe33ab346f95238f9658",
  measurementId: "G-D2G3QZGBMK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


