import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Lodgments from "../data/logements.json";
import "../styles/Lodgments.scss";

function Lodgment() {
	const { id } = useParams();
	const [lodging, setLodging] = useState(null);
	const [currentImgIndex, setCurrentImgIndex] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		const oneLodging = Lodgments.find((item) => item.id === id);
		if (oneLodging) {
			setLodging(oneLodging);
		} else {
			navigate("/NotFound");
		}
	}, [id, navigate]);

	if (!lodging) {
		return null;
	}

	const handlePrev = () => {
		setCurrentImgIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
		);
	};

	const handleNext = () => {
		setCurrentImgIndex((prevIndex) => (prevIndex + 1) % pictures.length);
	};

	const ratingStars = (rating) => {
		let stars = [];
		// Red stars for rating
		for (let i = 0; i < rating; i++) {
			stars.push(
				<span key={`red-${i}`} className="star red">
					★
				</span>
			);
		}
		// Gray stars for the remaining, if any
		for (let i = rating; i < 5; i++) {
			stars.push(
				<span key={`gray-${i}`} className="star gray">
					★
				</span>
			);
		}
		return stars;
	};

	const {
		title,
		pictures,
		description,
		host: { name, picture },
		rating,
		location,
		equipments,
		tags,
	} = lodging;

	return (
		<div className="lodgment">
			<div className="logImgSlider">
				<button onClick={handlePrev} className="leftChevron">
					{"<"}
				</button>
				<img src={pictures[currentImgIndex]} alt={title} />
				<button onClick={handleNext} className="rightChevron">
					{">"}
				</button>
			</div>
			<div className="logMain">
				<div>
					<h1>{title}</h1>
					<p className="logLocation">{location}</p>
				</div>
				<div className="logHost">
					<p className="hostName">{name}</p>
					<img src={picture} alt={`Host: ${name}`} />
				</div>
			</div>

			<div className="logSub">
				<div className="logTags">
					{tags.map((tag, index) => (
						<span key={index} className="tag">
							{tag}
						</span>
					))}
				</div>
				<div>
					<p className="logRating">{ratingStars(rating)}</p>
				</div>
			</div>
			<div className="dropdownList">
				<div className="logDescription">
					<h2>Description</h2>
					<p>{description}</p>
				</div>
				<div className="logEquipments">
					<h2>Equipments</h2>
					<ul>
						{equipments.map((equipment, index) => (
							<li key={index}>{equipment}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Lodgment;
