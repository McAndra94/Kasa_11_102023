import Cards from "../components/Lodgments";
import Banner from "../images/Banner1.png";

function Home() {
	return (
		<>
			<div className="banner">
				<img src={Banner} alt="Banner, Mountain Shore" />
				<div className="bannerText">Chez vous, partout et ailleur.</div>
			</div>
			<Cards />
		</>
	);
}

export default Home;
