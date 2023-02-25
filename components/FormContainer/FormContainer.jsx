import { useEffect, useState } from "react";
import {
	Dimensions,
	Keyboard,
	StyleSheet,
	ImageBackground,
	TouchableWithoutFeedback,
	View,
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
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>{children}</View>
			</TouchableWithoutFeedback>
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-end",
		flex: 1,
	},
	image: {
		flex: 1,
		resizeMode: "stretch",
		padding: 0,
	},
});

export default FormContainer;
