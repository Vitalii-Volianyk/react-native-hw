import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import ProfileScreen from "./ProfileScreen.jsx";
import PostsScreen from "./PostsScreen.jsx";
import LogoTitle from "../components/LogoTitle.jsx";
import {Ionicons} from "@expo/vector-icons";

const HomeScreen = () => {
	const screenOption = ({route}) => ({
		tabBarActiveTintColor: "tomato",
		tabBarInactiveTintColor: "gray",
		tabBarShowLabel: false,

		tabBarIcon: ({focused, color, size}) => {
			let iconName;
			let iconStyle = {};
			if (route.name === "PostsScreen") {
				iconName = focused ? "grid-outline" : "grid-outline";
			} else if (route.name === "CreatePosts") {
				iconStyle = focused
					? {
							color: "gray",

							paddingVertical: 5,
							paddingHorizontal: 15,
					  }
					: {
							backgroundColor: "tomato",
							color: "white",
							borderRadius: 50,
							paddingVertical: 5,
							paddingHorizontal: 15,
					  };
				iconName = focused ? "trash-outline" : "add";
			} else {
				iconName = focused ? "person-outline" : "person-outline";
			}
			return (
				<Ionicons
					name={iconName}
					size={size}
					color={color}
					style={iconStyle}
				/>
			);
		},
	});
	const Tab = createBottomTabNavigator();
	return (
		<>
			<Tab.Navigator
				initialRouteName="PostsScreen"
				backBehavior="initialRoute"
				screenOptions={screenOption}
			>
				<Tab.Screen
					options={{
						headerTitle: props => (
							<LogoTitle
								{...props}
								logout={true}
								text="Публікації"
							/>
						),
					}}
					name="PostsScreen"
					component={PostsScreen}
				/>
				<Tab.Screen
					name="CreatePosts"
					options={{
						headerShown: false,
					}}
					listeners={({navigation}) => ({
						tabPress: event => {
							event.preventDefault();
							navigation.navigate("CreatePostsScreen");
						},
					})}
					component={PostsScreen}
				/>

				<Tab.Screen
					name="ProfileScreen"
					options={{headerShown: false}}
					component={ProfileScreen}
				/>
			</Tab.Navigator>
		</>
	);
};

export default HomeScreen;
