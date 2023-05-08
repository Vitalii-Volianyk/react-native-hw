import {initializeApp} from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";

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

const registerUser = (email, password, login) => {
	console.log(email, password, login);
	createUserWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			updatedProfile(login);
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
};

const loginUser = (email, password) => {
	signInWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			// Signed in
			const user = userCredential.user;
			// ...
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
};

const logoutUser = async () => {
	try {
		await auth.signOut();
	} catch (error) {
		throw error;
	}
};

const updatedProfile = displayName => {
	updateProfile(auth.currentUser, {
		displayName,
		photoURL: "https://example.com/jane-q-user/profile.jpg",
	})
		.then(() => {
			console.log("Profile updated!");
		})
		.catch(error => {});
};

export {auth, registerUser, loginUser, logoutUser};
