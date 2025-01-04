/* eslint-disable react/prop-types */
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function ChatBot({ className }) {
	const navigate = useNavigate();
	return (
		<button
            onClick={() => navigate('/chat')}
            className={`rounded-full p-2 bg-green-500 text-white text-3xl font-bold ${className}`}
		>
			<IoChatbubbleEllipsesOutline />
		</button>
	);
}

export default ChatBot

