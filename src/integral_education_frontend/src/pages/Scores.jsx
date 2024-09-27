import { useContext, useEffect, useState,useCallback} from 'react';
import HomeLayout from '../components/Layout';
import { integral_education_backend } from 'declarations/integral_education_backend';
import AuthContext from '../context/context';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';

const Score = () => {
    const [scores, setScores] = useState([]) 
    const [userScore, setUserScore] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const {user} = useContext(AuthContext)
    useEffect(() => {
        const fetchScore = async () => {
            try{
            setIsLoading(true)
            if(user){
                const name = user
                const userRank = await integral_education_backend.leaderBoardPosition({name})
                const userPoint = await integral_education_backend.getPoint({name})
                const userScore = {rank:userRank, userPoint:userPoint}
                console.log(userScore)
                setUserScore(userScore)
            }
            const data = await integral_education_backend.leaderEntries()
            const sortedData = data?.sort((a, b) =>  Number(b[1]) -Number(a[1]));
            console.log('sortedData', sortedData)
            setScores(sortedData)
            setIsLoading(false)
        }catch (error){
            setIsLoading(false)
            toast.error('Something went wrong')
            console.log('error',error)
        }
        }
        fetchScore()
    }, [user])

    return(
        <>
        <HomeLayout>
            <main>
                {user && (
                    <>
                    <h2 className="text-xl text-green-500 text-center font-bold">My Rank</h2>              
                    <div className='flex justify-center'>                    
                        <div 
                            className="flex justify-evenly items-center gap-5 mt-5 w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
                            >
                                <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="text-green-400 w-16 h-16"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                    />
                                </svg>
                                <h4 className="inline text-gray-500 text-md capitalize">Name: {user}</h4>
                                </div>
                                <div className="text-left">
                                    <h2 className="text-xl font-semibold pb-2">Score: {Number(userScore.userPoint)}</h2>
                                    <h4 className="inline text-gray-500 text-md capitalize">Rank: {Number(userScore.rank)} (% of total points)</h4>
                                </div>
                        </div>
                    </div>
                    </>
                 )}
                <section className="bg-white p-2 md:p-5 md:m-3 rounded mt-2">
                 <h2 className="text-xl text-green-500 text-center font-bold my-2">Leaderboard</h2>
                    {scores?.length > 0 && scores.map((item, index) => {
                        return (
                            <div key={index}
                            className="flex justify-evenly items-center gap-5 mx-auto mt-5 w-full md:w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
                            >
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="text-green-400 w-16 h-16"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                        />
                                    </svg>                                
                                    <h4 className="inline text-gray-500 text-md capitalize">Name: {item[0]}</h4>
                                </div>
                                    <div className="text-left">
                                        <h2 className="text-xl font-semibold pb-2">Score: {Number(item[1])}</h2>
                                        <h4 className="inline text-gray-500 text-md capitalize">Rank: {index + 1}</h4>
                                    </div>
                        </div>
                        )
                    }) }
                </section>
            </main>
        </HomeLayout>

    {isLoading && <Loader/>}
        </>
    )
}


export default Score