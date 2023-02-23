import { TextInput, Text, StyleSheet } from "react-native";
import FormContainer from "../../components/FormContainer/FormContainer";
import { useState } from "react";

const LoginScreen = () => {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleLogin = e => {
		setLogin(e.nativeEvent.text);
	};
	const handleEmail = e => {
		setEmail(e.nativeEvent.text);
	};
	const handlePassword = e => {
		setPassword(e.nativeEvent.text);
	};
	return (
		<FormContainer>
			<TextInput
				style={styles.input}
				value={login}
				onChange={handleLogin}
				placeholder="Login"
			/>
			<TextInput
				style={styles.input}
				value={email}
				onChange={handleEmail}
				placeholder="Email"
			/>
			<TextInput
				style={styles.input}
				value={password}
				onChange={handlePassword}
				placeholder="Password"
			/>
			<Text>DDDD</Text>
		</FormContainer>
	);
};
const styles = StyleSheet.create({
	input: {
		width: "100%",
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		padding: 10,
		margin: 10,
		boxSize: "border-box",
		backgroundColor: "#fff",
		borderRadius: 5,
	},
});
export default LoginScreen;
