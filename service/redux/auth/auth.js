import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
	name: "user",
	initialState: {
		user: null,
	},
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
		clearUser(state, action) {
			state.user = null;
		},
	},
});
export const {setUser, clearUser} = user.actions;
export default userReducer = user.reducer;
