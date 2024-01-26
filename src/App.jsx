import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListComponent from "./components/ListComponent";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <ListComponent />,
		},
	]);

	return (
		<>
			{/* <ListComponent /> */}
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
