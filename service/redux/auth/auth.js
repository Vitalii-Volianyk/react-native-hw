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
	},
});
export const {setUser} = user.actions;
export default userReducer = user.reducer;
