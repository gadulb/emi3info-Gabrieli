import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOFPWVYj-oQrP6Z30l263Z0oZmJ-_qaoM",
    authDomain: "emi3info-gabrieli-80f13.firebaseapp.com",
    projectId: "emi3info-gabrieli-80f13",
    storageBucket: "emi3info-gabrieli-80f13.appspot.com",
    messagingSenderId: "826723850956",
    appId: "1:826723850956:web:7711f43b784dbbf2e18069"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)