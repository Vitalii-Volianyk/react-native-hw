import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCkrS8awlMnOv3IAdJSEEVo7WKUXHP1xjU",
	authDomain: "react-native-hw-9fedc.firebaseapp.com",
	projectId: "react-native-hw-9fedc",
	storageBucket: "react-native-hw-9fedc.appspot.com",
	messagingSenderId: "536799521474",
	appId: "1:536799521474:web:497388294c56baf85be95b",
	measurementId: "G-NEPBQLM6LS",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerUser = (email, password) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			// Signed in
			const user = userCredential.user;
			console.log(user);
			// ...
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
			// ..
		});
};

export { auth, registerUser };
