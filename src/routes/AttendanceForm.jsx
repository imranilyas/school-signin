import React from "react";
import ListComponent from "../components/ListComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deauthenticate } from "../redux/loginSlice";
import NavBar from "../components/NavBar";

const AttendanceForm = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<NavBar />
			<ListComponent />
		</div>
	);
};

export default AttendanceForm;
