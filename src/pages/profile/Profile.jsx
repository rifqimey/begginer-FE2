import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const token = localStorage.getItem('token')
    const getProfile = async () => {
        try {
            const response = await axios.get("http://localhost:5000/users/profile", {
                headers : {
                    Authorization : `bearer ${token}`
                }
            })
        } catch (error) {
            console.log({ error });

        }
    }

    useEffect(()=>{
        getProfile()
    }, [])
    return (
        <div>
            <Navbar />
            <div className=''>
                <div className='flex items-start justify-center mt-14 gap-12 px-28 py-32'>
                    <div className='w-1/4 h-[400px] shadow-xl flex flex-col items-center justify-center p-8 gap-4 rounded-md'>
                        <img src="/images/profile.png" alt="profile img" className='rounded-full object-cover' />
                        <div className='text-xl font-bold'>zulaikha</div>
                        <div className='text-md'>zulaikha@gmail.com</div>
                    </div>
                    <div className='w-3/4  h-[400px] p-8 shadow-xl rounded-md' >
                        <div className='flex items-center justify-between gap-10'>
                            <div className='text-xl font-bold text-gray-600'>contacts</div>
                            <div className='text-lg relative'>
                                <img className="bulat w-12 h-12 left-8 " src="/images/bg_pena.png" alt="Circle" />
                                <img className="love absolute top-3  left-3  " src="/images/icon/pena.png" alt="Icon" /> 
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-16 mt-2'>
                            <div className='flex items-start flex-col text-gray-400  gap-2 justify-start '>
                                <label htmlFor="email-addres">Email Addres :</label>
                                <input id="email-addres" type="text" className='w-full outline-none border-b-2 border-black text-black' />
                            </div>
                            <div className='flex items-start flex-col text-gray-400  gap-2 justify-start '>
                                <label htmlFor="email-addres">Mobile Number :</label>
                                <input id="email-addres" type="text" className='w-full outline-none border-b-2 border-black text-black' />
                            </div>
                            <div className='flex items-start flex-col text-gray-400 gap-2 justify-start '>
                                <label htmlFor="email-addres">Delivery order:</label>
                                <input id="email-addres" type="text" className='w-full outline-none border-b-2 border-black text-black' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-12 px-28 py-14'>
                    <div className='w-3/4 h-[400px]  p-8 gap-4 shadow-xl rounded-md'>
                        <div className='flex items-start justify-between mb-4'>
                            <div className='text-xl font-bold text-gray-800'>Contacts</div>
                            <div className='text-lg relative'>
                                <img className="bulat w-12 h-12 left-8 " src="/images/bg_pena.png" alt="Circle" />
                                <img className="love absolute top-3  left-3  " src="/images/icon/pena.png" alt="Icon" /> 
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10 mt-2">
                            {/* Kolom Kiri: 3 Baris */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start flex-col text-gray-400 gap-2 justify-start">
                                    <label htmlFor="email-address">Display Name:</label>
                                    <input
                                        id="email-address"
                                        type="text"
                                        className="outline-none border-b-2 border-black text-black"
                                        style={{ width: '120%' }}
                                    />
                                </div>

                                <div className="flex items-start flex-col text-gray-400 gap-2 justify-start">
                                    <label htmlFor="mobile-number">First Name:</label>
                                    <input
                                        id="first-name"
                                        type="text"
                                        className="outline-none border-b-2 border-black text-black"
                                        style={{ width: '120%' }}
                                    />
                                </div>
                                <div className="flex items-start flex-col text-gray-400 gap-2 justify-start">
                                    <label htmlFor="last-name">Last Name:</label>
                                    <input
                                        id="last-name"
                                        type="text"
                                        className="outline-none border-b-2 border-black text-black"
                                        style={{ width: '120%' }}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start ml-20 flex-col text-gray-400 gap-2 justify-start">
                                    <label htmlFor="additional-info">DD/MM/YY</label>
                                    <input
                                        id="additional-info"
                                        type="text"
                                        className="outline-none border-b-2 border-black text-black"
                                        style={{ width: '90%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4 h-[400px] flex flex-col items-center justify-center p-8 gap-4 rounded-md'>
                        <button className='shadow-md bg-yellow-950  hover:bg-red-800 ] w-72 h-12 rounded-2xl text-white font-bold'>Save Change</button>
                        <button className='shadow-md bg-yellow-500 hover:bg-orange-800 ] hover:text-white w-72 h-12 rounded-2xl text-amber-950 font-bold'>Cancel</button>
                        <div className="flex flex-col items-start gap-4 mt-6">
                            <button className="outline-1 outline-gray-500 shadow-md text-amber-950 bg-white w-72 h-12 rounded-2xl outline font-bold text-left pl-4 flex justify-between items-center">
                                Edit Password
                                <span className="mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-black"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                            <button className="outline-1 outline-gray-500 shadow-md text-amber-950 bg-white w-72 h-12 rounded-2xl outline font-bold text-left pl-4 flex justify-between items-center">
                                Logout
                                <span className="mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-black"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>

            </div>
            <div className="container-footer bg-[#ecebeb] h-[500px] mt-[100px]">
                <div className="row flex flex-row justify-around pt-[150px] px-[20px] gap-[120px]">
                    {/* Left Section */}
                    <div className="footer-left flex flex-col gap-[20px]">
                        <div className="logo-coffe flex flex-row items-center gap-[10px] font-bold">
                            <img src="/images/logo_coffe.svg" alt="logo" />
                            <span>Coffee Shop</span>
                        </div>
                        <div className="p-icon flex flex-col gap-[20px]">
                            <div className="text-coffe">
                                <p>
                                    Coffee Shop is a store that sells some good <br /> meals, and
                                    especially coffee. We provide <br /> high quality beans.
                                </p>
                            </div>
                            <div className="img-icon flex flex-row gap-4">
                                <img className="logo-sosmed" src="/images/Facebook.svg" alt="Facebook" />
                                <img className="logo-sosmed" src="/images/Twitter.svg" alt="Twitter" />
                                <img className="logo-sosmed" src="/images/Instagram.svg" alt="Instagram" />
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="footer-right flex flex-row gap-[150px]">
                        {/* Product Column */}
                        <div className="footer-col flex flex-col gap-[30px]">
                            <div className="judul-list">
                                <h4 className="font-bold">Product</h4>
                            </div>
                            <ul className="list-footer flex flex-col items-start gap-[20px]">
                                <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Download</a></li>
                                <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Pricing</a></li>
                                <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Locations</a></li>
                                <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Countries</a></li>
                                <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Blog</a></li>
                            </ul>
                        </div>

                        {/* Engage Column */}
                        <div className="footer-col flex flex-col gap-[30px]">
                            <div className="judul-list">
                                <h4 className="font-bold">Engage</h4>
                            </div>
                            <ul className="list-footer flex flex-col items-start gap-[20px]">
                                <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Coffee Shop ?</a></li>
                                <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">FAQ</a></li>
                                <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">About Us</a></li>
                                <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Privacy Policy</a></li>
                                <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
