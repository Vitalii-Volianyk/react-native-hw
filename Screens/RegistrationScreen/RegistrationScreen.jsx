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
import { useCallback, useState } from "react";
import * as DocumentPicker from "expo-document-picker";

const RegistrationScreen = ({ navigation }) => {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [fileResponse, setFileResponse] = useState([]);

	const handleDocumentSelection = useCallback(async () => {
		try {
			const response = await DocumentPicker.getDocumentAsync({
				type: ["image/*"],
			});
			setFileResponse(response);
		} catch (err) {
			console.warn(err);
		}
	}, []);

	return (
		<FormContainer>
			<View style={styles.container}>
				<View style={styles.thumb}>
					<Button
						title="Вибрати файл"
						onPress={handleDocumentSelection}
					/>
					{fileResponse && (
						<Image
							source={{ uri: fileResponse.uri }}
							style={{ width: 120, height: 120 }}
						/>
					)}
				</View>

				<Text>Registration Screen</Text>
				<KeyboardAvoidingView
					behavior={Platform.OS == "ios" ? "padding" : "height"}
				>
					<TextInput
						style={styles.input}
						value={login}
						onChangeText={setLogin}
						placeholder="Login"
					/>

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
					title="Зареєструватися"
					onPress={() => console.log({ login, email, password })}
				/>
				<Button
					title="Вже є аккаунт?Увійти"
					onPress={() => navigation.navigate("Login")}
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
export default RegistrationScreen;
