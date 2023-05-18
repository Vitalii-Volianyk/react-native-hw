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

const savePhotoToFirebase = image => {
	// Get a reference to the Firebase storage bucket
	const storageRef = firebase.storage().ref();

	// Create a new file reference for the image
	const imageRef = storageRef.child("images/" + image.name);

	// Upload the image to Firebase
	imageRef.putFile(image).then(snapshot => {
		// Get the download URL for the image
		const downloadURL = snapshot.downloadURL;

		// Do something with the download URL
		console.log(
			"The image has been uploaded to Firebase. The download URL is: " +
				downloadURL
		);
	});
};

const getPositionName = ({latitude, longitude}) => {
	// Create a new Geocoder object
	const geocoder = new google.maps.Geocoder();

	// Create a new LatLng object with the latitude and longitude
	const latLng = new google.maps.LatLng(latitude, longitude);

	// Reverse geocode the LatLng object
	geocoder.geocode(
		{
			latLng: latLng,
		},
		(results, status) => {
			if (status == google.maps.GeocoderStatus.OK) {
				// Get the first result
				const result = results[0];

				// Get the formatted_address property from the result
				const formattedAddress = result.formatted_address;

				// Return the formatted_address
				return formattedAddress;
			} else {
				// Return an empty string
				return "";
			}
		}
	);
};

export {auth, registerUser, loginUser, logoutUser};
