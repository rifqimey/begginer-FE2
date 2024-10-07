import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigation = useNavigate()
    const [isLogin, setIsLogin] = useState(false)
    const [showProfile, setShpwProfile] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setIsLogin(true)
        }
    }, [])
    return (
        <div>
            <div className="flex justify-around items-center px-10 bg-white fixed left-0 right-0 h-[100px] z-50">
                <div className="flex items-center gap-2 text-[#0B132A]">
                    <img src="/images/logo_coffe.svg" alt="Coffeku Logo" />
                    <span className="font-bold">Coffeku</span>
                </div>
                <div className="flex space-x-8 text-black text-[16px]" >
                    <a href="#home" className=" hover:text-[#6A4029] hover:font-bold hover:underline">Home</a>
                    <a href="#product" className=" hover:text-[#6A4029] hover:font-bold hover:underline">Product</a>
                    <a href="#yourcart" className=" hover:text-[#6A4029] hover:font-bold hover:underline">Your Cart</a>
                    <a href="#history" className=" hover:text-[#6A4029] hover:font-bold hover:underline">History</a>
                </div>
                {
                    isLogin ?
                        <div onClick={() => {
                            setShpwProfile(!showProfile)
                        }} className='h-10 w-10 relative bg-yellow-500  rounded-full cursor-pointer'>
                            {
                                showProfile &&
                                <div className='absolute flex flex-col gap-4 iten-start justify-start bg-white shadow-md right-8 top-6 p-4 rounded-md'>
                                    <Link className='text-xs' to={"/profile"}>profile</Link>
                                    <div onClick={() => {
                                        localStorage.removeItem("token")
                                        window.location.reload()
                                    }} className='text-xs'>LogOut</div>
                                </div>
                            }
                        </div> :
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => navigation("/signin")}
                                className="bg-white px-8 py-2 rounded-[16px] text-black font-bold hover:bg-[#FFBA33] hover:text-[#f1f0ef]">
                                Login </button>
                            <button
                                onClick={() => navigation("/signup")}
                                className="bg-[#6A4029] px-8 py-2 rounded-[16px] text-white font-bold hover:bg-[#FFBA33] hover:text-[#6A4029]">
                                Sign Up </button>
                        </div>
                } 

            </div>



        </div>

    )
}

export default Navbar


