import {useNavigation} from "@react-navigation/native";
import {
	StyleSheet,
	ImageBackground,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
	View,
	Keyboard,
} from "react-native";

const FormContainer = ({children, route}) => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				keyboardVerticalOffset={Platform.select({
					ios: () => (route === "login" ? -280 : -190),
					android: () => (route === "login" ? -250 : -190),
				})()}
				style={styles.block}
			>
				<View style={styles.block}>
					<ImageBackground
						source={require("../../assets/PhotoBG.jpg")}
						style={styles.image}
					>
						{children}
					</ImageBackground>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};
const styles = StyleSheet.create({
	block: {
		flex: 1,
	},
	image: {
		flex: 1,
		resizeMode: "stretch",
		justifyContent: "flex-end",
	},
});

export default FormContainer;
