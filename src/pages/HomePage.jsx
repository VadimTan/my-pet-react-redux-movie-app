import React from 'react';
import NavBar from '../features/components/navbar';
import Footer from '../features/components/footer';
import Slider from '../features/components/slider';
import '../App.css';
import { Slide } from 'react-awesome-reveal';
// import Main from './features/components/main';

const HomePage = () => {
	return (
		<>
			<NavBar />
			<Slide>
				<div className="home-page">
					<span>
						<h2>Welcome to my Movie App built on React JS!</h2>
						<p>
							This app is the perfect way to explore your favorite movies and
							discover new ones.
							<br /> With a sleek and user-friendly interface, you can easily
							search for movies, browse by genre, and get all the details you
							need, including ratings, cast, and trailers.
						</p>
						<p>
							One of the key features of this app is its seamless integration
							with the Open Movie Database API, which provides access to a vast
							library of movie information.
							<br /> This means that you can be confident that you're getting
							the most accurate and up-to-date information on your favorite
							films.
						</p>
					</span>
				</div>
			</Slide>
			<Slider />
			<Footer />
		</>
	);
};

export default HomePage;
