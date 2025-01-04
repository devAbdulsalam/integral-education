import { createContext, useState } from "react";

export const AuthContextProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [mode, setMode] = useState('easy')

    return (
        <AuthContext.Provider value={{user, setUser, mode, setMode}}>{children}</AuthContext.Provider>
    )
}

const AuthContext = createContext()

export default AuthContext