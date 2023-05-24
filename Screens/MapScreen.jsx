
import MapView, {Marker} from "react-native-maps";

const MapScreen = () => {
	return (
		<MapView
			style={styles.mapStyle}
			region={{
				...location,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
			showsUserLocation={true}
		>
			{location && (
				<Marker
					title="I am here"
					coordinate={location}
					description="Hello"
				/>
			)}
		</MapView>
	);
};

export default MapScreen;
