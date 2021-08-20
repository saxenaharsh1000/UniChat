import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB0LQAa0218980xWZPT6PeNrcdudaGzXJo",
    authDomain: "waatsaap-abf55.firebaseapp.com",
    projectId: "waatsaap-abf55",
    storageBucket: "waatsaap-abf55.appspot.com",
    messagingSenderId: "300384260904",
    appId: "1:300384260904:web:f69c3cf77810f12888761d"
}).auth();
    