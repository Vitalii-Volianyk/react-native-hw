import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import LoginScreen from "./Screens/LoginScreen.jsx";
import * as Font from "expo-font";

const loadFonts = async () => {
	await Font.loadAsync({
		Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
	});
};

const MainStack = createStackNavigator();

export default function App() {
	const [isReady, setIsReady] = useState(false);
	if (!isReady) {
		return (
			<AppLoading
				startAsync={loadFonts}
				onFinish={() => setIsReady(true)}
				onError={console.warn}
			/>
		);
	}
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<MainStack.Navigator initialRouteName="Login">
					<MainStack.Screen
						name="Registration"
						component={RegistrationScreen}
						options={{ headerShown: false }}
					/>
					<MainStack.Screen
						name="Login"
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
				</MainStack.Navigator>
			</NavigationContainer>
		</>
	);
}
