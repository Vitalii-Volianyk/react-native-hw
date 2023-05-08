import {TextInput, Text, View, Pressable, Image} from "react-native";
import FormContainer from "../components/FormContainer/FormContainer";
import {useCallback, useState} from "react";
import * as DocumentPicker from "expo-document-picker";
import {styles} from "./Styles";
import {AntDesign} from "@expo/vector-icons";
import {registerUser} from "../service/firebase.js";

const RegistrationScreen = ({navigation}) => {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const [focused, setFocused] = useState("");
	const handleFocus = e => {
		setFocused(e);
	};

	const [fileResponse, setFileResponse] = useState(null);
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
		<FormContainer route="register">
			<View style={styles.container}>
				<View style={styles.thumb}>
					<Pressable
						onPress={() => {
							if (fileResponse) {
								setFileResponse(null);
								return;
							}
							handleDocumentSelection();
						}}
						style={styles.thumbFile}
					>
						{fileResponse ? (
							<AntDesign
								name="pluscircleo"
								size={25}
								color="#bdbdbd"
								style={{
									transform: [{rotate: "45deg"}],
									backgroundColor: "#fff",
									borderRadius: 50,
								}}
							/>
						) : (
							<AntDesign
								name="pluscircleo"
								size={25}
								color="#FF6C00"
							/>
						)}
					</Pressable>
					{fileResponse && (
						<Image
							source={{uri: fileResponse.uri}}
							style={{width: 120, height: 120}}
						/>
					)}
				</View>
				<View
					style={{
						marginTop: 92,
						marginBottom: -65,
					}}
				>
					<Text style={styles.title}>Реєстрація</Text>
					<TextInput
						style={
							focused == "Login"
								? styles.inputActive
								: styles.input
						}
						value={login}
						onChangeText={setLogin}
						placeholder="Login"
						onFocus={() => handleFocus("Login")}
						onBlur={() => handleFocus("")}
					/>

					<TextInput
						style={
							focused == "Email"
								? styles.inputActive
								: styles.input
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
							<Text style={styles.passShowerText}>
								{showPassword ? "Сховати" : "Показати"}
							</Text>
						</Pressable>
					</View>

					<Pressable
						style={styles.buttonPrimary}
						onPress={() => {
							console.log(email, password, login);
							registerUser(email, password, login);
						}}
					>
						<Text style={styles.buttonPrimaryText}>
							Зареєструватися
						</Text>
					</Pressable>
					<Pressable
						style={styles.buttonSecondary}
						onPress={() => navigation.navigate("Login")}
					>
						<Text style={styles.buttonSecondaryText}>
							Вже є аккаунт? Увійти
						</Text>
					</Pressable>
				</View>
			</View>
		</FormContainer>
	);
};

export default RegistrationScreen;
