import axios from "axios";
export const fetchRegions = () => async (dispatch) => {
	const url = "https://restcountries.eu/rest/v2/all";
	const response = await axios.get(url);

	dispatch({ type: "GET_DATA", payload: response });
};
export const fetchDetails = (countryName) => async (dispatch) => {
	const url = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`;
	const res = await axios.get(url);
	dispatch({ type: "GET_DETAILS", payload: res });
};
export const fetchSearch = (countryName) => async (dispatch) => {
	const url = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`;
	const res = await axios.get(url);
	dispatch({ type: "GET_SEARCH_COUNTRY", payload: res });
};
