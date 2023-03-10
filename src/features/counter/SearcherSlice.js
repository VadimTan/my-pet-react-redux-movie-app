import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from './fetchMovies';

const initialState = {
	searchTerm: '',
	movies: [],
	filteredMovies: [],
	error: null,
	isLoading: true,
};

export const fetchFilms = createAsyncThunk('counter/fetchMovies', async () => {
	try {
		const { movies, refetch } = fetchMovies();
		return movies; // Dispatch action to update movies in state
	} catch (error) {
		return fetchFilms.rejected(error);
	}
});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const Searcher = createSlice({
	name: 'searchText',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		moviesSuccess: (state, action) => {
			state.movies = action.payload;
			state.isLoading = false;
			return {
				movies: action.payload,
				filteredMovies: [...action.payload],
				isLoading: false,
			};
		},
		searchByMovies: (state, action) => {
			const filteredMovies = state.movies.filter((movie) =>
				movie.title.toLowerCase().includes(action.payload.toLowerCase())
			);
			return {
				...state,
				filteredMovies:
					action.payload.length > 0 ? filteredMovies : [...state.movies],
			};
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
	},
	// The `extraReducers` field lets the slice handle actions defined elsewhere,
	// including actions generated by createAsyncThunk or in other slices.
	extraReducers: (builder) => {
		builder
			.addCase(fetchFilms.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchFilms.fulfilled, (state, action) => {
				state.isLoading = false;
				state.movies = action.payload;
				state.filteredMovies = action.payload;
			})
			.addCase(fetchFilms.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error;
			});
	},
});

export const { searchByMovies, moviesSuccess } = Searcher.actions;

export const searchReducer = Searcher.reducer;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can als be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const filteredMovies = (state) => state.filteredMovies;
export const selectSearch = (state) => state.searchTerm;
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
