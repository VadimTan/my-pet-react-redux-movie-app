import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectSearch, searchByMovies } from '../counter/SearcherSlice';

const NavBar = () => {
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	useEffect(() => {
		dispatch(searchByMovies(searchTerm));
	}, [searchTerm, dispatch]);

	return (
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
								value={searchTerm}
								onChange={handleChange}
							/>
							<button type="submit">Find</button>
						</form>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
