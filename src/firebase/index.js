import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDCF5B8HY6UFYtGYbyhTe0Qyjr4kRTjOjw",
    authDomain: "react-c0f89.firebaseapp.com",
    projectId: "react-c0f89",
    storageBucket: "react-c0f89.appspot.com",
    messagingSenderId: "1099042487552",
    appId: "1:1099042487552:web:a15e66742db1cdd12e87e5"
  });

  export const getFirebase = () => app;

  export const getFirestore = () => firebase.firestore(app); 
 