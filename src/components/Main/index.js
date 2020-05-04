import React from 'react';
import './style.css';

function Main(props) {
	return (
		<div
			className="main"
			role="img"
			ariaLabel="click item"
			class="click-item"
			style={{ backgroundImage: `url("${props.image}")` }}
		/>
	);
}

export default Main;
