import React, { useState } from "react";

function Collapse({ title, content, onClick }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
		if (onClick) onClick();
	};

	return (
		<div className="dropdownBox">
			<div className="dropdownTitle" onClick={handleToggle}>
				<h2>{title}</h2>
				{isOpen ? (
					<i className="fa-solid fa-chevron-up"></i>
				) : (
					<i className="fa-solid fa-chevron-down"></i>
				)}
			</div>
			{isOpen && (
				<div className="dropdownContent">
					<p>{content}</p>
				</div>
			)}
		</div>
	);
}

export default Collapse;
