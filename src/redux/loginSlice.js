import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
	name: "login",
	initialState: false,
	reducers: {
		authenticate(state) {
			state = true;
		},

		deauthenticate(state) {
			state = false;
		},
	},
});

export const { authenticate, deauthenticate } = loginSlice.actions;
export default loginSlice.reducer;
