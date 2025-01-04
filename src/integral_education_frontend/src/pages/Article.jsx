import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import AnimationContainer from '../components/AnimationContainer';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ChatBot from '../components/ChatBot';
import AuthContext from '../context/context';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Loader from '../components/Loader';
// infinity;

function Home() {
	const navigate = useNavigate();
	const [text, setText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const {mode} = useContext(AuthContext)
	const apiKey = 'AIzaSyB6h3RsiCHJBb2vESYgvL_Vt0JsWAGhfwM';
	const genAI = new GoogleGenerativeAI(apiKey);
	const model = genAI.getGenerativeModel({
		model: 'gemini-1.5-flash',
	});
	const generationConfig = {
		temperature: 1,
		topP: 0.95,
		topK: 64,
		maxOutputTokens: 1000,
		responseMimeType: 'text/plain',
	};
	const corruption = `Corruption is a complex social, political and economic phenomenon that
affects all countries. Corruption undermines democratic institutions, slows
economic development and contributes to governmental instability.
Corruption attacks the foundation of democratic institutions by distorting
electoral processes, perverting the rule of law and creating bureaucratic
quagmires whose only reason for existing is the solicitation of bribes.
Economic development is stunted because foreign direct investment is
discouraged and small businesses within the country often find it impossible
to overcome the "start-up costs" required because of corruption.`

	let prompt = `
			Generate  ${mode} essay on Global Resource for Anti-Corruption Education and Youth Empowerment like
			${corruption}
			At present, there is no unified and collectively accepted definition of
			corruption; therefore, the interpretations of the phenomenon vary.
			However, usually there are 3 elements in a corrupt act:
			1) Authority: someone has the power.
			2) Abuse: this someone abuses the power.
			3) Benefit: this someone obtains any sort of undue benefit.
		`;	
	useEffect(() => {
		const generateQuestions = async () => {
			try {
				setIsLoading(true)
				const chatSession = model.startChat({
					generationConfig,
					history: [],
				});

				const result = await chatSession.sendMessage(prompt);
				const message = result.response.text();
				// console.log('Message', message);
				setText(message);
				setIsLoading(false)
			} catch (error) {
				console.error('Error generating questions:', error);
				setText(corruption);
				setIsLoading(false)
			}
		};

		generateQuestions();
	}, [prompt]);

	return (
			
		<>
		{isLoading ? <Loader/> : (
			<>
			<main className="flex flex-col justify-center  w-full md:w-3/4 mx-auto bg-white md:p-4 mt-2 min-h-[400px] md:min-h-[570px] h-auto">
				<div className="h-fit w-full flex justify-between items-center p-1">
					<button
						className=" hover:bg-gray-200 text-slate-800 text-2xl font-semibold py-2 p-2 rounded-full transition-all duration-500 ease-in-out"
						onClick={() => navigate(-1 || '/')}
					>
						<IoArrowBack />
					</button>
					<h2
						className="text-[#9B317B] font-semibold  py-1 px-2 transition-all duration-500 ease-in-out"
						
					>
						Iforce
					</h2>
				</div>
				<AnimationContainer
					delay={0.6}
					className="animate flex-1 h-full text-sm  p-1 py-4">
						<Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>				
				</AnimationContainer>
			</main>
			<ChatBot className='fixed right-4 bottom-4'/>
			</>)
			}
		</>
	);
}

export default Home;
