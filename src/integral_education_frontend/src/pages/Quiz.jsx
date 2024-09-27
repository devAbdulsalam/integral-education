import { useState, useContext, useEffect} from 'react';
import HomeLayout from '../components/Layout';
import ScoreModal from '../components/ScoreModal';
import { questions } from '../data';
import { useNavigate } from 'react-router-dom';
import { integral_education_backend } from 'declarations/integral_education_backend';
import  AuthContext from '../context/context'

function App() {
  const [showQuestion, setShowQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isScoreModal, setIsScoreModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  useEffect(() => {
	if(!user){
		navigate('../index')
	}}, [user])

  const handleNext = async() => {
    if (showQuestion < questions.length - 1) {
      setShowQuestion(showQuestion + 1);
      setSelectedOption(null); // Reset selected option for the next question
    } else {
      try{
        // const data = {name: user, point: Number(correctAnswer)}
        // console.log('data', data) 
        let name = user.toString();
        let point = Number(correctAnswer);
        // console.log('data', name, point)        
        const result = await integral_education_backend.putPoint({name}, {point})
        console.log('quiz result',result)
        setIsScoreModal(true);
      }catch(error){
        console.log('quiz error', error)
      }
		// Show score modal after the last question
    }
  };

  const checkAnswer = (option, answer) => {
    if (option === answer) {
      setCorrectAnswer(correctAnswer + 1);
    }
    setSelectedOption(option); // Mark the selected option
  };

  const handleCancle = () => {
    navigate('../index')
  }
  const handleComplete = async () => {
    navigate('../scores')
    // try{

    //   const result = await integral_education_backend.putPoint({name: user, point: Number(correctAnswer)})
    //   console.log('quiz result',result)
    // }catch(error){
    //   console.log('quiz error', error)
    // }
  }

  return (
	<>
    <HomeLayout>
      <main className="bg">
        <div className="p-2 w-full mx-auto my-10 md:max-w-md bg-white md:p-8 rounded-lg shadow border border-green-200">
          <h2 className="text-xl font-semibold py-4 text-center">Quiz Me</h2>
          <div className="flex justify-between items-center border-b border-primary/50 p-2">
            <h2 className="text-xl font-semibold">{user}</h2>
            <div className='px-1 rounded-sm text-white bg-primary'>Score: {correctAnswer} / {questions.length}</div>
          </div>
          
          {/* Show current question */}
          <div className="flex flex-col h-full justify-center align-center mt-1">
            <div>
              <h2 className="font-bold">{showQuestion + 1}. {questions[showQuestion].question}</h2>
            </div>

            {questions[showQuestion].options.map((option, i) => (
              <button
                key={i}
                onClick={() => checkAnswer(option, questions[showQuestion].answer)}
                className={`text-left p-2 border my-2 
                  ${selectedOption === option ? (option === questions[showQuestion].answer ? 'border-green-500' : 'border-red-500') : 'hover:bg-gray-400 hover:text-white'}
                `}
                disabled={selectedOption !== null} // Disable after selecting an option
              >
                {option}
              </button>
            ))}

            <div className="mt-4 p-2 flex justify-between items-center border-t border-primary/50">
              <div>
                {showQuestion + 1} of {questions.length} Questions
              </div>
              <button
                onClick={handleNext}
                disabled={selectedOption === null} // Disable if no option is selected
                className="hover:bg-primary px-2 transition ease-in-out hover:translate-y-1 hover:scale-110 duration-400 hover:text-white border border-primary rounded-md py-2 md:px-10 relative overflow-hidden"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </HomeLayout>
	<ScoreModal score={{correctAnswers : correctAnswer, totalQuestions: questions.length}} show={isScoreModal} setShow={setIsScoreModal} handleCancle={handleCancle} handleComplete={handleComplete}/>
	</>
  );
}

export default App;



// // ctr c
// // dfx stop

// // dfx start
// // dfx deploy
