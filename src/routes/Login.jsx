import React, { useState } from "react";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const submitHandler = (element) => {
		element.preventDefault();
		console.log(`Username: ${username} Password: ${password} Submit`);
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				placeholder="Username"
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				placeholder="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<input type="submit" value={"Login"} />
		</form>
	);
};

export default Login;
