import { useEffect, useState } from "react";
import {
	Dimensions,
	Keyboard,
	StyleSheet,
	ImageBackground,
	View,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
} from "react-native";

const FormContainer = ({ children }) => {
	const [offset, setOffset] = useState(Dimensions.get("window").height - 812);
	useEffect(() => {
		const showSubscription = Keyboard.addListener("keyboardDidShow", e => {
			setOffset(
				Dimensions.get("window").height - 812 - e.endCoordinates.height
			);
		});
		const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
			setOffset(Dimensions.get("window").height - 812);
		});

		return () => {
			showSubscription.remove();
			hideSubscription.remove();
		};
	}, []);
	return (
		<ImageBackground
			source={require("../../assets/PhotoBG.jpg")}
			style={styles.image}
			imageStyle={{
				bottom: offset,
			}}
		>
			<View style={styles.container}>{children}</View>
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
	container: {
		width: "100",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 25,
		padding: 20,
	},
	image: {
		flex: 1,
		resizeMode: "stretch",
		justifyContent: "flex-end",
		alignItems: "center",
	},
});

export default FormContainer;
