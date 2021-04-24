const initialSate = { info: [], details: {} };

const RegionReducer = (state = initialSate, action) => {
	switch (action.type) {
		case "GET_DATA_REQ":
			return {
				...state,
			};
		case "GET_DATA":
			return {
				...state,
				info: action.payload,
			};
		case "GET_DETAILS":
			return {
				...state,
				details: action.payload,
			};
		case "GET_SEARCH_COUNTRY":
			return {
				details: action.payload,
				info: action.payload,
			};
		default:
			return state;
	}
};
export default RegionReducer;
