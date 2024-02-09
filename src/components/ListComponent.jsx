import React, { useState } from "react";
import ItemComponent from "./ItemComponent";

const ListComponent = ({ list, addRemoveHandler, grade }) => {
	return (
		<>
			<div>
				<p>Grade: {grade}</p>
			</div>
			<div style={{ display: "flex", flexDirection: "row" }}>
				{list.map((element) => (
					<ItemComponent
						key={element.studentId}
						student={element}
						toList={addRemoveHandler}
					/>
				))}
			</div>
		</>
	);
};

export default ListComponent;
