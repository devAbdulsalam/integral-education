import { useContext, useState } from "react";
import { integral_education_backend } from "declarations/integral_education_backend";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../components/Layout";
import Loader from "../components/Loader";
import InstructionModal from "../components/InstructionModal";
import toast from "react-hot-toast";
import AuthContext from "../context/context";
import ChatBot from "../components/ChatBot";
import Button from "../components/Button";
import AnimationContainer from "../components/AnimationContainer";
import Level from "../components/Level";
function App() {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInstruction, setIsInstruction] = useState(false);
  const navigate = useNavigate();
  const { user, setUser, mode, setMode } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    try {
      if (!name) {
        return toast.error("Enter a valid name");
      }
      setIsLoading(true);

      integral_education_backend.greet(name).then((res) => {
        setUser(name);
        setIsLoading(false);
        // setIsInstruction(res)
      });
      return false;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const handleCancel = () => {
    setIsInstruction(false);
  };
  const handleNext = () => {
    navigate("../quiz");
  };
  const handleChangeLevel = (mode) => {
    console.log("handle;", mode);
    setMode(mode);
  };
  const startQuiz = () => {
    setIsInstruction(true);
  };
  return (
    <>
      <HomeLayout>
        {user ? (
          <Level
            mode={mode}
            handleClick={handleChangeLevel}
            startQuiz={startQuiz}
          />
        ) : (
          <main className="bg px-2 flex flex-col justify-center items-center w-full mx-auto bg-white md:p-4 mt-2 min-h-[400px] md:min-h-[570px] h-auto">
            <div className="py-20 my-1 w-full md:w-4/3 h-full flex flex-col justify-evenly items-center">
              <div className="self-start flex-1 h-full w-full text-center">
                <AnimationContainer
                  delay={0.6}
                  className="text-center"
                >
                  <h2 className="hero capitalize text-4xl md:text-6xl font-bold pt-4 italic">
                    Hi IForce
                  </h2>
                </AnimationContainer>
                <AnimationContainer delay={0.7}>
                  <h3 className="text-sm font-bold pt-2 pb-4 italic  my-4">
                    Welcome
                  </h3>
                </AnimationContainer>
              </div>
              <div className="w-full md:max-w-lg mx-auto my-10 h-fit">
                <div>
                  <label
                    htmlFor="name"
                    className="text-left mb-0 text-base text-black"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="input w-full h-[44px] rounded-md border border[#9B317B] px-2 text-base focus:outline-none focus:ring-2 focus:ring-[#9B317B]"
                    id="name"
                    alt="Name"
                    placeholder="Enter your name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="my-4 flex justify-center">
                  <Button handleClick={handleSubmit} text="Enter" />
                </div>
              </div>
            </div>
            <div className="flex justify-end text-right pb-4 px-4 w-full">
              <ChatBot />
            </div>
          </main>
        )}
      </HomeLayout>
      {isLoading && <Loader />}
      {isInstruction && (
        <InstructionModal
          show={isInstruction}
          setShow={setIsInstruction}
          handleCancel={handleCancel}
          handleNext={handleNext}
        />
      )}
    </>
  );
}

export default App;

// ctr c
// dfx stop

// dfx start
// dfx deploy

//  npm install react-router-dom sweetalert2 headlessui @headlessui/react react-icons react-hot-toast
