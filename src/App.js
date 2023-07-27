import React, { createContext, useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ReactSwitch from 'react-switch';

const HomePage = lazy(() =>
	import('./pages/HomePage').then((module) => {
		return { default: module.HomePage };
	})
);
const AboutPage = lazy(() =>
	import('../src/pages/AboutPage').then((module) => {
		return { default: module.AboutPage };
	})
);
const MoviesPage = lazy(() =>
	import('../src/pages/MoviesPage').then((module) => {
		return { default: module.MoviesPage };
	})
);
const NewPage = lazy(() =>
	import('../src/pages/NewPage').then((module) => {
		return { default: module.NewPage };
	})
);
export const ThemeContext = createContext(null);

function App() {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<Suspense
				fallback={
					<h1
						style={{
							textAlign: 'center',
							color: theme === 'light' ? '#ffffff' : '#000000',
						}}>
						Loading...
					</h1>
				}>
				<div
					className="App"
					id={theme}>
					<div className="switcher-light-dark-mode">
						<label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
						<ReactSwitch
							className="switch"
							onChange={toggleTheme}
							checked={theme === 'dark'}
						/>
					</div>
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
						<Route
							path="/new-movies"
							element={<NewPage />}
						/>
					</Routes>
				</div>
			</Suspense>
		</ThemeContext.Provider>
	);
}

export default App;
