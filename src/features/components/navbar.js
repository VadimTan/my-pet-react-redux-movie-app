import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchByName } from '../../redux/search.slice';

const NavBar = () => {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(searchByName(e.target.value));
	};

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
								onChange={(e) => handleChange(e)}
							/>
						</form>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
