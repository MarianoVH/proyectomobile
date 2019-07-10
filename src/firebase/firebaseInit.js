import firebase from 'firebase'
import 'firebase/firestore' 

var config = {

    apiKey: "AIzaSyBxVqKW4e1zOILpEWD15BGDX_us-A96Vvw",
    authDomain: "nysl-mobilev3a.firebaseapp.com",
    databaseURL: "https://nysl-mobilev3a.firebaseio.com",
    projectId: "nysl-mobilev3a",
    storageBucket: "nysl-mobilev3a.appspot.com",
    messagingSenderId: "1084165669415",
    appId: "1:1084165669415:web:61ccf020b60a95d6"
};

firebase.initializeApp(config)

const db = firebase.database() 

export default db 