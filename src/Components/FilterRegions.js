import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const FilterRegions = ({ isActive, dropDown, setDropDown }) => {
	const dropDownHandler = () => {
		setDropDown(!dropDown);
		console.log("isActive", isActive);
	};
	return (
		<div class={!isActive ? "filer-wrapper" : "filter-darkwrapper"}>
			<div className="title">
				<span>Filter by Region</span>
				<ExpandMoreIcon onClick={dropDownHandler} className="dropdown-arrow" />
			</div>
			<div
				className={
					dropDown && !isActive
						? "dropdown-wrapper "
						: dropDown && isActive
						? "dropdown-Darkwrapper"
						: "hidden__Listwrapper"
				}
			>
				<ul>
					<li>Africa</li>
					<li>America</li>
					<li>Asia</li>
					<li>Europe</li>
					<li>Oceania</li>
				</ul>
			</div>
		</div>
	);
};

export default FilterRegions;
