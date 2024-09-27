import HomeLayout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services'
import Cta from '../components/Cta';
const HomePage = () => {
	return (
		<HomeLayout>
			<Hero />
			<Services/>
			<About />
			<Cta />
		</HomeLayout>
	);
};

export default HomePage;
