import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config.js';

const firebaseAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default firebaseAuthentication;