import React, {useState, useEffect} from 'react'

//Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Functions
import {validate} from "../helpers/functions"
import {notify} from '../helpers/toast'

function SignUp() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validate(data))
    }, [data, touched])
    
    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({
                ...data, [event.target.name]: event.target.checked
            }) 
            } else {
                setData({
                    ...data, [event.target.name]: event.target.value
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
    <div className='flex justify-center min-h-min mt-32 mb-16'>

        <form onSubmit={submitHandler} className='bg-black/10 hover:bg-black/20 h-fit p-8 rounded-xl shadow-2xl'>
            <h2 className='mb-5 py-1 border-b-2 border-b-black text-center text-2xl font-bold'>Sign Up</h2>
            
            <div className='flex flex-col w-full'>
                <label>Name</label>
                <input className='border rounded-lg mb-2 outline-lime-500 p-2' type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler}/>
                {errors.name && touched.name && <span className='text-xs text-red-600 -mt-2 ml-2'>* {errors.name}</span> }
            </div>
            
            <div className='flex flex-col w-full'>
                <label>Email</label>
                <input className='border rounded-lg mb-2 outline-lime-500 p-2' type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                {errors.email && touched.email && <span className='text-xs text-red-600 -mt-2 ml-2'>* {errors.email}</span> }
            </div>
            
            <div className='flex flex-col w-full'>
                <label>Password</label>
                <input className='border rounded-lg mb-2  outline-lime-500 p-2' type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                {errors.password && touched.password && <span className='text-xs text-red-600 -mt-2 ml-2'>* {errors.password}</span> }
            </div>
            
            <div className='flex flex-col w-full'>
                <label>Confirm Password</label>
                <input className='border rounded-lg mb-2  outline-lime-500 p-2' type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
                {errors.confirmPassword && touched.confirmPassword && <span className='text-xs text-red-600 -mt-2 ml-2'>* {errors.confirmPassword}</span> }
            </div>
            
            <div className=' w-full'>
                <label>I accept Terms of Privacy Policy</label>
                <input className='border rounded-lg mb-2  outline-lime-500 p-2 ml-2' type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler}/>
                {errors.isAccepted && touched.isAccepted && <p className='text-xs text-red-600 -mt-1 ml-2'>* {errors.isAccepted}</p> }
            </div>
            
            <div className='flex justify-around my-8 w-full'>
                <a className='w-20  p-2 rounded-lg' href="#">Login</a>
                <button className='w-20 bg-gray-500 p-2 rounded-lg text-white hover:bg-black/10 hover:border border-gray-600' type='submit'>Sign Up</button>
            </div>

        </form>
        <ToastContainer />
    </div>
  )
}

export default SignUp