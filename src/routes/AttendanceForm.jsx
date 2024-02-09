import React, { useState } from "react";
import ListComponent from "../components/ListComponent";
import NavBar from "../components/NavBar";
import Filter from "../components/Filter";
import GradeArrayComponent from "../components/GradeArrayComponent";

const AttendanceForm = () => {
	let list = [
		{ studentId: 1, firstName: "Joe", lastName: "Dumars", grade: 6 },
		{ studentId: 2, firstName: "Mike", lastName: "Millers", grade: 6 },
		{ studentId: 3, firstName: "Joe", lastName: "Johnson", grade: 6 },
		{ studentId: 4, firstName: "Austin", lastName: "Rivers", grade: 7 },
		{ studentId: 5, firstName: "Smush", lastName: "Parker", grade: 1 },
		{ studentId: 6, firstName: "Jordan", lastName: "Crawford", grade: 1 },
		{ studentId: 7, firstName: "Scottie", lastName: "Barns", grade: 4 },
		{ studentId: 8, firstName: "Wesley", lastName: "Johnson", grade: 5 },
		{ studentId: 9, firstName: "Moe", lastName: "Williams", grade: 3 },
		{ studentId: 10, firstName: "Isiah", lastName: "Stewart", grade: 2 },
		{ studentId: 11, firstName: "Ishmael", lastName: "Smith", grade: 3 },
	];

	// const filtering = (student) => {
	// 	if (student.grade !== 6) {
	// 		return true;
	// 	}
	// 	return false;
	// };

	// const filterHandler = () => {
	// 	let arr = list.filter(filtering);
	// 	console.log(arr);
	// };

	// filterHandler();

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<NavBar />
			<Filter />
			<GradeArrayComponent list={list} />
		</div>
	);
};

export default AttendanceForm;
