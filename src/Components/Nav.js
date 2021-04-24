import React from "react";
import "../Style/Style.css";
import Moon from "../img/moon-outline.svg";
const Nav = ({ isActive, setIsActive }) => {
	const darkModeHandler = () => {
		setIsActive(!isActive);
	};
	return (
		<header>
			<div className={isActive ? "container" : "container__darkmode"}>
				<div className="logo">
					<h2>Where in the world?</h2>
				</div>
				<div className="dark_mode">
					<img
						onClick={darkModeHandler}
						className="moon"
						src={Moon}
						alt="dark-mode"
					/>
					<h2>Dark Mode</h2>
				</div>
			</div>
		</header>
	);
};

export default Nav;
