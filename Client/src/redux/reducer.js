// import * as actionType from "./actionTypes.js";
// import * as viewCaption from "../views/viewCaptions.js";

const initialState = {
	// // Initial Catalogs
	// allGames: [],
	// allGenres: [],
	// allPlatforms: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		// case actionType.APPLY_FILTERING:
		// 	return { ...state,
		// 		gamesWithOptions: action.payload,
		// 		filteringOptions: { ...state.filteringOptions,
		// 			changed: false } }

		default:
			return { ...state };
	};
};

export default rootReducer;