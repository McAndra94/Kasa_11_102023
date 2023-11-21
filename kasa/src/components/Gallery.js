import { useState } from "react";

function Gallery({ pictures }) {
	const [currentImgIndex, setCurrentImgIndex] = useState(0);

	const handlePrev = () => {
		setCurrentImgIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
		);
	};

	const handleNext = () => {
		setCurrentImgIndex((prevIndex) => (prevIndex + 1) % pictures.length);
	};

	if (!pictures || pictures.length === 0) return null;

	return (
		<div className="logSlideShow">
			<button onClick={handlePrev} className="leftChevron">
				{"<"}
			</button>
			<img src={pictures[currentImgIndex]} alt="Lodgment View" />
			<button onClick={handleNext} className="rightChevron">
				{">"}
			</button>
		</div>
	);
}

export default Gallery;
