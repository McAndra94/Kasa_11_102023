import { Link } from "react-router-dom";
import Lodgments from "../data/logements.json";
import "../styles/Lodgments.scss";

function Cards() {
	return (
		<div className="cardsContainer">
			{Lodgments.map((item) => (
				<article key={item.id} className="card">
					<Link to={`/${item.id}`} className="cardLink">
						<div className="imgContainer">
							<img src={item.cover} alt={item.title} />
							<span className="cardTitle">{item.title}</span>
						</div>
					</Link>
				</article>
			))}
		</div>
	);
}

export default Cards;
