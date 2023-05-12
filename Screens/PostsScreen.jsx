import {Text, View, Image, StyleSheet, ScrollView} from "react-native";
import {useSelector} from "react-redux";
import PostItem from "../components/PostItem";

const post = {
	id: "1",
	user: {
		image: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
		name: "John Doe",
	},
	postedAt: "2020-09-04T08:30:00.000Z",
	likesCount: 10,
	commentsCount: 0,
	likesCount: 0,
	comments: [
		{
			id: "1",
			user: {
				image: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
				name: "Jane Doe",
			},
			comment: "This is a comment",
		},
		{
			id: "2",
			user: {
				image: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
				name: "Jane Doe",
			},
			comment: "This is another comment",
		},
	],
	image: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",

	title: "This is a post",
	location: "New York",
};

const PostsScreen = () => {
	const {user} = useSelector(state => state.user);
	return (
		<>
			<ScrollView>
				<View style={styles.container}>
					<Image
						source={{
							uri: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
						}}
						style={styles.image}
					/>
					<View style={styles.textcontainer}>
						<Text style={styles.title}>{user.displayName}</Text>
						<Text style={styles.subtitle}>{user.email}</Text>
					</View>
				</View>
				<PostItem post={post} />
				<PostItem post={post} />
				<PostItem post={post} />
				<PostItem post={post} />
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		marginHorizontal: 16,
		marginTop: 32,
		marginBottom: 3,
	},
	textcontainer: {
		height: 60,
		flex: 1,
		paddingTop: 16,
		marginLeft: 8,
	},
	title: {
		fontSize: 13,
		lineHeight: 16,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 13,
		lineHeight: 16,
		color: "#212121CC",
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 16,
	},
});

export default PostsScreen;
