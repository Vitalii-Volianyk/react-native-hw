import {
	TextInput,
	Text,
	KeyboardAvoidingView,
	Platform,
	View,
	Button,
} from "react-native";
import { styles } from "./Styles";
import FormContainer from "../components/FormContainer/FormContainer";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<FormContainer>
			<View style={styles.container}>
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
					title="Увійти"
					onPress={() => console.log({ email, password })}
				/>
				<Button
					title="Немає аккаунту?Зареєструватися"
					onPress={() => navigation.navigate("Registration")}
				/>
			</View>
		</FormContainer>
	);
};

export default LoginScreen;
