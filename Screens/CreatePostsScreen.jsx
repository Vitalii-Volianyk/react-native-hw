import {Ionicons} from "@expo/vector-icons";
import {
	Text,
	View,
	Image,
	StyleSheet,
	Pressable,
	TextInput,
} from "react-native";
import {useSelector} from "react-redux";

const CreatePostsScreen = () => {
	const {user} = useSelector(state => state.user);
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					style={styles.avatar}
					source={{
						uri: user.avatar,
					}}
				/>
				<Pressable style={styles.button}>
					<Ionicons name="ios-camera" size={24} color="black" />
				</Pressable>
				<Text style={styles.text}>Додайте фото</Text>
			</View>

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Назва..."
					multiline={false}
				/>
				<View style={styles.inputContainer}>
					<Ionicons name="location-outline" size={24} color="black" />
					<TextInput
						style={styles.input}
						placeholder="Місцевість..."
						multiline={false}
					/>
				</View>
			</View>

			<Pressable style={styles.button}>
				<Text style={styles.text}>Опублікувати</Text>
			</Pressable>
			<Pressable style={styles.delete}>
				<Ionicons name="trash-outline" size={24} color="#BDBDBD" />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 16,
		marginVertical: 32,
	},
	delete: {
		position: "absolute",
		bottom: 0,
		right: "50%",
		transform: [{translateX: 35}],
		paddingHorizontal: 23,
		paddingVertical: 8,
		borderRadius: 20,
		color: "#BDBDBD",
		backgroundColor: "#F6F6F6",
		borderColor: "#BDBDBD",
		borderWidth: 1,
		alignSelf: "center",
	},
});

export default CreatePostsScreen;
