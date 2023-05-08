import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileScreen from "./ProfileScreen.jsx";
import PostsScreen from "./CreatePostsScreen.jsx";
import CreatePostsScreen from "./CreatePostsScreen.jsx";
import LogoTitle from "../components/LogoTitle.jsx";
import {Ionicons} from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const tabIcon = (focused, color, size) => {
	return <Ionicons name="add-sharp" size={size} color={color} />;
};

const HomeScreen = () => {
	return (
		<>
			<Tab.Navigator
				initialRouteName="PostsScreen"
				backBehavior="initialRoute"
				screenOptions={({route}) => ({
					tabBarActiveTintColor: "tomato",
					tabBarInactiveTintColor: "gray",
					tabBarShowLabel: false,
					tabBarIcon: ({focused, color, size}) => {
						let iconName;
						let iconStyle = {};
						if (route.name === "PostsScreen") {
							iconName = focused
								? "grid-outline"
								: "grid-outline";
						} else if (route.name === "CreatePostsScreen") {
							iconStyle = {
								backgroundColor: "tomato",
								color: "white",
								borderRadius: 50,
								paddingVertical: 5,
								paddingHorizontal: 15,
							};
							iconName = focused ? "add" : "add";
						} else {
							iconName = focused
								? "person-outline"
								: "person-outline";
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
				})}
			>
				<Tab.Screen
					options={{
						headerTitle: props => (
							<LogoTitle {...props} logout={true} text="Posts" />
						),
					}}
					tabBarIcon={tabIcon}
					name="PostsScreen"
					component={PostsScreen}
				/>

				<Tab.Screen
					options={{
						headerTitle: props => (
							<LogoTitle
								{...props}
								back={true}
								text="Create Posts Screen"
							/>
						),
					}}
					name="CreatePostsScreen"
					component={CreatePostsScreen}
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
