import {useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
const StrictScreen = () => {
	const {user} = useSelector(state => state.user);
	const navigation = useNavigation();
	if (!user) {
		return navigation.navigate("Login");
	} else {
		return navigation.navigate("Home");
	}
};

export default StrictScreen;
