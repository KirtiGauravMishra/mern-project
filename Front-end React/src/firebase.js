import { initializeApp } from "firebase/app";
// add this get auth and export it to use well.
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOf7EjRGf7orFtqyz_KOCGiwH5SiUT50s",
  authDomain: "mern-project-8d41c.firebaseapp.com",
  projectId: "mern-project-8d41c",
  storageBucket: "mern-project-8d41c.appspot.com",
  messagingSenderId: "163922800286",
  appId: "1:163922800286:web:76605baf5f159a6935158f",
  measurementId: "G-V01GV0E1FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export default app;