import { useContext, useState } from 'react';
import { integral_education_backend } from 'declarations/integral_education_backend';
import { Link, useNavigate } from 'react-router-dom';
import HomeLayout from '../components/Layout';
import Loader from '../components/Loader'
import InstructionModal from '../components/InstructionModal'
import toast from 'react-hot-toast'
import AuthContext from '../context/context';
function App() {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInstruction, setIsInstruction] = useState(false);
  const navigate = useNavigate()
  const {setUser} = useContext(AuthContext)
  
  const handleSubmit = async (event) => {
    try{
      if(!name){
        return toast.error('Enter a valid name')
      }
    setIsLoading(true)
    
    integral_education_backend.greet(name).then((res) => {
      setUser(name)
      setIsLoading(false)
      setIsInstruction(res)
    });
    return false;
  }catch(error){
    console.log(error)
    setIsLoading(false)
  }
  }
  const handleCancle = () => {
    setIsInstruction(false)
  }
  const handleNext = () => {
    navigate('../quiz')
  }
  return (
    <>
    <HomeLayout>
    <main className='bg'>
      <div className='p-2 md:p-6'>
        <div className=' flex justify-center'>
          <img src="/logo2.svg" alt="DFINITY logo" className='text-center'/>
        </div>
        <h2 className=' text-blue-900 text-3xl font-semibold py-4 my-6 text-center'>Welcome</h2>
        <div  className='max-w-md mx-auto'>
          <div>
          <label htmlFor='name' className="text-left mb-0 text-base text-black">
								Name <span className="text-red-500">*</span>
							</label>
							<input
								className="input w-full h-[44px] rounded-md border border-gray-500 px-2 text-base"
								 id="name" alt="Name" placeholder='Enter your name' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="my-4 flex justify-center">
            <button type="submit"
             onClick={handleSubmit}
              className="bg-primary text-white transition ease-in-out hover:translate-y-1 hover:scale-110 duration-400 hover:text-white border border-primary rounded-md py-3 px-10 relative overflow-hidden"
            >
            Click Me!
            </button> 
          </div>
        </div>
      </div>     
    </main>
    </HomeLayout>
    {isLoading && <Loader/>}
    {isInstruction && <InstructionModal show={isInstruction} setShow={setIsInstruction} handleCancle={handleCancle} handleNext={handleNext}/>}
    </>
  );
}

export default App;

// ctr c
// dfx stop


// dfx start
// dfx deploy


//  npm install react-router-dom sweetalert2 headlessui @headlessui/react react-icons react-hot-toast