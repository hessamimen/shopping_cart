import React, {useContext} from 'react'
import axios from 'axios';
//Context
import { LoginContext } from '../context/LoggedInContextProvider';
import { useNavigate } from 'react-router-dom';

function User() {

    const loginContext = useContext(LoginContext);
    const {loginData, handleLoggout} = loginContext

    const navigate = useNavigate()
    const handleLogoutClick = () => {
        axios.delete("http://localhost:3000/logout", {withCredentials: true})
        handleLoggout();
        navigate("/", {replace: true})
    }

  return (
    <div className='flex flex-col items-center content-center my-20'>

        <form 
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
                            font-bold'>WELOCM TO OUR WESITE</h2>
            
            <div className='flex 
                            flex-col 
                            w-full'>

                <label>Name</label>
                <p className={'border rounded-lg mb-2 outline-lime-500 p-2' }
                >{loginData.user.name}</p>
                <label>Email</label>
                <p className={'border rounded-lg mb-2 outline-lime-500 p-2' }
                >{loginData.user.email}</p>
                <button className='w-30 
                                bg-gray-500 
                                p-2 
                                rounded-lg 
                                text-white 
                                hover:bg-black/10 
                                hover:border 
                                border-gray-600
                                cursor-default' 
                                type='submit'
                                onClick={()=> handleLogoutClick()}
                                >LOG OUT</button>
            </div>
        </form>
    </div>
  )
}

export default User