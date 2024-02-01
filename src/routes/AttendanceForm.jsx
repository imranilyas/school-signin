import React from "react";
import ListComponent from "../components/ListComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deauthenticate } from "../redux/loginSlice";

const AttendanceForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logoutHandler = (e) => {
		e.preventDefault();
		dispatch(deauthenticate());
		navigate("/");
	};

	return (
		<div>
			<button onClick={logoutHandler}>Log Out</button>
			<ListComponent />
		</div>
	);
};

export default AttendanceForm;
