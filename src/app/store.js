import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../redux/search.slice';

const store = configureStore({
	reducer: {
		search: searchSlice,
	},
});

export default store;
