import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "Screens/RegistrationScreen/RegistrationScreen.jsx";
import LoginScreen from "./Screens/LoginScreen/LoginScreen.jsx";

const MainStack = createStackNavigator();
export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<MainStack.Navigator initialRouteName="Login">
					<MainStack.Screen
						name="Registration"
						component={RegistrationScreen}
					/>
					<MainStack.Screen name="Login" component={LoginScreen} />
				</MainStack.Navigator>
			</NavigationContainer>
		</>
	);
}
