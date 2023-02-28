import {
	TextInput,
	Text,
	KeyboardAvoidingView,
	Platform,
	View,
	Button,
} from "react-native";
import FormContainer from "../components/FormContainer/FormContainer";
import { useState } from "react";
import { useCallback, useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { styles } from "./Styles";

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

export default RegistrationScreen;
