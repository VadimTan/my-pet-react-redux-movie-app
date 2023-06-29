import React from 'react';

export const Modal = ({ active, setActive, children }) => {
	if (!active) return null;
	return (
		<div className="modal__overlay">
			<div
				className="modal"
				onClick={() => setActive(false)}>
				<div
					className="modal__content"
					onClick={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>
		</div>
	);
};
