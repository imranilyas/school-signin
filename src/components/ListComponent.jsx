import React, { useState } from "react";
import ItemComponent from "./ItemComponent";

const ListComponent = () => {
	const list = [
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
			<div>
				<p>Students</p>
			</div>
			<div>
				{list.map((element) => (
					<ItemComponent
						key={element.studentId}
						student={element}
						toList={addRemoveHandler}
					/>
				))}
			</div>
			<button onClick={printList}>Print</button>
		</>
	);
};

export default ListComponent;
