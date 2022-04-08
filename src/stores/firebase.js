// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref, set, get, child } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXI4XARdE3vFH4mW-ZYqlehSCw4eEXoVg",
  authDomain: "projectefinal2-4bcd6.firebaseapp.com",
  databaseURL: "https://projectefinal2-4bcd6-default-rtdb.firebaseio.com",
  projectId: "projectefinal2-4bcd6",
  storageBucket: "projectefinal2-4bcd6.appspot.com",
  messagingSenderId: "851459470821",
  appId: "1:851459470821:web:cab8842263ecf843b42b0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const db = getDatabase(app);
