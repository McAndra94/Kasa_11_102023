import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Kasa.png";
import "../styles/Header.css";

function Header() {
	return (
		<header>
			<div className="headerLogo">
				<img src={logo} alt="logo" />
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/home">Accueil</Link>
					</li>
					<li>
						<Link to="/about">A Propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
