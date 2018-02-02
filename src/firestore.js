import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAGezF3ABqCbE5GJ4H3FCIzu9HdkE-hwYo",
    authDomain: "book-store-bd9ad.firebaseapp.com",
    databaseURL: "https://book-store-bd9ad.firebaseio.com",
    projectId: "book-store-bd9ad",
    storageBucket: "book-store-bd9ad.appspot.com",
    messagingSenderId: "111816567843"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;