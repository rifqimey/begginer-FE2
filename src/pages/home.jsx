import React from 'react'
import Navbar from './components/navbar'

const HomePage= () => {
  return (
    <div>
      <Navbar/>
      <div className="relative">
                <div className="absolute flex justify-center items-center top-[100px] w-full">
                    <img src="/images/background.png" alt="Background" className="w-[99%]" />
                </div>
                <div className="relative top-[100px] pl-[120px] z-10">
                    <div className="pt-[24px] pr-[30px] pl-[750px] relative">
                        <div className="flex items-center bg-white rounded-full w-[300px] h-[55px] shadow-md">
                            <input
                                className="flex-1 bg-transparent h-full outline-none pl-10 pr-2 rounded-full"
                                type="text"
                                placeholder="Search"
                                style={{
                                    backgroundImage: 'url(/images/search.png)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'left 10px center',
                                    paddingLeft: '40px'
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='relative top-[60px] pl-[120px] z-10'>
                    <div className="judul flex flex-col items-start justify-start pt-12 font-bold text-white text-justify">
                        <h1 className="text-5xl ">Start Your Day with <br /> Coffee and Good Meals</h1>
                    </div>
                    <div className="judul text-2xl flex flex-col items-start justify-start gap-6 pt-6 text-white text-justify">
                        <p>We provide high quality beans, good taste, and healthy <br /> meals made by love just for you. Start your day with us <br /> for a bigger smile!</p>
                    </div>
                    <div className=" get started judul flex flex-col items-start justify-start">
                        <button className="btn-get bg-[#FFBA33] text-[#6A4029] mt-10 font-extrabold px-2 py-4 w-[250px] h-[60px] hover:bg-[#6A4029] hover:text-[#FFBA33] rounded-lg">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <div className="box bg-white flex relative h-[200px] w-[80%] top-[150px] right-[-10%] rounded-lg shadow-md z-10">
                <div className="isi-box flex justify-around items-center w-full">
                    <div className="icon-left flex items-center gap-5">
                        <img className="w-12 h-12" src="/images/icon/user.png" alt="User Icon" />
                        <div className="staff flex flex-col justify-center items-center">
                            <h3 className="text-2xl">90+</h3>
                            <span>Staff</span>
                        </div>
                    </div>
                    <div className="icon-center flex items-center gap-3">
                        <img className="staff w-12 h-12" src="/images/icon/location.png" alt="Location Icon" />
                        <div className="stores flex flex-col justify-center items-center">
                            <h3 className="text-xl">30+</h3>
                            <span className="text-sm">Stores</span>
                        </div>
                    </div>
                    <div className="icon-right flex items-center justify-center pr-2">
                        <div className="icon-love relative flex justify-center items-center">
                            <img className="bulat w-12 h-12" src="/images/icon/server.png" alt="Circle" />
                            <img className="love absolute w-5 h-5" src="/images/love_img.png" alt="Love Icon" />
                        </div>
                        <div className="customers flex flex-col justify-center items-center">
                            <h3 className="text-2xl">800+</h3>
                            <span>Customers</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-provide flex flex-row justify-center items-center static pt-[250px] pl-[50px] pr-0">
                <div className="img-provide w-[550px] mr-24">
                    <img src="/images/provide_img.png" alt="" />
                </div>
                <div className="text-provide flex flex-col gap-5 text-left">
                    <h1 className="text-4xl font-bold">
                        We Provide Good Coffee <br /> and Healthy Meals
                    </h1>
                    <p className="text-base text-gray-600">
                        You can explore the menu that we provide with fun and <br /> have their own taste and make your day better.
                    </p>

                    <ul className="space-y-3">
                        <li className="list-none text-gray-600 flex items-center gap-2">
                            <div className=" rounded-full w-6 h-6 flex justify-center items-center">
                                <img src="/images/Ceklis.png" alt="Checkmark" />
                            </div>
                            <span>High quality beans</span>
                        </li>
                        <li className="list-none text-gray-600 flex items-center gap-2">
                            <div className=" rounded-full w-6 h-6 flex justify-center items-center">
                                <img src="/images/Ceklis.png" alt="Checkmark" />
                            </div>
                            <span>Healthy meals, you can request the ingredients</span>
                        </li>
                        <li className="list-none text-gray-600 flex items-center gap-2">
                            <div className=" rounded-full w-6 h-6 flex justify-center items-center">
                                <img src="/images/Ceklis.png" alt="Checkmark" />
                            </div>
                            <span>Chat with our staff to get better experience for ordering</span>
                        </li>
                        <li className="list-none text-gray-600 flex items-center gap-2">
                            <div className=" rounded-full w-6 h-6 flex justify-center items-center">
                                <img src="/images/Ceklis.png" alt="Checkmark" />
                            </div>
                            <span>Free member card with a minimum purchase of IDR 200.000.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-people h-[1100px] w-full bg-[#f8f8f8]">
                <div className="content-people flex flex-col text-center pt-[60px] gap-[10px]">
                    <h1 className="text-3xl font-bold">Here is People’s Favorite</h1>
                    <p className='text-gray-600'>Let’s choose and have a bit taste of people’s favorite. It might be yours too!</p>
                </div>

                {/* Box People */}
                <div className="box-people flex flex-row justify-evenly pt-[100px] w-80%">

                    {/* Box 1 - Hazelnut Latte */}
                    <div className="box-1 flex flex-col h-[760px] w-[330px] bg-white border-2 border-[#DDDDDD] rounded-[10px] items-center justify-around hover:border-[#6A4029]">
                        <img className="relative top-[20px] mb-[-70px]" src="/images/icon/Hazelnut.png" alt="Hazelnut Latte" />
                        <h3>Hazelnut Latte</h3>
                        <img className='relative top-[10px] mb-[-10px] w-48 h-48' src="/images/icon/menu1.png" alt='menu' />
                        <div className="idr flex flex-col mb-[20px] gap-[20px] items-center">
                            <h2>IDR 25.000</h2>
                            <button className="btn-ordernow w-[177.88px] h-[45px] rounded-[50px] bg-white border-2 border-[#FFBA33] text-[#6A4029] font-bold text-[16px] hover:bg-[#FFBA33]">
                                Select
                            </button>
                        </div>
                    </div>

                    {/* Box 2 - Pinky Promise */}
                    <div className="box-2 flex flex-col h-[760px] w-[330px] bg-white border-2 border-[#DDDDDD] rounded-[10px] items-center justify-around hover:border-[#6A4029]">
                        <img className="relative top-[20px] mb-[-70px] w-52 h-52" src="/images/icon/pinky_promise.png" alt="Hazelnut Latte" />
                        <h3>Pinky Promise</h3>
                        <img className='relative top-[10px] mb-[-10px] w-48 h-48' src="/images/menu3.png" alt='menu' />
                        <div className="idr-pinky flex flex-col mb-[20px] gap-[20px] items-center">
                            <h2>IDR 30.000</h2>
                            <button className="btn-select1 w-[177.88px] h-[45px] rounded-[50px] bg-white border-2 border-[#FFBA33] text-[#6A4029] font-bold text-[16px] hover:bg-[#FFBA33]">
                                Select
                            </button>
                        </div>
                    </div>

                    {/* Box 3 - Chicken Wings */}
                    <div className="box-2 flex flex-col h-[760px] w-[330px] bg-white border-2 border-[#DDDDDD] rounded-[10px] items-center justify-around hover:border-[#6A4029]">
                        <img className="relative top-[20px] mb-[-70px] w-52 h-52" src="/images/icon/chiken.png" alt="Hazelnut Latte" />
                        <h3>Chiiken Wings</h3>
                        <img className='relative top-[10px] mb-[-10px] w-48 h-48' src="/images/icon/menu31.png" alt='menu' />
                        <div className="idr-pinky flex flex-col mb-[20px] gap-[20px] items-center">
                            <h2>IDR 45.000</h2>
                            <button className="btn-select1 w-[177.88px] h-[45px] rounded-[50px] bg-white border-2 border-[#FFBA33] text-[#6A4029] font-bold text-[16px] hover:bg-[#FFBA33]">
                                Select
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="visit bg-[#f8f8f8] h-[1000px] pb-[80px] -mt-16">
                <div className="content-visit pt-[100px] flex flex-col items-center justify-center">
                    <div className="judul-content flex flex-col gap-[24px] text-center">
                        <h1 className="text-3xl font-bold">Visit Our Store in the <br /> Spot on the Map Below</h1>
                        <p>
                            See our store in every city on the spot and spend your good day there. <br /> See you soon!
                        </p>
                    </div>
                    <div className="peta flex justify-center items-center relative top-[200px]">
                        <img className="w-[75%] pb-[80px] -mt-16" src="/images/icon/peta.png" alt="Global Map" />
                    </div>
                </div>
            </div>
            * <div className="container-partner">
                    <h1 className="text-center py-12">Our Partner</h1>
                    <div className="partner flex justify-center">
                        <div className="content-partner flex flex-col items-center relative">
                            <div className="logo-partner flex flex-row justify-between items-center gap-5 mb-24">
                                <img src="/images/netfilx.svg" alt="netfilx" />
                                <img src="/images/reddit.svg" alt="reddit" />
                                <img src="/images/amazon.svg" alt="amazon" />
                                <img src="/images/discord.svg" alt="discord" />
                                <img src="/images/spotify.svg" alt="spotify" />
                            </div>
                        </div>
                    </div>
                </div> 
    </div>
  )
}

export default HomePage
