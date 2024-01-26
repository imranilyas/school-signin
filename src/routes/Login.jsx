import React from "react";

const Login = () => {
	const submitHandler = (element) => {
		element.preventDefault();
		console.log("Submit");
	};

	return (
		<form onSubmit={submitHandler}>
			<input placeholder="Username" type="text" />
			<input placeholder="Password" type="password" />
			<input type="submit" value={"Login"} />
		</form>
	);
};

export default Login;
