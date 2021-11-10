import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";


const initializationFirebase = () => {
    initializeApp(firebaseConfig)
}

export default initializationFirebase;