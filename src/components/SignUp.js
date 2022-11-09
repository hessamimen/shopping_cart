import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import User from './User';

//Context
import { LoginContext } from '../context/LoggedInContextProvider';

//Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Functions
import {validate} from "../helpers/functions"
import {notify} from '../helpers/toast'

function SignUp() {

    const loginContext = useContext(LoginContext);

    const {handleLogin} = loginContext;

    const navigate = useNavigate()


  const handleSuccessfullAuth = (data) => {
    handleLogin(data)
    navigate("/", {replace: true})
    // navigate(0)
}
//STATES **********************************
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({})
    const [signup, setSignup] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })


    useEffect(() => {
        setErrors(validate(signup))
    }, [signup, touched])
    
    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setSignup({
                ...signup, [event.target.name]: event.target.checked
            }) 
            } else {
                setSignup({
                    ...signup, [event.target.name]: event.target.value
                })
        }
    }

    const focusHandler = event => {
        setTouched({
            ...touched, [event.target.name]: true
        })
    }

    const submitHandler = event => {
        event.preventDefault();
   
        if (!Object.keys(errors).length) {
            notify("Successfully Signed Up", "success")
            axios.post("http://localhost:3000/registrations", {
                user: {
                    name: signup.name,
                    email: signup.email,
                    password: signup.password,
                    password_confirmation: signup.password_confirmation
                }
            }, 
            {withCredentials: true}
            ).then(res => {
                if (res.data.status === "created") {
                    handleSuccessfullAuth(res.data)
                    
                }
            })
            .catch(error => {
                console.log(`Error: ${error}`)
            })
        } else {
            notify("Invalid Data!!!", "error");

            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }

    }



  return (

    <div className='min-h-screen'>

      {
          loginContext.loginData.loggedInStatus === "LOGGED_IN" ? <User/> :

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
                        {/* //**************************************** NAME *****************************************  */}
                        <label>Name</label>
                        <input className={errors.name && touched.name ? 'outline-red-500 rounded-lg mb-2  p-2' : 'border rounded-lg mb-2 outline-lime-500 p-2'} 
                        type="text" 
                        name="name" 
                        value={signup.name} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                        {errors.name && touched.name && <span className='text-xs text-red-600 -mt-2 ml-2'>* {errors.name}</span> }
                    </div>
                    
                    <div className='flex 
                                    flex-col 
                                    w-full'>
                        {/* //**************************************** EMAIL *****************************************  */}

                        <label>Email</label>
                        <input className={errors.email && touched.email ? 'border rounded-lg mb-2 outline-red-500 p-2' : 'border rounded-lg mb-2 outline-lime-500 p-2' }
                        type="text" 
                        name="email" 
                        value={signup.email} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                        {errors.email && touched.email && <span className='text-xs text-red-600 -mt-2 ml-2'>* {errors.email}</span> }
                    </div>
                    
                    <div className='flex 
                                    flex-col 
                                    w-full'>
                        {/* //**************************************** PASSWORD *****************************************  */}

                        <label>Password</label>
                        <input className={errors.password && touched.password ? 'border rounded-lg mb-2  outline-red-500 p-2' : 'border rounded-lg mb-2  outline-lime-500 p-2' } 
                        type="password" 
                        name="password" 
                        value={signup.password} 
                        onChange={changeHandler} onFocus={focusHandler}/>
                        {errors.password && touched.password && <span className='text-xs text-red-600 -mt-2 ml-2'>* {errors.password}</span> }
                    </div>
                    
                    <div className='flex 
                                    flex-col 
                                    w-full'>
                        {/* //**************************************** CONFIRM PASSWORD *****************************************  */}

                        <label>Confirm Password</label>

                        <input className={errors.confirmPassword && touched.confirmPassword ? 'border rounded-lg mb-2  outline-red-500 p-2' : 'border rounded-lg mb-2  outline-lime-500 p-2' }
                        type="password" 
                        name="confirmPassword" 
                        value={signup.confirmPassword} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                        {errors.confirmPassword && touched.confirmPassword && <span className='text-xs text-red-600 -mt-2 ml-2'>* {errors.confirmPassword}</span> }
                    </div>
                    
                    <div className=' w-full'>

                    {/* //**************************************** ACCEPT POLICY ***************************************** */}

                        <label>I accept Terms of Privacy Policy</label>
                        <input className='border 
                                        rounded-lg 
                                        mb-2  
                                        outline-lime-500 
                                        p-2 
                                        ml-2' 
                            type="checkbox" 
                            name="isAccepted" 
                            value={signup.isAccepted} 
                            onChange={changeHandler} onFocus={focusHandler}/>
                        {errors.isAccepted && touched.isAccepted && <p className='text-xs text-red-600 -mt-1 ml-2'>* {errors.isAccepted}</p> }
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
                                    border
                                    box-border
                                    hover:border-gray-400
                                    ' 
                                
                            href="/login">Login</a>
                        <button className='w-20 
                                        bg-gray-500 
                                        p-2 
                                        rounded-lg 
                                        text-white 
                                        hover:bg-black/50 
                                        border-gray-600
                                        cursor-default' 
                                        type='submit'>Sign Up</button>
                    </div>

                </form>
                <ToastContainer />
            </div>
      }

    </div>
  )
}

export default SignUp