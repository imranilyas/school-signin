import React, { useState } from "react";

import "../style/ItemComponent.css";

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
			className="student"
			style={{
				backgroundColor: clickItem && "rgb(124, 255, 124, 0.6)",
			}}
		>
			<div className="tagged"></div>
			{/* <div style={{ backgroundColor: clickItem && "blue" }}> */}
			<p>{student.firstName + " " + student.lastName}</p>
			{/* </div> */}
		</div>
	);
};

export default ItemComponent;
