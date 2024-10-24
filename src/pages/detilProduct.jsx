import React, { useState } from 'react';  // Pastikan useState diimpor
import Footer from './components/footer';
import Navbar from './components/navbar';

const DetilProduct = () => {
  const [size, setSize] = useState('R');
  const [deliveryMethod, setDeliveryMethod] = useState('Dine In');
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-28  bg-gray-100 flex flex-col items-center">
        <div className="max-w-7xl w-full p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 mb-36">
          {/* Bagian Kiri: Gambar Produk dan tombol */}
          <div className="bg-gray-100 p-6 flex flex-col items-center">
            <img src="/images/menu/cold_brew.png" alt="Cold Brew" className="w-3/4 h-3/4  object-cover rounded-lg" />
            <h2 className="text-5xl font-bold font-sans text-slate-900 mt-2">COLD BREW</h2>
            <p className="text-slate-900 text-3xl mt-1">IDR 30,000</p>
            {/* Tombol berada di bawah */}
            <div className="mt-6 w-72  mx-auto">
              <button className="bg-orange-950 text-white w-full py-4 mt-4 rounded-xl text-lg font-bold hover:bg-yellow-600">Add to Cart</button>
              <button className="bg-yellow-500 text-white w-full py-4 mt-4 rounded-xl text-lg font-bold hover:bg-red-950">Ask a Staff</button>
            </div>
          </div>
        </div>

        {/* Bagian Kanan: Detail Produk, Pilihan Ukuran, Metode Pengiriman */}
        <div className="absolute top-36 right-44 bg-white p-6 rounded-lg shadow-lg w-96 h- m-4">
          <div className="mb-2">
            <h3 className="text-xl text-left text-[#6A4029]">
              Delivery only on <strong className="font-bold">Monday to Friday</strong> at <strong className="font-bold">1 – 7 pm</strong>
            </h3>
            <p className="text-xl text-[#6A4029] text-left mt-6">
              Cold brewing is a method of brewing that combines ground coffee and cold water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
            </p>
          </div>

          {/* Pilihan Ukuran */}
          <div className="mb-6 text-center">
            <h3 className="text-lg font-bold text-black mt-10">Choose a size</h3>
            <div className="flex justify-center space-x-10 mt-2">
              {['R', 'L', 'XL'].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-[#FFBA33] font-bold ${size === s ? 'bg-yellow-800 font-bold text-white' : 'text-gray-800'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pilihan Metode Pengiriman */}
        <div className="mt-10 absolute bottom-0 right-44">
          <h3 className="text-lg font-semibold mb-4">Choose Delivery Method</h3>
          <div className="flex space-x-4 -mb-20">
            {['Dine In', 'Door Delivery', 'Pick up'].map((method) => (
              <button
                key={method}
                onClick={() => setDeliveryMethod(method)}
                className={`py-2 px-7 rounded-xl ${deliveryMethod === method ? 'bg-[#6A4029] text-white' : 'bg-gray-50 border text-gray-400'}`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>
        <div className="fmt-20 absolute bottom-0 right-44 flex items-center space-x-4 -mb-40">
          <label htmlFor="time" className="text-lg whitespace-nowrap">
            Set time:
          </label>
          <input
            type="text"
            id="time"
            placeholder="Enter the time you'll arrive"
            className="border-b border-gray-300 bg-slate-100 focus:outline-none text-gray-500 pb-1 w-80"
            style={{ borderBottomWidth: '2px' }}
          />
        </div>

        <div className="flex absolute justify-between items-center space-x-10 mt-[820px]">
          <div className="flex items-center justify-between w-full max-w-4xl p-4 rounded-lg shadow-md bg-white">
            <div className="flex space-x-4 pr-10">
              <img src="/images/menu/drum.png" alt="Cold Brew" className="w-32 h-32 rounded-full object-cover mt-5" />
              <div className="flex flex-col justify-center items-left">
                <h4 className="font-bold text-xl text-left">DRUM STICKS</h4>
                <p className="text-lg text-left">x1 (Large)</p>
                <p className="text-lg text-left">x1 (Regular)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 pl-52">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-[#E7AA3685] text-black w-10 h-10 flex justify-center items-center rounded-full"
              >
                -
              </button>
              <span className="text-xl font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-[#E7AA3685] text-black w-10 h-10 flex justify-center items-center rounded-full"
              >
                +
              </button>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="bg-yellow-500 text-black font-bold text-xl px-16 py-16 rounded-3xl hover:bg-yellow-600">
            Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default DetilProduct;
