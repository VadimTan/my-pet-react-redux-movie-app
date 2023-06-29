import React from 'react';
import NavBar from '../features/components/navbar';
import Footer from '../features/components/footer';
import '../App.css';
import { Fade } from 'react-awesome-reveal';

export const AboutPage = () => {
	return (
		<>
			<NavBar />
			<div className="about-me-info">
				<span>
					<Fade
						delay={500}
						triggerOnce>
						<h2>About me</h2>
						<p className="text-about-me">
							Hi there, my name is Vadim and I am a Junior Front End Developer.
							I have always had a passion for creating things and as I began to
							explore the world of web development, I found a way to turn that
							passion into a career. With a strong foundation in HTML, CSS and
							JavaScript/React.
						</p>
					</Fade>
					<Fade
						delay={500}
						triggerOnce>
						<h2>My Mission</h2>
						<p className="text-about-me">
							I am dedicated to build beautiful and user-friendly websites that
							provide an exceptional user experience.
							<br /> I am constantly striving to improve my skills and stay
							up-to-date with the latest web development technologies and
							trends. Collaboration is an essential part of my work as a
							developer, and I pride myself on being a team player.
							<br /> I enjoy working with designers, project managers, and other
							developers to create solutions that meet the unique needs of our
							clients.
						</p>
					</Fade>
					<Fade
						delay={500}
						triggerOnce>
						<h2>Work</h2>
						<p className="text-about-me">
							If you're looking for a developer who is passionate, dedicated,
							and eager to take on new challenges, I would love to hear from
							you. Let's work together to bring your web projects to life!
						</p>
					</Fade>
				</span>
			</div>
			<Footer />
		</>
	);
};
