import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import "../Style/Style.css";
const CardList = ({ loading, isActive }) => {
	const { info } = useSelector((state) => state.RegionReducer);

	return (
		<div className="cards-list">
			{Object.keys(info).length > 0 ? (
				info.data.map((data, index) => (
					<Card isActive={isActive} loading={loading} index={index} />
				))
			) : (
				<CircularProgress />
			)}
		</div>
	);
};

export default CardList;
