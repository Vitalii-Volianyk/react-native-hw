import {Text, Image, StyleSheet, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const PostItem = ({post}) => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: post.image,
				}}
				style={styles.image}
			/>
			<Text style={styles.title}>{post.title}</Text>
			<View style={styles.textcontainer}>
				<View style={styles.subcontainer}>
					<Ionicons
						style={styles.icon}
						name="chatbubble"
						size={20}
						color={post.commentsCount > 0 ? "#FF6C00" : "#BDBDBD"}
					/>
					<Text style={styles.subtitle}>{post.commentsCount}</Text>
					<Ionicons
						name="heart"
						style={styles.icon}
						size={20}
						color={post.likesCount > 0 ? "#FF6C00" : "#BDBDBD"}
					/>
					<Text style={styles.subtitle}>{post.likesCount}</Text>
				</View>
				<View style={styles.loccontainer}>
					<Ionicons
						style={styles.icon}
						name="location"
						size={20}
						color="#FF6C00"
					/>
					<Text style={styles.location}>{post.location}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		marginHorizontal: 16,
		marginVertical: 32,
	},
	textcontainer: {
		flex: 1,
		flexDirection: "row",
		padding: 5,
		justifyContent: "space-between",
		alignItems: "center",
		height: 40,
	},
	title: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: "500",
		color: "#212121",
	},
	subtitle: {
		fontSize: 16,
		lineHeight: 20,
		color: "#212121",
		marginRight: 24,
	},
	location: {
		fontSize: 16,
		lineHeight: 20,
		color: "#212121",
		textDecorationLine: "underline",
	},
	image: {
		width: "auto",
		height: 240,
		borderRadius: 16,
	},
	icon: {
		marginRight: 8,
	},
	subcontainer: {
		flex: 1,
		flexDirection: "row",
	},
	loccontainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
	},
});

export default PostItem;
