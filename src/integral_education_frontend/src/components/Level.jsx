import { useNavigate } from "react-router-dom";
import AnimationContainer from "./AnimationContainer";
import Button, { WhiteButton } from "./Button";
import ChatBot from "./ChatBot";

const Level = ({mode, handleClick, startQuiz}) => {
    const navigate = useNavigate();
    const modes = ['Easy', 'Intermediate', 'Hard'];
    console.log("Entering", mode)
  return (
    <div className="flex flex-col justify-center  w-full md:w-3/4 px-1 mx-auto bg-white md:p-4 mt-2 min-h-[400px] md:min-h-[570px] h-auto relative">
      <div className="animate text-center flex-1 h-full pb-10 ">
        <h2 className="capitalize text-4xl md:text-6xl font-bold  py-4 italic">
          Choose <br className="" /> test level
        </h2>
      </div>
      <AnimationContainer delay={0.6} className="py-4 h-full flex-1 flex flex-col space-y-1">
       {modes.map((item, index)=> (
         <button key={index} 
         onClick={() => handleClick(item.toLowerCase())}
         className={`bg-gradient-to-r text-slate-500 ${mode === item.toLowerCase() ? 'from-[#9B317B] via-[#682B7E] to-[#682B7E] text-white' : 'from-white to-white  via-white border '} border-slate-500  hover:from-[#682B7E]  hover:to-[#9B317B]  px-4 hover:text-white font-semibold  py-3 w-full flex items-center justify-center rounded-md transition-all duration-500 ease-in-out cursor-pointer`}
		    >  
         {item}
         </button>

       ))} 
        {/* <WhiteButton text="Intermediate" className={`${mode === 'intermediate' && 'from-[#9B317B] via-[#682B7E] to-[#682B7E]'}`} handleClick={() => handleClick('intermediate')}/>
        <WhiteButton text="Hard" className={`${mode === 'hard' && 'from-[#9B317B] via-[#682B7E] to-[#682B7E]'}`} handleClick={() => handleClick('hard')}/> */}
      </AnimationContainer>
      <div className="flex flex-col justify-center space-y-2 pt-16">
        <Button text="continue" handleClick={startQuiz}/>
        <div className="flex justify-between items-center p-4">
          <div></div>
        <button onClick={() => navigate('../article')} className="p-2  underline font-bold text-center">Read Articles</button>
        <ChatBot/>
        </div>
    </div>
  </div>
)
}

export default Level
