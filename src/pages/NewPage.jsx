import Footer from '../features/components/footer';
import NavBar from '../features/components/navbar';
import { NewMovies } from '../features/components/newMovies';

const NewPage = () => {
	return (
		<>
			<NavBar />
			<NewMovies />
			<Footer />
		</>
	);
};

export default NewPage;
