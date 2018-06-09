import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
    apiKey: "AIzaSyAw8jGiBFFQgct3-ubQxnbv3xvW8YokhQA",
    authDomain: "quick-todo-9fdec.firebaseapp.com",
    databaseURL: "https://quick-todo-9fdec.firebaseio.com",
    projectId: "quick-todo-9fdec",
    storageBucket: "quick-todo-9fdec.appspot.com",
    messagingSenderId: "510249542864"
  };
const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings);


export default firestore;