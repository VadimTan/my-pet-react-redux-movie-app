import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from '../features/counter/SearcherSlice';

export const store = configureStore({
	reducer: {
		search: searchReducer,
	},
});
