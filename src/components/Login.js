import React, {useState, useContext} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//Context:
import { LoginContext } from '../context/LoggedInContextProvider';

function Login() {

    const loginContext = useContext(LoginContext);
    const {handleLogin, handleLoggout} = loginContext;

    const navigate = useNavigate()

    const [signIn, setSignIp] = useState({
        email: "",
        password: "",
        loginErrors: ""
    })


    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/sessions", {
            user: {
                email: signIn.email,
                password: signIn.password
            }
        }, 
        {withCredentials: true}
        ).then(res => {
            if (res.data.logged_in === true) {
                handleSuccessfullAuth(res.data)
                
            }
        })
        .catch(error => {
            console.log(`Error: ${error}`)
        })
    }

    const changeHandler = (event) => {
        setSignIp({
            ...signIn,
            [event.target.name]: event.target.value
        })
    }

    
    const handleSuccessfullAuth = (data) => {
        handleLogin(data)
        navigate("/", {replace: true})
        // navigate(0)
    }

    // ************ TEST LOGOUT ************
const handleLogoutClick = () => {
    axios.delete("http://localhost:3000/logout", {withCredentials: true})
    handleLoggout();
    navigate("/", {replace: true})
}

// const handleLogoutClick = () => {
//     axios.delete("http://localhost:3000/logout", {withCredentials: true})
//     .then(res => {
//         handleLoggout();
//         navigate("/", {replace: true})
//     } )
//     .catch(error => {
//         console.log("logout error", error)
//     })
// }

  return (
<div className='flex 
                    justify-center 
                    min-h-min 
                    mt-32 
                    mb-28'>

        <form onSubmit={submitHandler} 
            className='bg-black/10 
                        h-fit 
                        p-8 
                        rounded-xl 
                        shadow-2xl'>
            <h2 className='mb-5 
                            py-1 
                            border-b-2 
                            border-b-black 
                            text-center 
                            text-2xl 
                            font-bold'>Sign Up</h2>
            
            <div className='flex 
                            flex-col 
                            w-full'>

                {/* //**************************************** EMAIL *****************************************  */}

                <label>Email</label>
                <input className={'border rounded-lg mb-2 outline-lime-500 p-2' }
                /* <input className={errors.email && touched.email ? 'border rounded-lg mb-2 outline-red-500 p-2' : 'border rounded-lg mb-2 outline-lime-500 p-2' } */
                type="text" 
                name="email" 
                value={signIn.email} 
                onChange={changeHandler} 
                />
                {/* {errors.email && touched.email && <span className='text-xs text-red-600 -mt-2 ml-2'>* {errors.email}</span> } */}
            </div>
            
            <div className='flex 
                            flex-col 
                            w-full'>
                {/* //**************************************** PASSWORD *****************************************  */}

                <label>Password</label>
                <input className={'border rounded-lg mb-2  outline-lime-500 p-2' } 
                type="password" 
                name="password" 
                value={signIn.password} 
                onChange={changeHandler} />
            </div>
            
            {/* **************************************** BUTTONs *****************************************  */}

            <div className='flex 
                            justify-around 
                            my-8 
                            w-full'>

                <a className='w-20  
                              p-2 
                              rounded-lg
                              cursor-default
                              hover:border 
                              border-gray-600' 
                        
                    href="/signup">Sign Up</a>
                <button className='w-20 
                                bg-gray-500 
                                p-2 
                                rounded-lg 
                                text-white 
                                hover:bg-black/10 
                                hover:border 
                                border-gray-600
                                cursor-default' 
                                type='submit'>Login</button>
            </div>

        </form>
        {/* <ToastContainer /> */}
    </div>
  )
}

export default Login