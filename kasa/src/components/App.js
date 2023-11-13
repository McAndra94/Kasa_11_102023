import React from "react";
import AppRoutes from "../AppRoutes";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/App.scss";
import "../styles/Index.scss";

function App() {
	return (
		<>
			<Header />
			<div className="App">
				<AppRoutes />
			</div>
			<Footer />
		</>
	);
}

export default App;
