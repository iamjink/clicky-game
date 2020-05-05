import React from 'react';
import './style.css';

function Navbar(props) {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<a className="navbar-brand" href="/">
						Clicky Game
					</a>
				</li>
				{props.children}
			</ul>
		</nav>
	);
}

export default Navbar;
