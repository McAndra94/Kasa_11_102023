import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="notFound">
			<h1>404</h1>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/">
				<span className="homeLink">Retourner sur la page d'accueil</span>
			</Link>
		</div>
	);
}

export default NotFound;
