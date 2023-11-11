import React from "react";
import banner from "../images/Banner.png";

function About() {
	return (
		<div>
			<div className="headerLogo">
				<img src={banner} alt="banner" />
			</div>
			<div class="dropdowns">
				<h2>Fiabilité</h2>
				<h2>About</h2>
				<h2>Services</h2>
				<h2>Contact</h2>
			</div>
		</div>
	);
}

export default About;
