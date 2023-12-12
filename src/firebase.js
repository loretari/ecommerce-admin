// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD29j5uJn63Jg_7c9kLnsXikMxGUPXZ8fk",
    authDomain: "ecommerce-admin-57ee3.firebaseapp.com",
    projectId: "ecommerce-admin-57ee3",
    storageBucket: "ecommerce-admin-57ee3.appspot.com",
    messagingSenderId: "60950230636",
    appId: "1:60950230636:web:77c9c1ca3b8770deb50a49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);

export default app;