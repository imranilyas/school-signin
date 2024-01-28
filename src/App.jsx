import React from "react";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./routes/Login";
import Protected from "./routes/Protected";
import AttendanceForm from "./routes/AttendanceForm";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/sign-in",
			element: (
				<Protected>
					<AttendanceForm />
				</Protected>
			),
		},
	]);

	return (
		<>
			{/* <div>
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
			</div> */}
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</>
	);
}

export default App;
