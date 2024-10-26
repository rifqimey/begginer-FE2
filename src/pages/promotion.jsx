import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/navbar';


const Promotion = () => {
    const [products, setProducts] = useState([]); // Variabel untuk menyimpan produk
    const navigate = useNavigate(); // Menggunakan useNavigate untuk memindahkan halaman

    // untuk mengambil produk dari API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/product');
                console.log('Fetched Products:', response.data); // Log data yang diterima
                setProducts(response.data); // Mengatur state produk
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    //untuk memastikan data ada
    console.log('Rendering Products:', products);

    const handleApplyCoupon = () => {
        // Pindah ke halaman yang diinginkan saat tombol diklik
        navigate('/detilProduct'); // Ubah '/coupon-page' ke URL yang diinginkan
    };

    return (
        <div>
            <section id="Products"></section>
            <Navbar />
            <div className="min-h-screen mt-28 bg-white flex flex-col outline-1 border-t-2  border-gray-300">
                {/* Konten Utama */}
                <main className="flex-grow flex">
                    <aside className="border-r-2 border-gray-300 w-65 bg-white p-4 outline-1">
                        <div>
                            <h1 className="text-3xl font-bold text-amber-900 pb-9 rounded-full">Promo For You</h1>
                            <p className="pb-9 text-black">
                                Coupon will be updated every weeks.<br />Check them out!
                            </p>
                        </div>
                        <div className="relative">
                            {/* Konten utama */}
                            <div className="relative bg-[#FF6A65] text-white p-10 mt-8  w-60 ml-5 mr-5 rounded-lg z-10">
                                <img src="images/menu/drum.png" alt="beef" className="w-full" />
                                <h2 className="text-lg text-stone-900 font-bold -mt-12">Drum Sticks</h2>
                                <p className="text-lg font-bold text-stone-900">20% OFF</p>
                                <p className="text-xs text-stone-900 mb-4">
                                    Buy 1 Choco Oreo and get 20% off for Drum Sticks
                                </p>
                                <div className="border-dotted border-t-2 border-black mb-4 w-full" />
                                <div>
                                    <h1 className="text-xs text-stone-900">COUPON CODE</h1>
                                    <h1 className="text-3xl font-bold text-stone-900">FNPR15RG</h1>
                                    <p className="text-xs w-48 text-stone-900 text-left">
                                        Valid until October 10th 2020
                                    </p>
                                </div>
                            </div>
                            <div className='absolute bottom-6 left-36'>
                                <div className="bg-red-950 text-white p-10 h-80 mt-3 ml-14 rounded-lg "></div>
                            </div>
                        </div>
                        <div>
                            <button
                                className="bg-amber-900 h-14 font-bold hover:bg-red-600 hover:text-black text-white p-2 mt-4 w-60 rounded-xl"
                                onClick={handleApplyCoupon} // Memanggil fungsi saat tombol diklik
                            >
                                Apply Coupon
                            </button>
                        </div>
                        <div className="text-xs mt-28">
                            <p className="font-bold justify-end -ml-32">Terms and Condition</p>
                            <ul className="text-gray-500 list-decimal p-1 pl-4 text-left">
                                <li>1. You can apply 1 coupon per day</li>
                                <li>2. For dine-in only</li>
                                <li>3. Buy 1 get 1 only for new users</li>
                                <li>4. Should have member card to apply coupon</li>
                            </ul>
                        </div>
                    </aside>
                    <section className="w-3/4 p-6">
                        <div className="justify-center text-gray-500 flex space-x-10 top-4 mb-4 text-[16px] gap-10">
                            <a href="#home" className="hover:text-[#6A4029] hover:font-bold hover:underline">Favorite Product</a>
                            <a href="#products" className="hover:text-[#6A4029] hover:font-bold hover:underline">Coffea</a>
                            <a href="#yourcart" className="hover:text-[#6A4029] hover:font-bold hover:underline">Non Coffea</a>
                            <a href="#history" className="hover:text-[#6A4029] hover:font-bold hover:underline">Foods</a>
                            <a href="#history" className="hover:text-[#6A4029] hover:font-bold hover:underline">Add on</a>
                        </div>
                        <div className="grid grid-cols-4 -mt-10 ml-14 px-10 py-10">
                            {products && products.length > 0 ? ( // Memastikan 'products' ada sebelum cek panjang array
                                products.map((product) => (
                                    <div key={product.id} className="bg-white shadow-md rounded-t-full text-center w-2/3 ml-4 my-4">
                                        <img
                                            src={product.image_url}
                                            alt={product.name || "Product Image"} // Menambahkan fallback text jika 'product.name' kosong
                                            className="h-40 object-cover rounded-lg mb-2 mx-auto mt-6"
                                        />
                                        <div className="font-bold text-xl">{product.name || "Unnamed Product"}</div> {/* Fallback jika tidak ada nama produk */}
                                        <div className="text-amber-900 font-bold text-lg">{`IDR ${product.price.toLocaleString()}`}</div> {/* Menambahkan format penulisan harga */}
                                    </div>
                                ))
                            ) : (
                                <div className="text-center col-span-4">No products available</div> // Pesan jika tidak ada produk
                            )}
                        </div>
                    </section>
                </main>
                <div className="container-footer bg-slate-50 h-[400px]">
                    <div className="row flex flex-row justify-around pt-[150px] -mt-20 px-[20px] gap-[120px]">
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
                        <div className="footer-right flex flex-row gap-[150px] justify-center mx-auto">
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
                                    <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Coffe Shop</a></li>
                                    <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">About Us</a></li>
                                    <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Contact Us</a></li>
                                    <li><a href="#" className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;
