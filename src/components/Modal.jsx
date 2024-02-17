import React from "react";

const Modal = ({ closeModal }) => {
	return (
		<div className="modalContainer">
			<p>Are you sure you would like to submit the students</p>
			<div className="modalButtonContainer">
				<button onClick={closeModal}>Nope</button>
				<button onClick={closeModal}>Confirm</button>
			</div>
		</div>
	);
};

export default Modal;
