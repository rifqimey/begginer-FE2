import React from 'react'
import Footer from '../components/footer'


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
           <Footer/>
        </div>
    )
}

export default Forgot
