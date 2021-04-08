import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBQHBOiin55cex4t06NJQLnG5WkGOdE_vU",
  authDomain: "help-me-studying-de644.firebaseapp.com",
  projectId: "help-me-studying-de644",
  storageBucket: "help-me-studying-de644.appspot.com",
  messagingSenderId: "808320741460",
  appId: "1:808320741460:web:7958aced5ed05ec875bdc1",
  measurementId: "G-HEWG11T9ZW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;
