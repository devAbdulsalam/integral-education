/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function Points({ score, steps = 10, interval = 100 }) {
	const [countUp, setCountUp] = useState(0);

	useEffect(() => {
		if (countUp >= score) return; // Stop when the target score is reached

		const stepIncrement = Math.ceil(score / steps); // Calculate step size
		const timer = setInterval(() => {
			setCountUp((prev) => {
				const nextValue = prev + stepIncrement;
				return nextValue >= score ? score : nextValue; // Cap at the score
			});
		}, interval);

		return () => clearInterval(timer); // Cleanup the interval
	}, [countUp, score, steps, interval]);

	return (
		<div className='text-center'>
			<h3 className="capitalize text-lg font-bold py-4 italic">You earned</h3>
			<h2 className="capitalize text-4xl md:text-6xl font-bold py-4 italic">
				{Math.round(countUp)}% <br /> Points
			</h2>
		</div>
	);
}



export default Points;
