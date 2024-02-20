import React from "react";
import "../style/Modal.css";

const Modal = ({ closeModal }) => {
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="xBtn">
					<button onClick={closeModal}>X</button>
				</div>
				<div className="modalTitle">
					<h1>Are you sure you want to continue?</h1>
				</div>

				<div className="modalBody">
					<p>
						Once submitted, the checked students will be confirmed
						as having attended school today
					</p>
				</div>

				<div className="modalButtonContainer">
					<button id="cancelBtn" onClick={closeModal}>
						Nope
					</button>
					<button onClick={closeModal}>Confirm</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
