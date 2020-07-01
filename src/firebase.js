import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCDNC1gRYe09xmQNmUqkr2jYDlW6YVWS8E",
  authDomain: "todoist-react-native.firebaseapp.com",
  databaseURL: "https://todoist-react-native.firebaseio.com",
  projectId: "todoist-react-native",
  storageBucket: "todoist-react-native.appspot.com",
  messagingSenderId: "861880039890",
  appId: "1:861880039890:web:3b53f563ea0b9ec0c5f00b",
});

export { firebaseConfig as firebase };
