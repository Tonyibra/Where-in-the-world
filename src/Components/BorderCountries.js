import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const BorderCountries = () => {
	const { details } = useSelector((state) => state.RegionReducer);
	return (
		<div className="btn-wrapper">
			{Object.keys(details).length > 0 ? (
				details.data[0].borders.map((borders, index) => (
					<button>{borders}</button>
				))
			) : (
				<h1>ERROR</h1>
			)}
		</div>
	);
};

export default BorderCountries;
