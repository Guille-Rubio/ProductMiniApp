import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";


const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = proces.env.FIREBASE_AUTH_DOMAIN;
const FIREBASE_DB_URL = process.env.FIREBASE_DB_URL;
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const FIREBASE_BUCKET = process.env.FIREBASE_BUCKET;
const FIREBASE_MESSAGING_SENDER = process.env.FIREBASE_MESSAGING_SENDER;
const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DB_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER,
    appId: FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage();


const uploadFileToProducts = (file) => {
    const metadata = {
        name:"Prueba 1",
        contentType:'image/jpeg'
    }
    const productRef = ref(storage, "Products")
    uploadBytes(productRef, file, metadata).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
}