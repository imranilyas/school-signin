import React, { useState } from "react";
import ItemComponent from "./ItemComponent";

const ListComponent = () => {
	const list = ["Something", "Something else"];
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
			<div style={{ backgroundColor: "red" }}>
				<p>Something dumb</p>
			</div>
			<div>
				{list.map((element) => (
					<ItemComponent
						key={element}
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
