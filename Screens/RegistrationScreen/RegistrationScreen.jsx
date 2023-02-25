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

const RegistrationScreen = () => {
	const [login, setLogin] = useState("");
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
					title="Вже є аккаунт?Увійти"
					onPress={() => navigation.navigate("Login")}
				/>
				<Button
					title="Зареєструватися"
					onPress={console.log({ login, email, password })}
				/>
			</View>
		</FormContainer>
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
export default RegistrationScreen;
