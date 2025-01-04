/* eslint-disable react/prop-types */
const ChatButton = ({ chat, isReading, handleReadText, handleStopReading }) => {
	return (
		<>
			{isReading && isReading === chat.index ? (
				<button
					onClick={handleStopReading}
					className="ml-2 p-2 px-3 bg-[#9B317B] text-white rounded-full pauseBtn"
					aria-label="Pause reading"
				>
					⏸︎
				</button>
			) : (
				<button
					onClick={() => handleReadText(chat.index, chat.message)}
					className="py-1 px-1 md:py-3 md:px-3 text-center bg-[#682B7E] text-white rounded-full playBtn"
					aria-label={`Start reading ${chat.index}`}
				>
					<span>▶</span>
				</button>
			)}
		</>
	);
};

export default ChatButton;
