import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MoviesPage } from './pages/MoviesPage';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import './App.css';
import ReactSwitch from 'react-switch';
import { NewPage } from './pages/NewPage';

export const ThemeContext = createContext(null);

function App() {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
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
		</ThemeContext.Provider>
	);
}

export default App;
