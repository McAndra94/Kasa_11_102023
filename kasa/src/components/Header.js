import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/Kasa.png";
import "../styles/Header.scss";

function Header() {
	return (
		<header>
			<div>
				<Link to="/home">
					<img src={logo} alt="Kasa logo" />
				</Link>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink to="/home" activeClassName="active">
							Accueil
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" activeClassName="active">
							A Propos
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
