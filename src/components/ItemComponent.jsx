import React, { useState } from "react";

const ItemComponent = ({ student, toList }) => {
	const [clickItem, setClickItem] = useState(false);

	const clickStudentHandler = () => {
		!clickItem ? setClickItem(true) : setClickItem(false);
		console.log(student);
		toList(student);
	};

	return (
		<div
			onClick={clickStudentHandler}
			style={{
				display: "flex",
				flexDirection: "row",
				cursor: "pointer",
			}}
		>
			<div style={{ backgroundColor: clickItem && "blue" }}>
				{student}
			</div>
		</div>
	);
};

export default ItemComponent;
