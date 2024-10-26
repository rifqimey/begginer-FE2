import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


const Profile = () => {
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
                    <div className='w-3/4 h-[400px] p-8 shadow-xl rounded-md'>
                        <div className='flex items-center justify-between gap-10'>
                            <div className='text-xl font-bold text-gray-600'>Contacts</div>
                            <div className='text-lg relative'>
                                <img className="bulat w-12 h-12 left-8" src="/images/bg_pena.png" alt="Circle" />
                                <img className="love absolute top-3 left-3" src="/images/icon/pena.png" alt="Icon" />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-16 mt-2'>
                            <div className='flex items-start flex-col text-gray-400 gap-2 justify-start'>
                                <label htmlFor="email-address">Email Address :</label>
                                <input id="email-address" type="text" className='w-full outline-none border-b-2 border-black text-black' />
                            </div>
                            <div className='flex items-start flex-col text-gray-400 gap-2 justify-start'>
                                <label htmlFor="mobile-number">Mobile Number :</label>
                                <input id="mobile-number" type="text" className='w-full outline-none border-b-2 border-black text-black' />
                            </div>
                            <div className='flex items-start flex-col text-gray-400 gap-2 justify-start'>
                                <label htmlFor="delivery-order">Delivery Order:</label>
                                <input id="delivery-order" type="text" className='w-full outline-none border-b-2 border-black text-black' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-12 px-28 py-14'>
                    <div className='w-3/4 h-[400px] p-8 gap-4 shadow-xl rounded-md'>
                        <div className='flex items-start justify-between mb-4'>
                            <div className='text-xl font-bold text-gray-800'>Contacts</div>
                            <div className='text-lg relative'>
                                <img className="bulat w-12 h-12 left-8" src="/images/bg_pena.png" alt="Circle" />
                                <img className="love absolute top-3 left-3" src="/images/icon/pena.png" alt="Icon" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10 mt-2">
                            {/* Kolom Kiri: 3 Baris */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start flex-col text-gray-400 gap-2 justify-start">
                                    <label htmlFor="display-name">Display Name:</label>
                                    <input
                                        id="display-name"
                                        type="text"
                                        className="outline-none border-b-2 border-black text-black"
                                        style={{ width: '120%' }}
                                    />
                                </div>

                                <div className="flex items-start flex-col text-gray-400 gap-2 justify-start">
                                    <label htmlFor="first-name">First Name:</label>
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
                                    <label htmlFor="birth-date">Birth Date (DD/MM/YY):</label>
                                    <input
                                        id="birth-date"
                                        type="text"
                                        className="outline-none border-b-2 border-black text-black"
                                        style={{ width: '90%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4 h-[400px] flex flex-col items-center justify-center p-8 gap-4 rounded-md'>
                        <button className='shadow-md bg-yellow-950 hover:bg-red-800 w-72 h-12 rounded-2xl text-white font-bold'>Save Change</button>
                        <button className='shadow-md bg-yellow-500 hover:bg-orange-800 hover:text-white w-72 h-12 rounded-2xl text-amber-950 font-bold'>Cancel</button>
                        <div className="flex flex-col items-start gap-4 mt-6">
                            <button className="outline-1 outline-gray-500 shadow-md text-amber-950 bg-white w-72 h-12 rounded-2xl font-bold text-left pl-4 flex justify-between items-center">
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
                            <button className="outline-1 outline-gray-500 shadow-md text-amber-950 bg-white w-72 h-12 rounded-2xl font-bold text-left pl-4 flex justify-between items-center">
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
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
