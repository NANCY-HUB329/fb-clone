// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import   firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAadVQzlLz-72TkD-He9059vHqg5jeb-9s",
    authDomain: "facebook-clone-740e7.firebaseapp.com",
    projectId: "facebook-clone-740e7",
    storageBucket: "facebook-clone-740e7.appspot.com",
    messagingSenderId: "704999748403",
    appId: "1:704999748403:web:d2c27a154a7f19b11fc446",
    measurementId: "G-SFQZ9MHML5",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;