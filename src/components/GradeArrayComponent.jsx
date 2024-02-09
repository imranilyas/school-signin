import React, { useState } from "react";
import ListComponent from "./ListComponent";

const GradeArrayComponent = ({ list }) => {
	let grade12 = list.filter((student) => student.grade < 3);
	let grade34 = list.filter(
		(student) => student.grade > 2 && student.grade < 5
	);
	let grade56 = list.filter(
		(student) => student.grade > 4 && student.grade < 7
	);
	let grade78 = list.filter((student) => student.grade > 6);

	const [selected, setSelected] = useState([]);

	const addRemoveHandler = (student) => {
		if (selected.findIndex((s) => s === student) === -1) {
			setSelected((prev) => [...prev, student]);
		} else {
			setSelected((prev) => prev.filter((s) => s !== student));
		}
	};

	const printList = () => {
		console.log(selected);
	};

	return (
		<>
			<ListComponent
				list={grade12}
				addRemoveHandler={addRemoveHandler}
				grade={"1-2"}
			/>
			<ListComponent
				list={grade34}
				addRemoveHandler={addRemoveHandler}
				grade={"3-4"}
			/>
			<ListComponent
				list={grade56}
				addRemoveHandler={addRemoveHandler}
				grade={"5-6"}
			/>
			<ListComponent
				list={grade78}
				addRemoveHandler={addRemoveHandler}
				grade={"7-8"}
			/>
			<button onClick={printList}>Print</button>
		</>
	);
};

export default GradeArrayComponent;
