import React, { useState } from "react";
import ItemComponent from "./ItemComponent";

const ListComponent = ({ list }) => {
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
