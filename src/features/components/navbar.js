import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchByMovies } from '../counter/SearcherSlice';
import { Link } from 'react-router-dom';

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
					<Link to="/">
						<button
							className="nav-btn"
							id="btn-home">
							Home
						</button>
					</Link>
					<Link to="/movies">
						<button
							className="nav-btn"
							id="btn-movies">
							Movies
						</button>
					</Link>
					<Link to="/about">
						<button
							className="nav-btn"
							id="btn-about">
							About
						</button>
					</Link>
					<Link to="/new-movies">
						<button
							className="nav-btn"
							id="btn-new">
							New
						</button>
					</Link>
					<div className="d1">
						<form>
							<input
								type="text"
								placeholder="Find here..."
								value={searchTerm}
								onChange={handleChange}
							/>
							<button
								className="button-sumbit"
								type="submit">
								Find
							</button>
						</form>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
