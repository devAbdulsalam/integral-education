function Button({ handleClick, text, disabled = false, className}) {
	return (
		<button
			onClick={handleClick}
			disabled={disabled}
			className={`bg-gradient-to-r from-[#9B317B]  to-[#682B7E]  hover:from-[#682B7E] hover:via-purple-500 hover:to-[#9B317B] text-white px-4 hover:text-white font-semibold  py-3 w-full flex items-center justify-center rounded-md transition-all duration-500 ease-in-out cursor-pointer ${className}`}
		>
			{text}
		</button>
	);
}
export function WhiteButton2({ handleClick, text }) {
	return (
		<button
			onClick={handleClick}
			className=" bg-gradient-to-r from-white to-white  via-white border border-slate-500  hover:from-[#682B7E] hover:via-purple-500 hover:to-[#9B317B] text-slate-500 px-4 hover:text-white font-semibold  py-3 w-full flex items-center justify-center rounded-md transition-all duration-500 ease-in-out"
		>
			{text}
		</button>
	);
}
export function WhiteButton({ handleClick, text, disabled = false, className}) {
	return (
		<button
			onClick={handleClick}
			disabled={disabled}
			className={` bg-gradient-to-r from-white to-white  via-white border border-slate-500  hover:from-[#682B7E]  hover:to-[#9B317B] text-slate-500 px-4 hover:text-white font-semibold  py-3 w-full flex items-center justify-center rounded-md transition-all duration-500 ease-in-out cursor-pointer ${className}`}
		>
			{text}
		</button>
	);  
}



export default Button;
