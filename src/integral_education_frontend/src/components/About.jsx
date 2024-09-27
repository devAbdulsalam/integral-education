import React from 'react';
import { Link } from 'react-router-dom';

function About() {
	return (
		<div
			id="faq"
			className="bg-gray-100 font-display p-6 py-20 relative isolate"
		>
			<div
				className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
				aria-hidden="true"
			>
				<div className="relative right-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8088ff] to-[#05af3e] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem] clipPath"></div>
			</div>
			<div className="text-2xl font-semibold mb-6 text-center">
				<h2 className="text-3xl font-extrabold text-green-500">Why QuizMe?</h2>
				<p className="my-3 text-lg text-gray-500">
				Join Us in the Fight Against Corruption
				</p>
			</div>

			<div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 space-x-4 text-center md:w-10/12 mx-auto">
				<div className="p-2 w-full mx-auto bg-white md:p-8 rounded-lg shadow">
					<button className=" feature-1 rounded-full text-center text-white text-2xl font-semibold">
						<p className="p-4 px-6">1</p>
					</button>
					<h2 className="text-xl font-bold my-2">Interactive Learning</h2>
					<div className="mt-2">
						<p className="leadinig text-left">
						Learn at your own pace with quizzes that reinforce key concepts about corruption and ethics.
						</p>
					</div>
				</div>
				<div className="p-2 w-full mx-auto bg-white md:p-8 rounded-lg shadow">
					<button className=" feature-2 rounded-full text-center text-white text-2xl font-semibold">
						<p className="p-4 px-6">2</p>
					</button>
					<h2 className="text-xl font-bold my-2">Earn Rewards.</h2>
					<div className="mt-2">
						<p className="leadinig text-left">
						Your knowledge pays off! Earn points as you progress through quizzes and climb the leaderboard.
						</p>
					</div>
				</div>
				<div className="p-2 w-full mx-auto bg-white md:p-8 rounded-lg shadow">
					<button className="feature-3 text-center rounded-full text-white text-2xl font-semibold">
						<p className="p-4 px-6">3</p>
					</button>
					<h2 className="text-xl font-bold my-2">
					Blockchain Security: 
					</h2>
					<div className="mt-2">
						<p className="leadinig text-left">
						Your progress and points are securely stored on the Internet Computer, ensuring transparency and security.
						</p>
					</div>
				</div>
			</div>
			<div className="mt-4 flex justify-center">
				<Link
					to="../index"
					className="hover:bg-primary transition ease-in-out hover:translate-y-1 hover:scale-110 duration-400 hover:text-white border border-primary rounded-md py-3 px-10 relative overflow-hidden"
				>
					<span className="absolute inset-0 w-full h-full bg-primary transform scale-x-0 origin-left transition-transform duration-500 ease-out"></span>
					<span className="relative z-10">Get started</span>
				</Link>
			</div>
		</div>
	);
}

export default About;
