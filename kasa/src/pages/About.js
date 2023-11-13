import { useState } from "react";
import Banner from "../images/Banner2.png";
import Collapse from "../components/Collapse";
import "../styles/About.scss";

function About() {
	const [openCollapse, setOpenCollapse] = useState(null);

	const handleCollapseClick = (title) => {
		if (openCollapse === title) {
			setOpenCollapse(null); // Close it
		} else {
			setOpenCollapse(title); // Open it
		}
	};

	const collapseData = [
		{
			title: "Fiabilité",
			content:
				"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
		},
		{
			title: "Respect",
			content:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
		},
		{
			title: "Service",
			content:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
		},
		{
			title: "Sécurité",
			content:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
		},
	];

	return (
		<>
			<div className="banner">
				<img src={Banner} alt="Forest Mountain - Banner" />
			</div>
			<div className="dropdowns">
				{collapseData.map(({ title, content }) => (
					<Collapse
						key={title}
						title={title}
						content={content}
						isOpen={openCollapse === title}
						onClick={() => handleCollapseClick(title)}
					/>
				))}
			</div>
		</>
	);
}

export default About;
