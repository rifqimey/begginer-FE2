import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
    const navigate = useNavigate()
    return (

        <div>
            <Navbar />
            <div className="relative">
                <div className="absolute flex justify-center items-center mt-32 w-full">
                    <img src="/images/background.png" alt="Background" className="w-[99%]" />
                </div>
                <div className="relative top-[120px] pl-[120px]">
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
                <section id="/"></section>
                <div className='relative top-[60px] pl-[120px]'>
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
            <div className="box bg-white flex relative h-[200px] w-[80%] top-[190px] right-[-10%] rounded-lg shadow-md">
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
            <div className="container-partner">
                <h1 className="text-center py-12 font-bold text-4xl">Our Partner</h1>
                <div className=" partner flex justify-center">
                    <div className="content-partner flex flex-col items-center relative">
                        <div className="logo-partner flex flex-row justify-between items-center gap-5 mb-24">
                            <img src="/images/icon/sponsored.png" alt="netfilx" />
                        </div>
                    </div>
                </div>
                <div className="container-slider">
                    <div className="judul-slider flex flex-col items-center gap-5 mb-20 text-center">
                        <h1 className="text-3xl font-bold">
                            Loved by Thousands of <br /> Happy Customers
                        </h1>
                        <p className="text-lg">
                            These are the stories of our customers who have visited us with great <br /> pleasure.
                        </p>
                    </div>
                    <div className="box-slider flex justify-between w-[90%] mx-auto h-[400px]">
                        <div className="box-slider-1 w-[380px] h-[230px] bg-[#f8f8f8] border-2 border-[#DDDDDD] rounded-lg hover:border-[#6A4029] hover:bg-white p-5">
                            <div className="nama-1 flex items-center gap-5">
                                <img src="/images/Viezh.png" alt="foto" className="w-[15%]" />
                                <div className="nama-viezh-robert flex justify-between w-full">
                                    <div className="robert flex flex-col">
                                        <span className="font-bold text-lg">Viezh Robert</span>
                                        <span className="text-sm">Warsaw, Poland</span>
                                    </div>
                                    <div className="rating flex items-center">
                                        <img src="/images/Ratting.png" alt="Rating" className="w-4 h-4 mr-1" />
                                        <img src="/images/star_ratting.png" alt='Ratting' className="w-7 h-7" />
                                    </div>
                                </div>
                            </div>
                            <div className="coment mt-5">
                                <p className="text-base">“Wow... I am very happy to spend my whole day here. The Wi-Fi is good, and the coffee and meals though. I like it here!! Very recommended!"</p>
                            </div>
                        </div>
                        <div className="box-slider-1 w-[380px] h-[230px] bg-[#f8f8f8] border-2 border-[#DDDDDD] rounded-lg hover:border-[#6A4029] hover:bg-white p-5">
                            <div className="nama-1 flex items-center gap-5">
                                <img src="/images/Yessika.png" alt="chat" className="w-[15%]" />
                                <div className="nama-viezh-robert flex justify-between w-full">
                                    <div className="robert flex flex-col">
                                        <span className="font-bold text-lg">Yessica Christy</span>
                                        <span className="text-sm">Shanxi, China</span>
                                    </div>
                                    <div className="rating flex items-center">
                                        <img src="/images/Ratting.png" alt="Rating" className="w-4 h-4 mr-1" />
                                        <img src="/images/star_ratting.png" alt='chat' className="w-7 h-7" />
                                    </div>
                                </div>
                            </div>
                            <div className="coment mt-5">
                                <p className="text-base">“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte."</p>
                            </div>
                        </div>
                        <div className="box-slider-1 w-[380px] h-[230px] bg-[#f8f8f8] border-2 border-[#DDDDDD] rounded-lg hover:border-[#6A4029] hover:bg-white p-5">
                            <div className="nama-1 flex items-center gap-5">
                                <img src="/images/Kim.png" alt="" className="w-[15%]" />
                                <div className="nama-viezh-robert flex justify-between w-full">
                                    <div className="robert flex flex-col">
                                        <span className="font-bold text-lg">Kim Young Jou</span>
                                        <span className="text-sm">Seoul, South Korea</span>
                                    </div>
                                    <div className="rating-3 flex items-center gap-2">
                                        <span className="text-lg">4.5</span>
                                        <img src="/images/star_ratting.png" alt='Ratting' className="w-7 h-7" />
                                    </div>
                                </div>
                            </div>
                            <div className="coment mt-5">
                                <p className="text-base">“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!”</p>
                            </div>
                        </div>
                    </div>
                    <div className="navigasi flex justify-between items-center w-[85%] mx-auto mt-[-50px]">
                        <div className="titik">
                            <img src="/images/titik.png" alt="Navigation dots" className="w-28 h-15" />
                        </div>
                        <button className="panah flex items-center bottom-400 right-1 ">
                            <img src="/images/icon/left.png" alt="Left arrow" className="w-12 h-12 " />
                            <img className="w-28 h-28 mt-4" src="/images/right.png" alt="Right arrow " />
                        </button>
                    </div>
                </div>
            </div>
            <div className="promo flex justify-center left-44 bg-white h-[200px] w-[75%] top-[20px] shadow-lg rounded-lg relative">
                <div className="content-promo flex flex-row justify-between w-4/5 items-center px-2 pb-8">
                    <div className="text-promo">
                        <h1 className="text-black text-left text-4xl font-bold pt-6">
                            Check our promo <br /> today!
                        </h1>
                        <p className="text-black text-left p-2">Let's see the deals and pick yours!</p>
                    </div>
                    <div onClick={() => {
                        navigate("/Promotion");
                    }} className="btn-promo">
                        <button className="bg-[#FFBA33] w-[250px] h-[55px] font-extrabold text-[#6A4029] mt-5 shadow-md hover:bg-[#6A4029] hover:text-white rounded-xl">
                            See Promo
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
