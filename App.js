import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>GoIT React Native HW app!</Text>
			<StatusBar style="light" />
		</View>
	);
}
//goIT React Native HW app!
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#537FE7",
		fontWeight: "bold",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
		color: "#fff",
	},
});
