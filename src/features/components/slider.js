import React, { useState } from 'react';
import image1 from '../../images/avatar.jpg';
import image2 from '../../images/blackpanther.jpg';
import image3 from '../../images/pussinboots.jpg';

const Slider = () => {
	const images = [image1, image2, image3];
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
	};

	const handlePrev = () => {
		setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
	};

	return (
		<div className="container-slider-movies">
			<div className="slider-menu">
				<img
					id="images-slider"
					src={images[currentIndex]}
					alt=""
				/>
				<button
					className={'button-slider-prev'}
					onClick={handlePrev}>
					Prev
				</button>
				<button
					className={'button-slider-next'}
					onClick={handleNext}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Slider;
