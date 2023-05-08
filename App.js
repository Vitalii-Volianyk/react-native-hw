import {StatusBar} from "expo-status-bar";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {useEffect, useState} from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import LoginScreen from "./Screens/LoginScreen.jsx";
import HomeScreen from "./Screens/HomeScreen.jsx";
import MapScreen from "./Screens/MapScreen.jsx";
import CommentsScreen from "./Screens/CommentsScreen.jsx";
import {store} from "./service/redux/store.js";
import {useSelector, useDispatch, Provider} from "react-redux";
import {setUser} from "./service/redux/auth/auth.js";
import {auth} from "./service/firebase.js";

function App() {
	const [isReady, setIsReady] = useState(false);
	const user = useSelector(state => state.user.user);
	SplashScreen.preventAutoHideAsync();
	const dispatch = useDispatch();
	const MainStack = createStackNavigator();

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync({
					Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
				});
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setIsReady(true);
				await SplashScreen.hideAsync();
			}
			await auth.onAuthStateChanged(user => {
				if (!user) {
					return;
				}
				const {displayName, email, emailVerified, photoURL, uid} = user;
				dispatch(
					setUser({
						displayName,
						email,
						emailVerified,
						photoURL,
						uid,
					})
				);
			});
		}
		prepare();
	}, []);
	let initialRouteName = "Registration";
	useEffect(() => {
		if (user) {
			initialRouteName = "Home";
		} else {
			initialRouteName = "Login";
		}
	}, [user]);

	if (!isReady) {
		return null;
	}
	return (
		<>
			<StatusBar hidden />
			<NavigationContainer>
				<MainStack.Navigator initialRouteName={initialRouteName}>
					<MainStack.Screen
						name="Registration"
						component={RegistrationScreen}
						options={{headerShown: false}}
					/>
					<MainStack.Screen
						name="Login"
						component={LoginScreen}
						options={{headerShown: false}}
					/>
					<MainStack.Screen
						name="Home"
						component={HomeScreen}
						options={{headerShown: false}}
					/>
					<MainStack.Screen
						name="MapScreen"
						component={MapScreen}
						options={{headerShown: false}}
					/>
					<MainStack.Screen
						name="CommentsScreen"
						component={CommentsScreen}
						options={{headerShown: false}}
					/>
				</MainStack.Navigator>
			</NavigationContainer>
		</>
	);
}

export default () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};
