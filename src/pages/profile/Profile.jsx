import React from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const getProfile = async () => {
        try {
            const response = axios.get("http://localhost:5000/")
        } catch (error) {
            console.log({ error });

        }
    }

    const navigate = useNavigate()
    return (
        <div>
           <Navbar/>
            <div className='absolute flex flex-col gap-4 iten-start justify-start bg-yellow-500 cursor-pointer shadow-md right-8 top-6 p-4 rounded-md'>
                <div onClick={() => {
                   navigate("/signin")
                }} className='text-xs'>LogOut</div>
            </div>
            <div className=''>
                <div className='flex items-start justify-center gap-12 px-28 py-14'>
                    <div className='w-1/4 h-[400px] shadow-xl flex flex-col items-center justify-center p-8 gap-4 rounded-md'>
                        <img src="/images/profile.png" alt="profile img" className='rounded-full object-cover' />
                        <div className='text-xl font-bold'>zulaikha</div>
                        <div className='text-md'>zulaikha@gmail.com</div>
                    </div>
                    <div className='w-3/4  h-[400px] p-8 gap-4 shadow-xl rounded-md' >
                        <div className='flex items-center justify-between'>
                            <div className='text-lg text-gray-800'>contact</div>
                            <div className='text-lg'>item pen</div>
                        </div>
                        <div className='grid grid-cols-2 gap-4 mt-2'>
                            <div className='flex items-start flex-col gap-2 justify-start '>
                                <label htmlFor="email-addres">Email Addres :</label>
                                <input id="email-addres" type="text" className='w-full outline-none border-b-2 border-black' />
                            </div>
                            <div className='flex items-start flex-col gap-2 justify-start '>
                                <label htmlFor="email-addres">Mobile Number :</label>
                                <input id="email-addres" type="text" className='w-full outline-none border-b-2 border-black' />
                            </div>
                            <div className='flex items-start flex-col gap-2 justify-start '>
                                <label htmlFor="email-addres">Delivery order:</label>
                                <input id="email-addres" type="text" className='w-full outline-none border-b-2 border-black' />
                            </div>
                            <input type="text" className='border border-gray-200 p-4 rounded-md' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-12 px-28 py-14'>
                    <div className='w-3/4 h-20 bg-green-500'></div>
                    <div className='w-1/4 h-20 bg-blue-500'></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
