import { useNavigate } from "react-router-dom"

const BackBotton = () => {
    const navigate = useNavigate()
    return (
        <button
                                className=" hover:bg-gray-200 text-slate-800 text-2xl font-semibold  py-3 p-2 rounded-full transition-all duration-500 ease-in-out"
                                onClick={() => navigate( '/')}
                            >
                                <IoArrowBack />
                            </button>
    )
}