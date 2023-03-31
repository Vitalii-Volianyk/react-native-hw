import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import LoginScreen from "./Screens/LoginScreen.jsx";

SplashScreen.preventAutoHideAsync();

const MainStack = createStackNavigator();

export default function App() {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
		  try {
			await Font.loadAsync({Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf")});
		  } catch (e) {
			console.warn(e);
		  } finally {
			// Tell the application to render
			setIsReady(true);
			await SplashScreen.hideAsync();
		  }
		}
		prepare();
	  }, []);


	if (!isReady) {
		return null;
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
