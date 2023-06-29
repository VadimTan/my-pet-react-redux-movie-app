import { useCallback, useEffect, useState } from 'react';

export const useFetchMovies = () => {
	const [movies, setMovies] = useState([]);

	const fetchMovies = useCallback(async () => {
		try {
			const response = await fetch(
				'https://api.themoviedb.org/3/movie/popular?api_key=e6399623a284305ea82a27c75a4c129a'
			);
			const data = await response.json();
			setMovies(data.results);
		} catch (err) {
			setMovies([]);
			console.error(err);
		}
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);
	return { movies, refetch: fetchMovies };
};
