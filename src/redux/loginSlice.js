import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
	name: "login",
	initialState: { authorized: false },
	reducers: {
		authenticate(state) {
			state.authorized = true;
		},

		deauthenticate(state) {
			state.authorized = false;
		},
	},
});

export const { authenticate, deauthenticate } = loginSlice.actions;
export default loginSlice.reducer;
