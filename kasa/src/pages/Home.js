import Cards from "../components/Lodgments";
import Banner from "../images/Banner1.png";

function Home() {
	return (
		<>
			<div className="banner">
				<img
					src={Banner}
					alt="Chez vous, partout et ailleur. Banner, Mountain Shore"
				/>
			</div>
			<Cards />
		</>
	);
}

export default Home;
