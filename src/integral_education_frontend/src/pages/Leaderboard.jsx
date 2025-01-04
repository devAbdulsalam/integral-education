import { useContext, useEffect, useState,useCallback} from 'react';
import HomeLayout from '../components/Layout';
import { integral_education_backend } from 'declarations/integral_education_backend';
import AuthContext from '../context/context';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';
import { IoArrowBack } from 'react-icons/io5';
import AnimationContainer from '../components/AnimationContainer';
import { WhiteButton } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/avatar.png';

const Score = () => {
    const [scores, setScores] = useState([]) 
    const [userScore, setUserScore] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const {user} = useContext(AuthContext)
	const navigate = useNavigate()
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

			{/* // // Leaderboard */}
			<div className="flex flex-col w-full md:w-3/4 mx-auto bg-white md:p-4 mt-2 min-h-[400px] md:min-h-[570px] h-auto p-2">
				<div className="w-full self-start flex justify-between items-center">
					<button
						className=" hover:bg-gray-200 text-slate-800 text-2xl font-semibold  py-3 p-2 rounded-full transition-all duration-500 ease-in-out"
						onClick={() => navigate(-1)}
					>
						<IoArrowBack />
					</button>
					<h2 className="font-semibold text-center">Leaderboard</h2>
					<button
						// disabled={loading}
						className="invisible text-blue-500 font-semibold  py-1 transition-all duration-500 ease-in-out"
						// onClick={() => navigate('/')}
					>
						Iforce
					</button>
				</div>
				< div className="h-full">
                {user && (<div className="bg-gradient-to-r from-[#9B317B] to-[#682B7E]  via-[#682B7E]  hover:to-[#9B317B]  text-white px-4 hover:text-white font-semibold  py-3 w-full flex flex-col items-center justify-center rounded-md transition-all duration-500 ease-in-out">
					<div className="animate text-center flex-1 h-full py-4">
						<img src={avatar} alt="avatar" className="w-20 h-20 mx-auto p-2" />
						<p className="text-sm">{user}</p>
						<h3 className="text-xl font-bold italic pt-4">{Number(userScore.rank)} (% of total points) points</h3>
					</div>
				</div>)}
				<div className="flex justify-end py-2 border-none ">
					<select name="days" id="days">
						<option value="today">Today</option>
						<option value="this week">This week</option>
						<option value="this month">This month</option>
						<option value="overall">Overall</option>
					</select>
				</div>
				
                {scores?.length > 0 && scores.map((item, index) => {
                        return (<AnimationContainer delay={0.6} key={index} className="flex p-1 bg-gray-100 rounded-md space-x-2 my-1 px-2 justify-between items-center">
						<div className="flex justify-center items-center">
							<p className="text-sm font-bold pr-1">{index + 1}</p>
							<img
								src={`https://ui-avatars.com/api/?name=${item[0]}&color=fff&font-size=0.33&rounded=true`}
								alt="avatar"
								className="w-16 h-16 mx-auto p-1 rounded-full"
							/>
							<p className="text-sm font-bold ml-1">{item[0]}</p>
						</div>
						<div>
							<h3 className="text-lg font-bold italic">{Number(item[1])} points</h3>
						</div>
					</AnimationContainer>
                        )
                    }) }
                    {scores.length > 100 && 
					<WhiteButton text="Load more" onClick={() => navigate('/')} />
                    }
				</div>
			</div>
            </main>
        </HomeLayout>

    {isLoading && <Loader/>}
        </>
    )
}


export default Score