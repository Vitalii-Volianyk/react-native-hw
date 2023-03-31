import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "API_KEY",
	authDomain: "DOMAIN",
	databaseURL: "URL",
	projectId: "PROJECT_ID",
	storageBucket: "STORAGE",
	messagingSenderId: "SENDER_ID",
	appId: "APP_ID",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
