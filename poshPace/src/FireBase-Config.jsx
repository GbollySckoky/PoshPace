import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdMUvh20YEDbX2sUNnzLLY_oPDqGMXNdI",
    authDomain: "poshpace-afbd6.firebaseapp.com",
    projectId: "poshpace-afbd6",
    storageBucket: "poshpace-afbd6.appspot.com",
    messagingSenderId: "996804174454",
    appId: "1:996804174454:web:d2d5d2c0e771e3d94f7557",
    measurementId: "G-JW879ZLTZL"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFireStore(app);