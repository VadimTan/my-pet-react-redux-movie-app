import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MoviesPage } from './pages/MoviesPage';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<HomePage />}
			/>
			<Route
				path="/movies"
				element={<MoviesPage />}
			/>
			<Route
				path="/about"
				element={<AboutPage />}
			/>
		</Routes>
	);
}

export default App;
