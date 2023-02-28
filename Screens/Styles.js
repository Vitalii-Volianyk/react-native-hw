import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		justifyContent: "flex-end",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingTop: 92,
		backgroundColor: "#fff",
	},
	thumb: {
		width: 120,
		height: 120,
		backgroundColor: "#E8E8E8",
		position: "absolute",
		top: -60,
		left: "50%",
		transform: [{ translateX: -60 }],
		borderRadius: 10,
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		padding: 10,
		margin: 16,
		boxSize: "border-box",
		backgroundColor: "#E8E8E8",
		borderRadius: 5,
	},
});
