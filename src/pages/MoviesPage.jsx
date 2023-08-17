import React from 'react';
import NavBar from '../features/components/navbar';
import Footer from '../features/components/footer';
import Main from '../features/components/main';
import '../App.css';

const MoviesPage = () => {
	return (
		<>
			<NavBar />
			<Main />
			<Footer />
		</>
	);
};

export default MoviesPage;
