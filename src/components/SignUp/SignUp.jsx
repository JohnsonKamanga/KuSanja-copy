import React from 'react'
import { NavLink } from "react-router-dom";

function SignUp(){

    return(
        <div className='min-h-screen flex flex-col bg-[#293040] items-center justify-center font-sora mt-3 p-3'>
        <div className='lg:w-[55%'>

            <form className='max-w-[400px] w-full mx-auto p-4'>

                <h2 className='text-4xl text-[#d5b263] font bold text-center py-6'>KuSanja</h2>

                <div className='flex flex-col py-2 text-[#d5b263]'>
                    <div>First Name</div>
                    <input className='border p-2' type="text"  placeholder="Enter first name" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2 text-[#d5b263]'>
                    <div>Last Name</div>
                    <input className='border p-2' type="text"  placeholder="Enter last name" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2 text-[#d5b263]'>
                    <div>User Name</div>
                    <input className='border p-2' type="text"  placeholder="Enter username name" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2 text-[#d5b263]'>
                    <div>Phone Number</div>
                    <input className='border p-2' type="text"  placeholder="Enter phone number" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2 text-[#d5b263]'>
                    <div>Email</div>
                    <input className='border p-2' type="email"  placeholder="Enter email" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2 text-[#d5b263]'>
                    <div>Date of Birth</div>
                    <input className='border p-2' type="text"  placeholder="Enter Date of birth" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2 text-[#d5b263]'>
                    <div>Password</div>
                    <input className='border p-2' type="password"  placeholder="Enter password" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2 text-[#d5b263]'>
                    <div>Confirm Password</div>
                    <input className='border p-2' type="password"  placeholder="Enter confirm password" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <button className='border w-full my-5 py-2 bg-[#d5b263] hover:bg-[#d8a31a] text-[#293040]'>Create Account</button>

                <div>
                    <p className='flex items-center text-[#d5b263]'>Already have an account? click below</p>
                </div>

                <button className='border w-full my-5 py-2 bg-[#b68a1b] hover:bg-[#d8a31a] text-[#293040]'><NavLink to="/SignIn">Go to sign in</NavLink></button>
                <button className='border w-full my-5 py-2 bg-[#c9ad8b] hover:bg-[#d8a31a] text-[#293040]'><NavLink to="/">Go to Home Page</NavLink></button>
            </form>
        </div>
    </div>
    )
}

export default SignUp;