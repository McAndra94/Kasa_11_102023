import { Link, NavLink } from "react-router-dom";
import logo from "../images/Kasa.png";

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
						<NavLink to="/home" activeclassname="active">
							Accueil
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" activeclassname="active">
							A Propos
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
