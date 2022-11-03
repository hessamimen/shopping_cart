import React, {useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginContext = React.createContext();

function LoggedInContextProvider({children}) {

  const [loginData, setLoginData] = useState({
                                               loggedInStatus: "NOT_LOGGED_IN",
                                               user: {}
                                            })

//   const navigate = useNavigate()


    const handleLogin = (data) => {
        setLoginData({
            loggedInStatus: "LOGGED_IN",
            user: data
        })
    }

    const checkLoginStatus = () => {
        axios.get("http://localhost:3000/logged_in", {withCredentials: true})
        .then(res => {
            if (res.data.logged_in && loginData.loggedInStatus === "NOT_LOGGED_IN"){
                setLoginData({
                    loggedInStatus: "LOGGED_IN",
                    user: res.data.user
                })
            } else if (!res.data.logged_in && loginData.loggedInStatus === "LOGGED_IN"){
                setLoginData({
                    loggedInStatus: "NOT_LOGGED_IN",
                    user: {}
                })
            }
        })
        .catch(error => {
            console.log("check login error", error)
        })
    }

    useEffect(() => {
        checkLoginStatus()
    }, [])

    const handleLoggout = () => {
        setLoginData({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        })
    }

  return (
    <LoginContext.Provider value={{loginData, setLoginData, handleLogin, handleLoggout}}>
      {children}
    </LoginContext.Provider>
  )
}



export default LoggedInContextProvider
