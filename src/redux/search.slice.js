import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	movies: [],
	filteredMovies: [],
	searchTerm: '',
	isLoading: true,
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		storeProperties: (state, action) => {
			state.movies = action.payload;
			state.filteredMovies = action.payload;
			state.isLoading = action.payload.length ? false : true;
		},
		searchByName: (state, action) => {
			const filteredMovies = state.movies.filter((property) =>
				property.title
					.toLowerCase()
					.includes(action.payload.trim().toLowerCase())
			);
			return {
				...state,
				filteredMovies:
					action.payload.length > 0 ? filteredMovies : [...state.movies],
			};
		},
	},
});

export const { storeProperties, searchByName } = searchSlice.actions;
export default searchSlice.reducer;
