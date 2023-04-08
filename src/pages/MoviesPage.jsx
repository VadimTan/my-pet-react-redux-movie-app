import React from 'react';
import NavBar from '../features/components/navbar';
import Footer from '../features/components/footer';
import Main from '../features/components/main';
import '../App.css';
// import Slider from './features/components/slider';

export const MoviesPage = () => {
	return (
		<div className="App">
			<NavBar />
			<Main />
			<Footer />
		</div>
	);
};
