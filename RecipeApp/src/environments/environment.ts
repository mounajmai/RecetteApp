// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
export const environment = {
  production: false, // added production property
  firebase: {
    apiKey: "AIzaSyAa2EED_VEtUo7xsJdC5VBAcy4sTOLoIMc",
    authDomain: "recipeapp-d2c3b.firebaseapp.com",
    projectId: "recipeapp-d2c3b",
    storageBucket: "recipeapp-d2c3b.appspot.com",
    messagingSenderId: "1095938140127",
    appId: "1:1095938140127:web:a02c2441f194bd4922466a",
    measurementId: "G-98SGK31KNR"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
