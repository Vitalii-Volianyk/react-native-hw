import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import LoginScreen from "./Screens/LoginScreen.jsx";

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
