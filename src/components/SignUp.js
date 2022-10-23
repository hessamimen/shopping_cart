import React, {useState, useEffect} from 'react'
import {validate} from "../helpers/functions"

function SignUp() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        setErrors(validate(data))
    }, [data])
    
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


  return (
    <div style={{height: "81vh", marginTop: "100px", display: "flex", justifyContent: "center"}} >
        <form>
            <h2>Sign Up</h2>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={data.name} onChange={changeHandler}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={data.email} onChange={changeHandler}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={data.password} onChange={changeHandler}/>
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler}/>
            </div>
            <div>
                <label>I accept Terms of Privacy Policy</label>
                <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler}/>
            </div>
            <div>
                <a href="#">Login</a>
                <button type='submit'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp