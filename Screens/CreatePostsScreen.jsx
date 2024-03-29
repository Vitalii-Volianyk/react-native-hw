import {Ionicons} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {
	Text,
	View,
	Image,
	StyleSheet,
	Pressable,
	TextInput,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	useWindowDimensions,
} from "react-native";

import * as Location from "expo-location";
import {Dimensions} from "react-native";
import Geocoder from "react-native-geocoding";
import {Camera} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import {savePhotoToFirebase} from "../service/firebase";

const CreatePostsScreen = ({route}) => {
	const [image, setImage] = useState(null);
	const [caption, setCaption] = useState("");
	const [locationText, setLocationText] = useState("");
	const [buttonHidden, setButtonHidden] = useState(false);
	const [hasPermission, setHasPermission] = useState(null);
	const [cameraRef, setCameraRef] = useState(null);
	const [location, setLocation] = useState(null);
	const dimensions = useWindowDimensions();

	useEffect(() => {
		(async () => {
			let {status} = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				console.log("Permission to access location was denied");
			}

			let location = await Location.getCurrentPositionAsync({
				accuracy: Location.Accuracy.High,
			});
			//Geocoder.init("");
			//let results = await Geocoder.from("Київ");
			//console.log(results.results[0].geometry.location);
			const coords = {
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
			};
			const cityName = await Location.reverseGeocodeAsync(coords);
			setLocation(coords);
			setLocationText(cityName[0].city);
			const {status: CamStatus} =
				await Camera.requestCameraPermissionsAsync();
			await MediaLibrary.requestPermissionsAsync();
			setHasPermission(CamStatus === "granted");
		})();
	}, []);

	const takePicture = async () => {
		if (cameraRef) {
			const img = await cameraRef.takePictureAsync();
			const image = await MediaLibrary.createAssetAsync(img.uri);
			const response = await fetch(image.uri);
			const blob = await response.blob();
			const url = await savePhotoToFirebase(blob, image.filename);
			console.log(url);
			setImage(img);
		}
	};

	const onSubmit = () => {
		// TODO: Submit post to server
	};

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView
					behavior={Platform.OS == "ios" ? "padding" : "height"}
					keyboardVerticalOffset={Platform.select({
						ios: () => -(dimensions.height / 2),
						android: () => -100,
					})()}
					style={styles.block}
				>
					<View style={styles.header}>
						{!image ? (
							<Camera
								style={styles.camera}
								ref={ref => {
									setCameraRef(ref);
								}}
							></Camera>
						) : (
							<Image
								style={styles.avatar}
								source={{uri: image?.uri}}
								resizeMode="cover"
								onLoad={() => {
									// Hide the button after the image is loaded
									setButtonHidden(true);
								}}
							/>
						)}
						<Pressable
							style={styles.buttonCam}
							onPress={takePicture}
							hidden={buttonHidden}
						>
							<Ionicons
								name="ios-camera"
								size={24}
								color="#939393"
							/>
						</Pressable>
						<Text style={styles.text}>Додайте фото</Text>
					</View>

					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							placeholder="Назва..."
							value={caption}
							onChangeText={setCaption}
						/>
						<View style={styles.inputContainer}>
							<Ionicons
								name="location-outline"
								size={24}
								color="black"
							/>
							<TextInput
								style={styles.input}
								placeholder="Місцевість..."
								value={locationText}
								onChangeText={setLocationText}
							/>
						</View>
					</View>

					<Pressable
						style={styles.button}
						disabled={image == null}
						onPress={onSubmit}
					>
						<Text>Опублікувати</Text>
					</Pressable>

					<Pressable
						style={styles.delete}
						disabled={image == null}
						onPress={() => setImage(null)}
					>
						<Ionicons
							name="trash-outline"
							size={24}
							color="#BDBDBD"
						/>
					</Pressable>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 16,
		marginVertical: 32,
	},
	delete: {
		position: "absolute",
		bottom: 0,
		right: "50%",
		transform: [{translateX: 35}],
		paddingHorizontal: 23,
		paddingVertical: 8,
		borderRadius: 20,
		color: "#BDBDBD",
		backgroundColor: "#F6F6F6",
		borderColor: "#BDBDBD",
		borderWidth: 1,
		alignSelf: "center",
	},
	header: {
		height: 343,
	},
	avatar: {
		width: "100%",

		borderRadius: 5,
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 25,
	},
	text: {
		position: "absolute",
		bottom: 0,
		left: 0,
		fontSize: 19,
		color: "#BDBDBD",
	},
	buttonCam: {
		position: "absolute",
		top: "50%",
		right: "50%",
		//transform: [{translateX: 35}, {translateY: -35}],
		padding: 20,
		borderRadius: 50,
		backgroundColor: "#FFFFFF4D",
		borderColor: "#ffffff5d",
		borderWidth: 1,
		alignSelf: "center",
	},
	inputContainer: {
		marginVertical: 10,
	},
	input: {
		width: "100%",
		height: 40,
		borderRadius: 5,
		borderColor: "#BDBDBD",
		borderWidth: 1,
		paddingHorizontal: 10,
	},
	button: {
		width: "100%",
		height: 40,
		borderRadius: 5,
		backgroundColor: "#F6F6F6",
		borderColor: "#BDBDBD",
		borderWidth: 1,
		paddingHorizontal: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	mapStyle: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
	camera: {flex: 1},
});

export default CreatePostsScreen;
