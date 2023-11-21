function Collapse({ title, content, isOpen, onClick }) {
	return (
		<div className="dropdownBox">
			<div className="dropdownTitle" onClick={onClick}>
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
