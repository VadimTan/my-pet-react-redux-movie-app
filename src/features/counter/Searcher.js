import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../components/slider';
import { selectSearch, searchByMovies, moviesSuccess } from './SearcherSlice';

export const Counter = () => {
	const error = useSelector((state) => state.error);
	const filteredMovies = useSelector((state) => state.filteredMovies);
	const dispatch = useDispatch();
	const searcher = useSelector(selectSearch);
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	useEffect(() => dispatch(searchByMovies(searchTerm)), [searchTerm, dispatch]);

	return (
		<>
			<div className="main-div">
				<div className="container">
					<nav className="navigation-menu">
						<button
							className="nav-btn"
							id="btn-home">
							Home
						</button>
						<button
							className="nav-btn"
							id="btn-movies">
							Movies
						</button>
						<button
							className="nav-btn"
							id="btn-about">
							About
						</button>
						<button
							className="nav-btn"
							id="btn-new">
							New
						</button>
						<div className="d1">
							<form>
								<input
									type="text"
									placeholder="Find here..."
									value={searcher}
									onChange={handleChange}
								/>
								<button type="submit">Find</button>
							</form>
						</div>
					</nav>
				</div>
			</div>
			<Slider />
			<div className="container-main">
				<div className="movies-menu">
					{error && <div>{error}</div>}
					{filteredMovies.map((movie) => (
						<div key={movie.id}>
							<img
								src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
								alt=""
							/>
							<h3>{movie.title}</h3>
							{/* <p>{movie.overview}</p> */}
						</div>
					))}
				</div>
			</div>
		</>
	);
};
