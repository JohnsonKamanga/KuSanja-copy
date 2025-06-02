import React from 'react'
import { NavLink } from "react-router-dom";

function SignIn(){

    return(
        <div className='min-h-screen flex flex-col bg-[#293040] items-center justify-center font-sora mt-3 p-3'>
        <div className='lg:w-[55%'>

            <form className='max-w-[400px] w-full mx-auto p-4'>

                <h2 className='text-4xl text-[#d5b263] font bold text-center py-6'>KuSanja</h2>

                <div className='flex flex-col py-2 text-[#d5b263]'>
                    <div>Username</div>
                    <input className='border p-2' type="text"  placeholder="Enter full name" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2 text-[#d5b263]'>
                    <div>Email</div>
                    <input className='border p-2' type="email"  placeholder="Enter email" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2 text-[#d5b263]'>
                    <div>Password</div>
                    <input className='border p-2' type="password"  placeholder="Enter password" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <button className='border w-full my-5 py-2 bg-[#d5b263] hover:bg-[#d8a31a] text-[#293040]'>Sign in</button>

                <div>
                    <p className='flex items-center text-[#d5b263]'><input className='mr-2' type="checkbox"/>Remember Me</p><br/>
                    <p className='flex items-center text-[#d5b263]'>Dont have an account? click below</p>
                </div>

                <button className='border w-full my-5 py-2 bg-[#b68a1b] hover:bg-[#d8a31a] text-[#293040]'><NavLink to="/SignUp">Go to Sign Up</NavLink></button>
                <button className='border w-full my-5 py-2 bg-[#c9ad8b] hover:bg-[#d8a31a] text-[#293040]'><NavLink to="/">Go to Home Page</NavLink></button>
            </form>
        </div>
    </div>
    )
}

export default SignIn;