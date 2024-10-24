import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigation = useNavigate();
    const location = useLocation(); // Ambil lokasi saat ini
    const [isLogin, setIsLogin] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLogin(true);
        }
    }, []);

    // Fungsi untuk menentukan apakah tautan saat ini aktif
    const isActive = (path) => location.pathname === path;

    return (
        <div>
            <div className="flex fixed z-10 justify-around items-center px-10 bg-white top-0 left-0 right-0 h-[100px]">
                <div className="flex items-center mr-48 gap-2 text-[#0B132A]">
                    <img src="/images/logo_coffe.svg" alt="Coffeku Logo" />
                    <span className="font-bold">Coffeme</span>
                </div>
                <div className="text-[#4F5665] flex space-x-8 text-lg gap-10">
                    <Link to="/" className={`hover:text-[#6A4029] hover:font-bold hover:underline ${isActive('/') ? 'text-[#6A4029] font-bold' : ''}`}>Home</Link>
                    <Link to="/promotion" className={`hover:text-[#6A4029] hover:font-bold hover:underline ${isActive('/promotion') ? 'text-[#6A4029] font-bold' : ''}`}>Product</Link>
                    <Link to="/yourcart" className={`hover:text-[#6A4029] hover:font-bold hover:underline ${isActive('/yourcart') ? 'text-[#6A4029] font-bold' : ''}`}>Your Cart</Link>
                    <Link to="/history" className={`hover:text-[#6A4029] hover:font-bold hover:underline ${isActive('/history') ? 'text-[#6A4029] font-bold' : ''}`}>History</Link>
                </div>
                {
                    isLogin ? (
                        <div className="flex items-center space-x-4 ml-24">
                            {/* Message Icon */}
                            <div className='h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
                                <img src='/images/search.png' alt='Message' className='h-6 w-6' />
                            </div>
                            {/* Search Icon */}
                            <div className='h-10 w-10 rounded-full cursor-pointer flex items-center justify-center'>
                                <img src='/images/chat.png' alt='Search' className='h-6 w-6' />
                            </div>

                            {/* Profile Button */}
                            <div onClick={() => {
                                setShowProfile(!showProfile);
                            }} className='h-10 w-10 relative bg-yellow-500 rounded-full cursor-pointer'>
                                {
                                    showProfile &&
                                    <div className='absolute flex flex-col gap-4 iten-start justify-start bg-white shadow-md left-8 top-2 p-4 rounded-md'>
                                        <Link className='text-xs' to={"/profile"}>Profile</Link>
                                        <div onClick={() => {
                                            localStorage.removeItem("token");
                                            window.location.reload();
                                            window.location.replace("/");
                                        }} className='text-xs'>LogOut</div>
                                    </div>
                                }
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4 ml-24">
                            <button
                                onClick={() => navigation("/signin")}
                                className="bg-white px-8 py-2 rounded-[16px] text-black font-bold hover:bg-[#FFBA33] hover:text-[#f1f0ef]">
                                Login
                            </button>
                            <button
                                onClick={() => navigation("/signup")}
                                className="bg-[#6A4029] px-8 py-2 rounded-[16px] text-white font-bold hover:bg-[#FFBA33] hover:text-[#6A4029]">
                                Sign Up
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Navbar;
