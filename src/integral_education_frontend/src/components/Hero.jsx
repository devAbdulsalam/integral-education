import { useState, useEffect } from 'react';
import frame from '../assets/userImage.png';
import { facts } from '../data';
import Animation from './Animation';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [message, setMessage] = useState('');
	const [subscribe, setSubscribe] = useState(false);
	const [success, setSuccess] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [randomFact, setRandomFact] = useState('');
	const navigate = useNavigate()

	return (
		<section className="mt-10 w-[90%] mx-auto md:flex justify-between items-center">
			<div className=" md:w-[50%] md:my-0 my-10 space-y-3 font-[400] text-[18px] text-tetiary">
				<p>Welcome to I-Force – Learn and Earn by Fighting Corruption!</p>
				<h1 className="text-secondary hero text-[22px] md:text-[48px] font-[700]">
				Empowering Minds, Shaping Integrity
				</h1>
				<p className="">
				At I-Force, we believe that education is the most powerful tool to combat corruption. Our innovative platform combines learning with fun and rewards, making it easier for users to grasp the fundamentals of integrity, ethics, and anti-corruption practices.
				</p>
				<div className="md: items-center">					
					<button
						className="bg-[#9B317B] mt-10 rounded-md text-white py-3 px-5"
						onClick={() => navigate('/index')}
					>
						Get Started
					</button>
				</div>
			</div>
			<img className="md:w-[40%] mx-auto" src={frame} alt="" />
			
		</section>
	);
};

export default Hero;
