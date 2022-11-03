import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginContext = React.createContext();

function LoggedInContextProvider({children}) {

  const [loginData, setLoginData] = useState({
                                               loggedInStatus: "NOT_LOGGED_IN",
                                               user: {}
                                            })

  const navigate = useNavigate()


    const handleLogin = (data) => {
        setLoginData({
            loggedInStatus: "LOGGED_IN",
            user: data
        })
    }

  return (
    <LoginContext.Provider value={{loginData, setLoginData, handleLogin}}>
      {children}
    </LoginContext.Provider>
  )
}



export default LoggedInContextProvider
