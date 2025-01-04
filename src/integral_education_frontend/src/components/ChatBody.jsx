/* eslint-disable react/prop-types */
import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ChatButton from './ChatButton';

const ChatBody = ({ chats }) => {
	const [isReading, setIsReading] = useState(null);

	const handleReadText = (id, message) => {
		if ('speechSynthesis' in window) {
			setIsReading(id);
			window.speechSynthesis.cancel(); // Stop any ongoing speech
			const utterance = new SpeechSynthesisUtterance(message);
			utterance.onend = () => setIsReading(null); // Reset reading state after speech ends
			window.speechSynthesis.speak(utterance);
		} else {
			console.error('Speech Synthesis is not supported in this browser.');
		}
	};

	const handleStopReading = () => {
		setIsReading(null);
		window.speechSynthesis.cancel();
	};

	return (
		<div className="flex-grow overflow-y-auto p-1" id="chatContainer">
			{/* Render chat messages */}
			{chats?.map((chat, index) => (
				<div key={index} className="text-sm md:text-lg">
					<div
						className={`flex items-center mb-4 ${
							chat.sender === 'ai' ? '' : 'ml-8'
						}`}
					>
						<div
							className={`p-2 md:p-4 rounded-lg flex-grow ${
								chat.sender === 'ai' ? 'bg-[#682B7E]/20' : 'bg-gray-100'
							}`}
						>
							<Markdown remarkPlugins={[remarkGfm]}>{chat.message}</Markdown>
						</div>
						<div className='p-1'>

						<ChatButton
							isReading={isReading}
							chat={{ ...chat, index }}
							handleReadText={handleReadText}
							handleStopReading={handleStopReading}
						/>
							</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ChatBody;
