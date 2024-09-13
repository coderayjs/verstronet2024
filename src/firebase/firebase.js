// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from  "firebase/auth"




const firebaseConfig = {
  apiKey: "AIzaSyD-qmv6whgyQFIbsVztEGJPjDJS50wEzJI",
  authDomain: "verstronetinc.firebaseapp.com",
  projectId: "verstronetinc",
  storageBucket: "verstronetinc.appspot.com",
  messagingSenderId: "168059203002",
  appId: "1:168059203002:web:d155b9f222f83d7a81c183",
  measurementId: "G-SJ5XP574NS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth, app};
