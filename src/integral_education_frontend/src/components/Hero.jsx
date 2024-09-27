import { useState, useEffect } from 'react';
import frame from '../assets/userImage.png';
import { facts } from '../data';
import Animation from './Animation';

const Hero = () => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [message, setMessage] = useState('');
	const [subscribe, setSubscribe] = useState(false);
	const [success, setSuccess] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [randomFact, setRandomFact] = useState('');

	useEffect(() => {
		// Function to randomly pick a fact
		const getRandomFact = () => {
			const randomIndex = Math.floor(Math.random() * facts.length);
			return facts[randomIndex];
		};

		// Set a random fact on component mount
		setRandomFact(getRandomFact());

		// Optional: Update the fact every 10 seconds (or any interval)
		const intervalId = setInterval(() => {
			setRandomFact(getRandomFact());
		}, 10000);

		// Cleanup the interval on unmount
		return () => clearInterval(intervalId);
	}, []);

	const handleSubscribe = () => {
		console.log('subscrib')
	}
	return (
		<section className="mt-10 w-[90%] mx-auto md:flex justify-between items-center">
			<div className=" md:w-[50%] md:my-0 my-10 space-y-3 font-[400] text-[18px] text-tetiary">
				<p>Welcome to I-Force – Learn and Earn by Fighting Corruption!</p>
				<h1 className="text-secondary text-[22px] md:text-[48px] font-[700]">
				Empowering Minds, Shaping Integrity
				</h1>
				<p className="">
				At I-Force, we believe that education is the most powerful tool to combat corruption. Our innovative platform combines learning with fun and rewards, making it easier for users to grasp the fundamentals of integrity, ethics, and anti-corruption practices.
				</p>
				<div className="md: items-center" id="subscribe">
					<small className="block mt-10 mb-2">
						Type in your mobile number to subscribe to receiving corruption and moral tips
					</small>
					<input
						className="y w-full shadow-lg outline-none rounded-md border py-3 px-4 border-[#E3E5EB] bg-[#E3E5EB] text-[#90BFA8]"
						type="text"
						placeholder="phone number"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
					<small className="block my-5 text-red-400">
						{showMessage && <p>{message}</p>}
					</small>
					<button
						className="bg-primary mt-10 rounded-md text-white py-3 px-5"
						onClick={handleSubscribe}
					>
						{subscribe
							? 'Subscribing..'
							: success
							? ' Subscribed Successfully'
							: ' Subscribe to Tips'}
					</button>
				</div>
			</div>
			<img className="md:w-[40%] mx-auto" src={frame} alt="" />
			
		</section>
	);
};

export default Hero;
