import {
	Text,
	View,
	Image,
	StyleSheet,
	ScrollView,
	ImageBackground,
} from "react-native";
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
	commentsCount: 2,
	likesCount: 10,
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

const ProfileScreen = () => {
	const {user} = useSelector(state => state.user);
	return (
		<>
			<ScrollView>
				<ImageBackground
					source={{
						uri: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
					}}
					style={{
						width: "100%",
						height: 200,
						position: "absolute",
						top: 0,
						left: 0,
						zIndex: -1,
					}}
				/>
				<View style={styles.container}>
					<Image
						source={{
							uri: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
						}}
						style={styles.image}
					/>
					<View style={styles.textcontainer}>
						<Text style={styles.title}>{user.displayName}</Text>
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
		alignItems: "center",
		marginTop: 147,

		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		backgroundColor: "#fff",
	},
	textcontainer: {
		height: 60,
		flex: 1,
		paddingTop: 16,
		marginLeft: 8,
	},
	title: {
		fontSize: 30,
		lineHeight: 35,
	},
	subtitle: {
		fontSize: 13,
		lineHeight: 16,
		color: "#212121CC",
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 16,
		marginBottom: 32,

		marginTop: -60,
	},
});

export default ProfileScreen;
