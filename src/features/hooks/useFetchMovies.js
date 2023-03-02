import { useCallback, useEffect, useState } from 'react';

export const useFetchMovies = () => {
	const [movies, setMovies] = useState([]);

	const fetchMovies = useCallback(async () => {
		try {
			const response = await fetch(
				'https://api.themoviedb.org/3/movie/popular?api_key=96d468c5aedd8e32b93e62e1dab78f97&language=en-US&page=1'
			);
			const data = await response.json();
			setMovies(data.results);
			console.log(data.results);
		} catch (err) {
			setMovies([]);
			console.error(err);
		}
	}, []);

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);
	return { movies, refetch: fetchMovies };
};
