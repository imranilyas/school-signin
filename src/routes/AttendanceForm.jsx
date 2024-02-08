import React from "react";
import ListComponent from "../components/ListComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deauthenticate } from "../redux/loginSlice";
import NavBar from "../components/NavBar";

const AttendanceForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logoutHandler = (e) => {
		e.preventDefault();
		dispatch(deauthenticate());
		navigate("/");
	};

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<NavBar />
			<button onClick={logoutHandler}>Log Out</button>
			<ListComponent />
		</div>
	);
};

export default AttendanceForm;
