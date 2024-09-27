import { useState,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import AuthContext from '../context/context';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const {user} = useContext(AuthContext)

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="md:flex font-[600] text-[15px] w-[90%] mx-auto justify-between items-center py-8">
			<div className="md:block flex justify-between items-center w-full md:w-auto">
				<div>
					<h1 className="text-[20px] py-[0.8px]">I-Force.io</h1>
					<span className="block mx-auto bg-primary h-[2px] rounded-[10px] w-[72px]"></span>
				</div>
				<div className="md:hidden">
					<FaBars onClick={toggleMenu} className="text-[24px] cursor-pointer" />
				</div>
			</div>
			<div
				className={`${
					isOpen ? 'block' : 'hidden'
				} absolute md:static top-[70px] py-10 z-5 left-0 w-full md:w-auto md:flex space-x-0 md:space-x-10 bg-white md:bg-transparent shadow-lg md:shadow-none transition-all md:py-0 duration-500 ease-in-out`}
			>
				<NavLink
					style={({ isActive }) => {
						return isActive ? { borderBottom: '1px solid #01A8A1' } : {};
					}}
					to="../"
					className="block md:inline-block p-4 md:p-0"
				>
					Home
				</NavLink>
				{user && (
				<NavLink
					style={({ isActive }) => {
						return isActive ? { borderBottom: '1px solid #01A8A1' } : {};
					}}
					to="../quiz"
					className="block md:inline-block p-4 md:p-0"
				>
					Quiz
				</NavLink>)}

				<NavLink
					style={({ isActive }) => {
						return isActive ? { borderBottom: '1px solid #01A8A1' } : {};
					}}
					to="../scores"
					className="block md:inline-block p-4 md:p-0"
				>
					Scores
				</NavLink>
				<NavLink
					style={({ isActive }) => {
						return isActive ? { borderBottom: '1px  solid #01A8A1' } : {};
					}}
					to="../index"
					className="md:hidden hover:bg-primary my-5 inline-block transition ease-in-out hover:translate-y-1 hover:scale-110 duration-400 hover:text-white border border-primary rounded-md py-3 px-10 relative overflow-hidden"
				>
					<span className="relative ">Get Started</span>
				</NavLink>
			</div>
			<div className="mt-4 md:mt-0 hidden md:block">
				<NavLink
					style={({ isActive }) => {
						return isActive ? { borderBottom: '1px solid #01A8A1' } : {};
					}}
					to="../index"
					className="hover:bg-primary transition ease-in-out hover:translate-y-1 hover:scale-110 duration-400 hover:text-white border border-primary rounded-md py-3 px-10 relative overflow-hidden"
				>
					<span className="absolute inset-0 w-full h-full bg-primary transform scale-x-0 origin-left transition-transform duration-500 ease-out"></span>
					<span className="relative z-10">Get started</span>
				</NavLink>
			</div>
		</nav>
	);
};

export default Navigation;
