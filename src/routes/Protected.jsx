import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
	let authorized = true;
	if (authorized) {
		return children;
	} else {
		return <Navigate to="/" replace />;
	}
};

export default Protected;
