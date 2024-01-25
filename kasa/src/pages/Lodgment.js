import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import Collapse from "../components/Collapse";
import Lodgments from "../data/logements.json";

function Lodgment() {
	const { id } = useParams();
	// lodging current value, setLodging for updating the lodging
	const [lodging, setLodging] = useState(null);
	const [openCollapse, setOpenCollapse] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const oneLodging = Lodgments.find((lodgment) => lodgment.id === id);
		if (oneLodging) {
			setLodging(oneLodging);
		} else {
			navigate("/NotFound");
		}
	}, [id, navigate]);

	if (!lodging) {
		return null;
	}

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
		host: { name, picture },
		rating,
		location,
		tags,
	} = lodging;

	const handleCollapseClick = (collapseName) => {
		if (openCollapse === collapseName) {
			setOpenCollapse(null); // Close it
		} else {
			setOpenCollapse(collapseName); // Open it
		}
	};

	const equipmentsList = (
		<ul>
			{lodging.equipments.map((equipment, index) => (
				<li key={index}>{equipment}</li>
			))}
		</ul>
	);

	return (
		<>
			<Gallery pictures={pictures} />
			<div className="lodgment">
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
					<div className="logRating">{ratingStars(rating)}</div>
				</div>
				<div className="dropdownList">
					{/* Description collapse */}
					<div className="logDescription">
						<Collapse
							title="Description"
							content={lodging.description}
							isOpen={openCollapse === "description"}
							onClick={() => handleCollapseClick("description")}
						/>
					</div>

					{/* Equipments collapse */}
					<div className="logEquipments">
						<Collapse
							title="Equipments"
							content={equipmentsList}
							isOpen={openCollapse === "equipments"}
							onClick={() => handleCollapseClick("equipments")}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Lodgment;
