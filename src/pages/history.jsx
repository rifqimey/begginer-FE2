import React, { useState } from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';

const History = () => {
    const [checkedItems, setCheckedItems] = useState([]); // State untuk checkbox yang dicentang
    const items = new Array(15).fill({
        name: "Veggie tomato mix",
        price: "IDR 34,000",
        delivery: "Delivered to Table 4",
    });

    // untuk mengatur centang semua checkbox
    const handleSelectAll = () => {
        if (checkedItems.length === items.length) {
            setCheckedItems([]); // Jika semua dicentang, hapus centang semua
        } else {
            setCheckedItems(items.map((_, index) => index)); // Centang semua
        }
    };

    // untuk mengatur centang pada checkbox individu
    const handleCheckboxChange = (index) => {
        if (checkedItems.includes(index)) {
            setCheckedItems(checkedItems.filter(i => i !== index)); // Hapus item dari daftar yang dicentang
        } else {
            setCheckedItems([...checkedItems, index]); // Tambahkan item ke daftar yang dicentang
        }
    };

    return (
        <>
            <div className="min-h-[180vh] bg-gray-200 mt-20">
                <Navbar />
                <main className="container mx-auto p-6">
                    <h1
                        className="text-center text-2xl mb-10 mt-20 text-white font-bold"
                        style={{
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                            letterSpacing: '0.05em',
                        }}
                    >
                        <span className="block text-4xl">Let's see what you have bought!</span>
                        <span className="block text-xl">Select Item to Delete</span>
                    </h1>
                    <div className='flex justify-end mb-8' onClick={handleSelectAll}>
                        <p className='inline-block border-b-2 border-b-white font-bold text-xl cursor-pointer text-[#FFFFFF]'>
                            {checkedItems.length === items.length ? 'Deselect All' : 'Select All'}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 mx-3">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-white rounded-xl shadow p-4 space-x-2"
                                style={{ width: "390px", height: "120px" }}>
                                <img
                                    src="/images/menu/veggie_tomato.png"
                                    alt="Veggie Tomato Mix"
                                    className="w-32 h-32 object-cover rounded-full mt-3"
                                />
                                <div className='flex flex-col text-left'>
                                    <h3 className="font-bold text-xl">{item.name}</h3>
                                    <p className="text-[#895537]">{item.price}</p>
                                    <p className="text-[#895537]">{item.status}</p>
                                    <p className="text-[#895537]">{item.delivery}</p>
                                </div>
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-6 w-6 mt-10 text-brown-600 "
                                    checked={checkedItems.includes(index)} // Centang checkbox sesuai dengan state
                                    onChange={() => handleCheckboxChange(index)} // Update state saat checkbox diubah
                                />
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default History;
