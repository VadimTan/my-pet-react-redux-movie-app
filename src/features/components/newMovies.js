import { useState } from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { Modal } from './modal';

export const NewMovies = () => {
	const [modalActive, setModalActive] = useState(false);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const { movies, refetch } = useFetchMovies();

	const handleMovieClick = (movie) => {
		setSelectedMovie(movie); // set the selected movie data in state
		setModalActive(true); // show the modal
	};

	const updatedMovies = movies.slice(0, 8);

	// const filteredMovieList = movies.filter((movie) => {
	// 	return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
	// });
	return (
		<>
			<div className="container-main">
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
					{updatedMovies &&
						updatedMovies.map((movie) => (
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
