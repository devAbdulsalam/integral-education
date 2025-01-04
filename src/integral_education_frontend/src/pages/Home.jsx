import HomeLayout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services'
import Cta from '../components/Cta';
import ChatBot from '../components/ChatBot';
const HomePage = () => {
	return (
		<HomeLayout>
			<Hero />
			<Services/>
			<About />
			<Cta />
			<ChatBot  className="fixed right-4 bottom-4"/>
		</HomeLayout>
	);
};

export default HomePage;
