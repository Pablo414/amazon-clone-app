import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCRxD4Qnej-ujfpDXAxnwGaZ1eYLVbnx34",
  authDomain: "wtf-74642.firebaseapp.com",
  projectId: "wtf-74642",
  storageBucket: "wtf-74642.appspot.com",
  messagingSenderId: "123821767678",
  appId: "1:123821767678:web:d2917095b0a1e8ba925eaf",
  measurementId: "G-PE2QVRNLLC"
});



const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };