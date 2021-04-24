import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../Style/Style.css";
import FilterRegions from "../Components/FilterRegions";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../redux/RegionActions";
const Search = ({ isActive, dropDown, setDropDown }) => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);

	const inputHandler = (e) => {
		setSearch(e.target.value);
	};

	const searchHandler = (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			dispatch(fetchSearch(search));
			setLoading(false);
		} catch (error) {
			setLoading(true);
		}

		setSearch("");
	};

	return (
		<div className="filter-container">
			<div className="right-part">
				<div className={!isActive ? "input-wrapper" : "input_darkwrapper"}>
					<SearchIcon onClick={searchHandler} className="search-ico" />
					<input
						value={search}
						onChange={inputHandler}
						type="text"
						id="text"
						placeholder="Search for a country..."
					/>
				</div>
			</div>
			<div className="left-part">
				<FilterRegions
					isActive={isActive}
					dropDown={dropDown}
					setDropDown={setDropDown}
				/>
			</div>
		</div>
	);
};

export default Search;
