import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../redux/loginSlice";
import { useNavigate } from "react-router-dom";

import "../style/Login.css";

const Login = () => {
	const authenticated = useSelector((state) => state.login.authorized);
	const dispatch = useDispatch();
	const navigation = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	let correct = { username: "dev", password: "pass" };

	const submitHandler = (element) => {
		element.preventDefault();
		console.log(`Username: ${username} Password: ${password} Submit`);
		if (username === correct.username && password === correct.password) {
			console.log(authenticated);
			dispatch(authenticate());
			navigation("/sign-in");
		}
	};

	return (
		<form onSubmit={submitHandler} className="loginForm">
			<input
				placeholder="Username"
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				className="loginInput"
			/>
			<input
				placeholder="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className="loginInput"
			/>
			<input type="submit" value={"Login"} className="loginInput" />
		</form>
	);
};

export default Login;
