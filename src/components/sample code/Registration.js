import React, {useState, useContext} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//Context

import { LoginContext } from '../../context/LoggedInContextProvider';

function Registration() {


const loginContext = useContext(LoginContext);

const {handleLogin} = loginContext;


const navigate = useNavigate()


  const handleSuccessfullAuth = (data) => {
    handleLogin(data)
    navigate("/", {replace: true})
    // navigate(0)
}

   const [signup, setSignup] = useState({

                                            email: "",
                                            password: "",
                                            password_confirmation: "",
                                            registrationErrors: ""
                                        })

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/registrations", {
            user: {
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
    }

    const changeHandler = (event) => {
        setSignup({
            ...signup,
            [event.target.name]: event.target.value
        })
    }



  return (
    <div className='min-h-screen mt-52'>
        <form onSubmit={submitHandler}>
        <label htmlFor="" className='block mx-2'>Email:</label>
            <input type="email" name='email' placeholder=' Please Enter Your Email' value={signup.email} onChange={changeHandler}
            className = "border p-2 mx-3"
              />
        <label htmlFor="" className='block mx-2'>Password:</label>
            <input type="password" name='password' placeholder=' Please Enter Your Password' value={signup.password} onChange={changeHandler}
            className = "border p-2 mx-3"
              />
        <label htmlFor="" className='block mx-2'>Confirm Password:</label>
            <input type="password" name='password_confirmation' placeholder=' Please Enter Your Confirm Password' value={signup.password_confirmation} onChange={changeHandler}
            className = "border p-2 mx-3"
              />
        <button type='submit'>Register</button>
        </form>

    </div>
  )
}

export default Registration