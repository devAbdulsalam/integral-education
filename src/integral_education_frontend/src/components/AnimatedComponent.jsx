function AnimatedComponent() {
	return (
		<div className="flex flex-col bg-white">
			{/* Fade Up */}
			<div
				className="bg-blue-500 w-64 h-64 text-white flex justify-center text-4xl mt-2 mb-3"
				data-aos="fade-up"
			>
				Fade Up
			</div>
			{/* Fade Down */}
			<div
				className="bg-green-500 w-64 h-64 text-white flex justify-center text-4xl mt-2 mb-3"
				data-aos="fade-down"
			>
				Fade Down
			</div>
			{/* Fade Left */}
			<div
				className="bg-yellow-500 w-64 h-64 text-white flex justify-center text-4xl mt-2 mb-3"
				data-aos="fade-left"
			>
				Fade Left
			</div>
			{/* Fade Right */}
			<div
				className="bg-orange-500 w-64 h-64 text-white flex justify-center text-4xl mt-2 mb-3"
				data-aos="fade-right"
			>
				Fade Right
			</div>
			{/* Zoom In */}
			<div
				className="bg-purple-500 w-64 h-64 text-white flex justify-center text-4xl mt-2 mb-3"
				data-aos="zoom-in"
			>
				Zoom In
			</div>
			{/* Zoom Out */}
			<div
				className="bg-red-500 w-64 h-64 text-white flex justify-center text-4xl mt-2 mb-3"
				data-aos="zoom-out"
			>
				Zoom Out
			</div>
			{/* Slide Up */}
			<div
				className="bg-gray-500 w-64 h-64 text-white flex justify-center text-4xl mt-2 mb-3"
				data-aos="slide-up"
			>
				Slide up
			</div>
			{/* Flip Up */}
			<div
				className="bg-pink-500 w-64 h-64 text-white flex justify-center text-4xl mt-2 mb-3"
				data-aos="flip-up"
			>
				Flip up
			</div>
			{/* Flip Right */}
			<div
				className="bg-lime-500 w-64 h-64 text-white flex justify-center text-4xl mt-2 mb-3"
				data-aos="flip-right"
			>
				Flip right
			</div>
			{/* Flip Left */}
			<div
				className="bg-yellow-700 w-64 h-64 text-white flex justify-center text-4xl mt-2 mb-3"
				data-aos="flip-left"
			>
				Flip left
			</div>
		</div>
	);
}
export default AnimatedComponent;
