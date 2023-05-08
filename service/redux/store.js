import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./auth/auth";

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
});

export default store;
