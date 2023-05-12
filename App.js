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
import CreatePostsScreen from "./Screens/CreatePostsScreen.jsx";
import LogoTitle from "./components/LogoTitle.jsx";
import {store} from "./service/redux/store.js";
import {useDispatch, Provider, useSelector} from "react-redux";
import {setUser} from "./service/redux/auth/auth.js";
import {auth} from "./service/firebase.js";

function App() {
	const [isReady, setIsReady] = useState(false);
	SplashScreen.preventAutoHideAsync();
	const dispatch = useDispatch();
	const MainStack = createStackNavigator();
	const {user} = useSelector(state => state.user);

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync({
					Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
				});
			} catch (e) {
				console.warn(e);
			} finally {
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
			setIsReady(true);
		}
		prepare();
	}, []);

	if (!isReady) {
		return null;
	}
	if (user) {
		console.log(user);
		return (
			<>
				<StatusBar hidden />
				<NavigationContainer>
					<MainStack.Navigator initialRouteName="Home">
						<MainStack.Screen
							name="Home"
							component={HomeScreen}
							options={{headerShown: false}}
						/>
						<MainStack.Screen
							name="CreatePostsScreen"
							component={CreatePostsScreen}
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
	} else {
		return (
			<>
				<StatusBar hidden />
				<NavigationContainer>
					<MainStack.Navigator initialRouteName="Login">
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
					</MainStack.Navigator>
				</NavigationContainer>
			</>
		);
	}
}

export default () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};
