/* eslint-disable react/prop-types */
import { IoIosSend } from 'react-icons/io';
import { useState } from 'react';

const ChatInput = ({
	handleGenerateContent,
	handleVoiceInput,
	setText,
	text,
}) => {
	const [isTyping, setIsTyping] = useState(false);
	const handleSubmit = () => {
		handleGenerateContent();
		setText('');
	};
	const handleTyping = (e) => {
		if (!e.target.value) setIsTyping(false);
		setIsTyping(true);
		setText(e.target.value);
	};
	const handleKeyUp = (e) => {
		if (text.trim() === '') {
			setIsTyping(false);
		}
		if (e.key === 'Enter') {
			if (text.trim() !== '') {
				setText('');
				handleGenerateContent();
			}
		}
	};
	const handleBlur = () => {
		setTimeout(() => {
			if (text.trim() == '') {
				setIsTyping(false);
				setText('');
			}
		}, 50);
	};
	return (
		<div className="flex items-center border-t pt-1 md:pt-4">
			<div className="flex items-center w-full">
				<input
					type="text"
					id="chatInput"
					value={text}
					onChange={handleTyping}
					onKeyUp={handleKeyUp}
					onBlur={handleBlur}
					placeholder="Enter to send..."
					className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#682B7E]"
				/>
				<button
					id="sendBtn"
					onClick={handleSubmit}
					className="ml-1 md:ml-2 px-1 md:px-2.5 py-1 md:py-2 bg-blue-500 text-white text-lg md:text-xl rounded-lg hover:bg-blue-600"
				>
					<IoIosSend />
				</button>
			</div>

			{/* text-lg */}
			{/* <!-- Voice input button --> */}
			{isTyping ? null : (
				<button
					id="voiceBtn"
					onClick={handleVoiceInput}
					className="ml-1 md:ml-2 px-1 md:px-4 py-1 md:py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
				>
					🎤
				</button>
			)}
		</div>
	);
};

export default ChatInput;
