import {
	TextInput,
	Text,
	View,
	Pressable,
	KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import { styles } from "./Styles";
import FormContainer from "../components/FormContainer/FormContainer";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [focused, setFocused] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleFocus = e => {
		setFocused(e);
	};
	return (
		<FormContainer route="login">
			<View style={styles.container}>
				<Text style={styles.title}>Вхід</Text>

				<TextInput
					style={
						focused == "Email" ? styles.inputActive : styles.input
					}
					value={email}
					onChangeText={setEmail}
					placeholder="Email"
					onFocus={() => handleFocus("Email")}
					onBlur={() => handleFocus("")}
				/>

				<View style={styles.inputContainer}>
					<TextInput
						style={
							focused == "Password"
								? styles.inputActive
								: styles.input
						}
						secureTextEntry={!showPassword}
						value={password}
						onChangeText={setPassword}
						placeholder="Password"
						onFocus={() => handleFocus("Password")}
						onBlur={() => handleFocus("")}
					/>

					<Pressable
						onPress={() => setShowPassword(!showPassword)}
						style={styles.passShower}
					>
						<Text style={styles.passShowerText}>Показати</Text>
					</Pressable>
				</View>

				<Pressable
					style={styles.buttonPrimary}
					onPress={() => console.log({ email, password })}
				>
					<Text style={styles.buttonPrimaryText}>Увійти</Text>
				</Pressable>
				<Pressable
					style={styles.buttonSecondary}
					onPress={() => navigation.navigate("Registration")}
				>
					<Text style={styles.buttonSecondaryText}>
						Немає аккаунту? Зареєструватися
					</Text>
				</Pressable>
			</View>
		</FormContainer>
	);
};

export default LoginScreen;
