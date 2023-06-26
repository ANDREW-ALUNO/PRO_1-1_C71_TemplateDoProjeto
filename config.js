import firebase from "firebase";
require("@firebase/firestore");


  
  const firebaseConfig = {
  apiKey: "AIzaSyDzIDm61Kg3wLPdDpSDwvu9Y0rc8nj4mOQ",
  authDomain: "ciclista-eletronico-95a1d.firebaseapp.com",
  projectId: "ciclista-eletronico-95a1d",
  storageBucket: "ciclista-eletronico-95a1d.appspot.com",
  messagingSenderId: "103690703204",
  appId: "1:103690703204:web:e1ce3ccfe99b5ca780ea71"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
