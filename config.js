import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAi_s1id0Ic1Edyf2odG_ZvyfVo_J1GNrg",
  authDomain: "yooo-8b4be.firebaseapp.com",
  projectId: "yooo-8b4be",
  storageBucket: "yooo-8b4be.appspot.com",
  messagingSenderId: "102036896667",
  appId: "1:102036896667:web:350dca2ad1e882720b7f3e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
