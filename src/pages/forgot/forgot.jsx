import React from 'react'


const Forgot = () => {
    return (
        
        <div>
            <div className="container-forgot">
                <div className="judul text-center flex flex-col items-center justify-center py-20 text-5xl font-bold  ">
                    <h1>Forgot your password?</h1>
                    <p className='text-lg font-bold'>Don’t worry, we got your back!</p>
                </div>
                <form className="flex flex-row justify-evenly px-12 pt-10 gap-1 ">
                    <input
                        type="text"
                        className="w-[800px] h-24 border border-black rounded-xl text-2xl px-4 "
                        placeholder="Enter your email address to get link"
                    />
                    <button className="w-64 h-24 rounded-xl bg-yellow-500 text-black font-bold text-2xl hover:bg-[#6A4029] hover:text-white">
                        Send
                    </button>
                </form>
                <h3 className="text-center pt-24 pb-7 font-bold text-xl">Click here if you didn’t receive any link <br /> in 2 minutes</h3>
                <div className="btn-resend-link flex justify-center">
                    <button className="w-[554px] h-24 rounded-xl bg-[#6A4029] text-white font-bold text-2xl hover:bg-yellow-500 hover:text-[#6A4029]">
                        Resend Link
                    </button>
                </div>
                <div className="time flex justify-center pb-10 pt-7 text-lg font-bold ">
                    <span>01:54</span>
                </div>
            </div>

            {/* Footer */}
            <div className="container-footer bg-slate-50 h-[500px]">
                <div className="row flex flex-row justify-around pt-[100px] px-[20px] gap-[100px]">
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
                    <div className="footer-right flex flex-row gap-[150px]">
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

export default Forgot
