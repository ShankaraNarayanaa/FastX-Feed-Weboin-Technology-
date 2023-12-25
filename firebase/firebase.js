import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFNZ2LvbMlv1zd3cvgW9P_7x4CClg9FCY",
    authDomain: "fastx-feed-bf603.firebaseapp.com",
    projectId: "fastx-feed-bf603",
    storageBucket: "fastx-feed-bf603.appspot.com",
    messagingSenderId: "571368243421",
    appId: "1:571368243421:web:46bc628143688c458e1b34"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };