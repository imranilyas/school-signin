import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
	const authorized = useSelector((state) => state.login.authorized);

	if (authorized) {
		return children;
	} else {
		return <Navigate to="/" replace />;
	}
};

export default Protected;
