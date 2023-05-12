import {Pressable, View, Text, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {logoutUser} from "../service/firebase";

const LogoTitle = ({text, logout, back}) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			{back && (
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("Home")}
				>
					<Ionicons name="ios-arrow-back" size={24} color="black" />
				</Pressable>
			)}
			<Text style={styles.title}>{text}</Text>
			{logout && (
				<Pressable
					style={styles.button}
					onPress={async () => {
						await logoutUser();
						navigation.navigate("Login");
					}}
				>
					<Ionicons name="log-out-outline" size={24} color="black" />
				</Pressable>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		minWidth: "100%",
		marginHorizontal: -15,
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
	},
	title: {
		flex: 1,
		fontSize: 17,
		lineHeight: 22,
		fontFamily: "Roboto",
		textAlign: "center",
	},
	button: {
		padding: 3,
	},
});

export default LogoTitle;
