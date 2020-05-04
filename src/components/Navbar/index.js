import React from 'react';
import './style.css';

function Navbar(props) {
	return (
		<nav class="navbar">
			<ul>
				<li>
					<a class="navbar-brand" href="/">
						Clicky Game
					</a>
				</li>
				{props.children}
			</ul>
		</nav>
	);
}

export default Navbar;
