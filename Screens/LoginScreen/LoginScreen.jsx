import {
	TextInput,
	Text,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	View,
	Button,
} from "react-native";
import FormContainer from "../../components/FormContainer/FormContainer";
import { useState } from "react";

const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<FormContainer>
			<View style={styles.container}>
				<View style={styles.thumb} />
				<Text>Login Screen</Text>
				<KeyboardAvoidingView
					behavior={Platform.OS == "ios" ? "padding" : "height"}
				>
					<TextInput
						style={styles.input}
						value={email}
						onChangeText={setEmail}
						placeholder="Email"
					/>

					<TextInput
						style={styles.input}
						value={password}
						onChangeText={setPassword}
						placeholder="Password"
					/>
				</KeyboardAvoidingView>
				<Button
					title="Немає аккаунту?Зареєструватися"
					onPress={() => navigation.navigate("Registration")}
				/>
				<Button
					title="Увійти"
					onPress={console.log({ email, password })}
				/>
			</View>
		</FormContainer>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		justifyContent: "flex-end",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingTop: 92,
		backgroundColor: "#fff",
	},
	thumb: {
		width: 120,
		height: 120,
		backgroundColor: "#E8E8E8",
		position: "absolute",
		top: -60,
		left: "50%",
		transform: [{ translateX: -60 }],
		borderRadius: 10,
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		padding: 10,
		margin: 16,
		boxSize: "border-box",
		backgroundColor: "#E8E8E8",
		borderRadius: 5,
	},
});
export default LoginScreen;
