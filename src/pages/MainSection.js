import React from "react";
import Search from "../Components/Search";
import "../Style/Style.css";
import { useSelector } from "react-redux";
import CardList from "../Components/CardList";
const MainSection = ({
	loading,
	setLoading,
	isActive,
	dropDown,
	setDropDown,
}) => {
	const { info } = useSelector((state) => state.RegionReducer);

	return (
		<section className={isActive ? "main__section" : "dark__mainSection"}>
			<Search
				isActive={isActive}
				dropDown={dropDown}
				setDropDown={setDropDown}
			/>
			<CardList isActive={isActive} loading={loading} />
		</section>
	);
};

export default MainSection;
