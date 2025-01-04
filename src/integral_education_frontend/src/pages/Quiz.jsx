import { useState, useContext, useEffect } from "react";
// import HomeLayout from '../components/Layout';
import ScoreModal from "../components/ScoreModal";
import Loader from "../components/Loader.jsx";
import { useNavigate } from "react-router-dom";
import { integral_education_backend } from 'declarations/integral_education_backend';
import AuthContext from "../context/context";
import { IoArrowBack } from "react-icons/io5";
import Button, { WhiteButton } from "../components/Button";
import Points from "../components/Points";
import AnimationContainer from "../components/AnimationContainer";
import avatar from "../assets/avatar.png";
import { MenuItems } from "@headlessui/react";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import ChatBot from "../components/ChatBot.jsx";
// infinity;

const Quiz = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [showQuestion, setShowQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isScoreModal, setIsScoreModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const { user , mode} = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      navigate("../index");
    }
  }, [user]);
  const apiKey = "AIzaSyB6h3RsiCHJBb2vESYgvL_Vt0JsWAGhfwM";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  const schema = {
    description: "List of quiz questions",
    type: SchemaType.ARRAY,

    items: {
      type: SchemaType.OBJECT,
      properties: {
        numb: {
          type: SchemaType.NUMBER,
          description: "The question number",
          nullable: false,
        },
        question: {
          type: SchemaType.STRING,
          description: "The quiz question text",
          nullable: false,
        },
        answer: {
          type: SchemaType.STRING,
          description: "The correct answer to the question",
          nullable: false,
        },
        options: {
          type: SchemaType.ARRAY,
          description: "The list of possible answers for the question",
          items: {
            type: SchemaType.STRING,
          },
          nullable: false,
        },
      },
      required: ["numb", "question", "answer", "options"],
    },
  };

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 1000,
    responseMimeType: "application/json",
    responseSchema: schema,
  };
  let prompt = `

    let questions = [
        {
        numb: 1,
        question: "What is corruption?",
        answer: "C. A complex social, political, and economic phenomenon.",
        options: [
            "A. A simple economic issue.",
            "B. A legal process.",
            "C. A complex social, political, and economic phenomenon.",
            "D. A type of business activity."
        ]
    },
    Generate 5  Json format ${mode || 'easy'} questions based on Global Resource for Anti-Corruption Education and Youth Empowerment or content below 
2. And what exactly is “corruption”?
Corruption is a complex social, political and economic phenomenon that
affects all countries. Corruption undermines democratic institutions, slows
economic development and contributes to governmental instability.
Corruption attacks the foundation of democratic institutions by distorting
electoral processes, perverting the rule of law and creating bureaucratic
quagmires whose only reason for existing is the solicitation of bribes.
Economic development is stunted because foreign direct investment is
discouraged and small businesses within the country often find it impossible
to overcome the "start-up costs" required because of corruption.
8
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
        setLoading(true);
        const chatSession = model.startChat({
          generationConfig,
          history: [],
        });
		console.log('quiz mode', mode)
        const result = await chatSession.sendMessage(prompt);
        if (result?.response) {
          const rawMessage = await result.response.text();
          // Preprocess the message to remove unwanted content like code block markers
          // const sanitizedMessage = rawMessage
          // 	.replace(/```json|```/g, '')
          // 	.trim();

          const parsedMessage = JSON.parse(rawMessage);
          // console.log('Parsed Questions:', parsedMessage);
          setQuestions(() => parsedMessage);
          setLoading(false);
        } else {
          console.error("Invalid result response:", result);
          setQuestions([]);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error generating questions:", error);
        setLoading(false);
        setQuestions([]);
      }
    };

    generateQuestions();
  }, [prompt]);

  const handleNext = async () => {
    console.log("next clicked");
    if (showQuestion < questions.length - 1) {
      setShowQuestion(showQuestion + 1);
      setSelectedOption(null); // Reset selected option for the next question
    } else {
      try {
        const data = {name: user, point: Number(correctAnswer)}
        console.log('data', data)
        let name = user.toString();
        let point = Number(correctAnswer);
        console.log('data', name, point)
        const result = await integral_education_backend.putPoint(
        	{ name },
        	{ point }
        );
        console.log("quiz result", { result: { name, point } });
        setIsScoreModal(true);
      } catch (error) {
        console.log("quiz error", error);
      }
      // Show score modal after the last question
    }
  };

  const checkAnswer = (option, answer) => {

    console.log('answer;;;;;;;;;;;;;;;;', answer)
    if (option === answer) {
      setCorrectAnswer(correctAnswer + 1);
    }
    setSelectedOption(option); // Mark the selected option
  };

  const handleCancel = () => {
    navigate("../index");
  };
  const handleComplete = async () => {
	  try{
		  const result = await integral_education_backend.putPoint({name: user, point: Number(correctAnswer)})
		  navigate("../leaderboard");
      console.log('quiz result',result)
    }catch(error){
      console.log('quiz error', error)
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      {/* <HomeLayout> */}
      <main className="bg flex flex-col justify-center  w-full md:w-3/4 mx-auto bg-white md:pb-4 mt-2 md:min-h-[750px] h-screen  p-1 relative">
        <div className="h-fit w-full flex justify-between items-center">
          <button
            className=" hover:bg-gray-200 text-slate-800 text-2xl font-semibold  py-3 p-2 rounded-full transition-all duration-500 ease-in-out"
            onClick={() => navigate("/chat")}
          >
            <IoArrowBack />
          </button>
          <button
            // disabled={loading}
            className="text-[#682B7E] font-semibold  py-1 transition-all duration-500 ease-in-out"
            // onClick={() => navigate('/')}
          >
            {user}
          </button>
        </div>

        {/* Show current question */}
        <div className="flex flex-col h-full justify-center align-center mt-1">
          <div className="text-center py-2">
            <h2 className="capitalize text-4xl md:text-6xl font-bold py-4 italic">
              Question <br /> <span className="text-primary">{showQuestion + 1}</span>/<span className="text-2xl">{questions?.length}</span>
            </h2>
            <h3 className="text-lg font-bold py-4 italic">
              {questions[showQuestion]?.question}
            </h3>
          </div>

          {questions[showQuestion]?.options.map((option, i) => (
            <button
              key={i}
              onClick={() =>
                checkAnswer(option, questions[showQuestion]?.answer)
              }
              className={`cursor-pointer border-t border-slate-500 text-slate-800 text-left font-semibold  p-4 px-1 w-full flex items-center justify-center transition-all duration-500 ease-in-out
													
                  ${
                    selectedOption === option
                      ? option === questions[showQuestion]?.answer
                        ? "border-[#682B7E] text-primary"
                        : "border-red-500 text-red-500"
                      : "hover:bg-gray-400 hover:text-white"
                  }
                `}
              disabled={selectedOption !== null} // Disable after selecting an option
            >
              {option}
            </button>
          ))}
          <div className="flex justify-between mt-10 mb-4 items-center">
            <div></div>
            <div className="px-1 text-center text-primary/50 ">
              Score: {correctAnswer} / {questions?.length}
            </div>
            <div>
              <ChatBot className="" />
            </div>
          </div>

          <div className="h-fit mt-4 p-2 flex justify-between items-center border-t border-primary/50">
            <div className="w-full">
              <Button
                text="Next"
                handleClick={handleNext}
                disabled={selectedOption === null}
                // Disable if no option is selected
                className=""
              />
            </div>
          </div>
        </div>
      </main>
      {/* <ChatBot className="absolute bottom-4 right-4 md:bottom-6 md:-right-12" /> */}
      {/* </HomeLayout> */}
      <ScoreModal
        score={{
          correctAnswers: correctAnswer,
          totalQuestions: questions?.length,
        }}
        show={isScoreModal}
        setShow={setIsScoreModal}
        handleCancel={handleCancel}
        handleComplete={handleComplete}
      />
    </>
  );
};

export default Quiz;

// // ctr c
// // dfx stop

// // dfx start
// // dfx deploy
