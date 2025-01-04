/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function ScoreCount({ score, steps = 10, interval = 100 }) {
	const [countUp, setCountUp] = useState(0);

	useEffect(() => {
		if (countUp >= score) return; // Stop the timer when the score is reached

		const step = Math.ceil((score - countUp) / steps);
		const timer = setInterval(() => {
			setCountUp((prev) => {
				const nextValue = prev + step;
				return nextValue >= score ? score : nextValue; // Cap at the score value
			});
		}, interval);

		return () => clearInterval(timer); // Cleanup on component unmount or update
	}, [countUp, score, steps, interval]);

	// const isCounting = countUp < score;

	return (
		<h2 className="capitalize text-4xl md:text-6xl pt- font-bold italic">
			{countUp} %
		</h2>
	);
}

export default ScoreCount;

// /* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';

// function ScoreCount({ score, count = 10, time = 100 }) {
// 	const [countUp, setcountUp] = useState(0);
// 	const [isCounting, setIsCounting] = useState(true);

// 	useEffect(() => {
// 		let timer;

// 		if (isCounting && countUp < score) {
// 			timer = setTimeout(() => {
// 				// count upto the actual score
//                 const step = Math.ceil((score - countUp) / count);
// 				setcountUp((prevCount) => prevCount + step);
// 			}, time);
// 		} else {
// 			setIsCounting(false);
// 		}

// 		return () => clearTimeout(timer);
// 	}, [countUp, isCounting, score, count, time]);

// 	return (
// 		<div>
// 			<h2 className="capitalize text-4xl md:text-6xl font-bold py-4 italic">
// 				{countUp} %
// 			</h2>
// 			{isCounting ? (
// 				<h3 className="capitalize text-lg font-bold py-4 italic">
// 					Loading Score...
// 				</h3>
// 			) : (
// 				<h3 className="capitalize text-lg font-bold py-4 italic">
// 					Your score is {score}!
// 				</h3>
// 			)}
// 		</div>
// 	);
// }

// export default ScoreCount;
// // motokion
// // mjjyq-5yaaa-aaaag-atsnq-cai
