import React, { useState } from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { Modal } from './modal';
import Sort from './sort';

const Main = (props) => {
	const { movies, refetch } = useFetchMovies();
	const [modalActive, setModalActive] = useState(false);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [checkedPopularity, setCheckedPopularity] = useState(false);
	const [checkedRating, setCheckedRating] = useState(false);
	const array = [
		{ name: 'популярности', sortProperty: checkedPopularity },
		{
			name: 'рейтингу',
			sortProperty: checkedRating,
		},
	];

	const sortedByRating = [...movies].sort(
		(mov1, mov2) => mov2.vote_average - mov1.vote_average
	);

	const handleMovieClick = (movie) => {
		setSelectedMovie(movie); // set the selected movie data in state
		setModalActive(true); // show the modal
	};

	const sortByFame = () => {
		setCheckedPopularity((prev) => !prev);
	};

	const sortByRate = () => {
		setCheckedRating((prev) => !prev);
	};

	return (
		<>
			<div className="container-main">
				<Sort
					handler={sortByFame}
					handlerSec={sortByRate}
					array={array}
				/>
				<div className="movies-menu">
					<Modal
						active={modalActive}
						setActive={setModalActive}>
						{selectedMovie && (
							<>
								<div className="modal-movie">
									<img
										className="modal-movie-image"
										src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
										alt=""
									/>
									<h3 className="modal-movie-h3">{selectedMovie.title}</h3>
									<p className="modal-movie-release">
										Release Date: {selectedMovie.release_date}
									</p>
									<p className="modal-movie-info">{selectedMovie.overview}</p>
									<div className="modal-movie-average">
										{selectedMovie.vote_average}
									</div>
									<button
										onClick={() => setModalActive(false)}
										className="modal-button-close">
										Close
									</button>
								</div>
							</>
						)}
					</Modal>
					{checkedRating === false
						? movies.map((movie) => (
								<div key={movie.id}>
									<img
										src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
										alt=""
										onClick={() => handleMovieClick(movie)}
									/>
									<h3>{movie.title}</h3>
								</div>
						  ))
						: sortedByRating.map((movie) => (
								<div key={movie.id}>
									<img
										src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
										alt=""
										onClick={() => handleMovieClick(movie)}
									/>
									<h3>{movie.title}</h3>
								</div>
						  ))}
				</div>
			</div>
		</>
	);
};

export default Main;

// const filteredMovieList = movies.filter((movie) => {
// 	return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
// });
