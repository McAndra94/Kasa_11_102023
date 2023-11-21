import { useState } from "react";
import Collapse from "./Collapse";

function AboutCollapse({ data }) {
	const [openCollapse, setOpenCollapse] = useState(null);

	const handleCollapseClick = (title) => {
		if (openCollapse === title) {
			setOpenCollapse(null); // Close it
		} else {
			setOpenCollapse(title); // Open it
		}
	};

	return (
		<div className="dropdowns">
			{data.map(({ title, content }) => (
				<Collapse
					key={title}
					title={title}
					content={content}
					isOpen={openCollapse === title}
					onClick={() => handleCollapseClick(title)}
				/>
			))}
		</div>
	);
}

export default AboutCollapse;
