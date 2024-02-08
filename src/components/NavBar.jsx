import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deauthenticate } from "../redux/loginSlice";
import "../style/NavBar.css";

const NavBar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logoutHandler = (e) => {
		e.preventDefault();
		dispatch(deauthenticate());
		navigate("/");
	};

	return (
		<div className="navbar-container">
			<div className="nav-header">
				<h1>Islamic Center of South Bay Weekend School</h1>
			</div>
			<div className="nav-link">
				<div style={{ alignSelf: "center" }}>
					<button id="btn" onClick={logoutHandler}>
						Log Out
					</button>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
