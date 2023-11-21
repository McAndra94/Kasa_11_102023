import AppRoutes from "../AppRoutes";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Index.scss";
import "../styles/Header.scss";
import "../styles/Footer.scss";
import "../styles/About.scss";
import "../styles/Gallery.scss";
import "../styles/Home.scss";
import "../styles/Lodgments.scss";

function App() {
	return (
		<>
			<div className="mainContainer">
				<Header />
				<div className="App">
					<AppRoutes />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
