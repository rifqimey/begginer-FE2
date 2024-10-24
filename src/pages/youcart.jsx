import React, { useState } from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Youcart = () => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleConfirmPayment = () => {
    if (selectedPayment) {
      Swal.fire({
        icon: 'success',
        title: 'Pembelian Berhasil',
        text: 'Terima kasih sudah berbelanja!',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'error',
        text: 'Silakan pilih metode pembayaran.',
        confirmButtonText: 'Pilih Metode'
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-[180vh] mt-28 bg-gray-100 flex flex-col items-center p-5">
        <h1
          className="text-xl mb-2 pb-2 pr-52 text-white font-bold transform -translate-x-72"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            letterSpacing: '0.05em',
          }}
        >
          <span className="block text-left text-4xl">Checkout your</span>
          <span className="block text-left text-4xl">item now</span>
        </h1>
        <main className="w-full max-w-5xl flex flex-col lg:flex-row mt-8 space-y-6 lg:space-y-0 lg:space-x-6">
          <div
            className="flex-grow bg-white p-6 rounded-lg h-3/6"
            style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)' }}
          >
            <h2 className="text-4xl font-bold mb-20">Order Summary</h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-lg">
                <img
                  src="/images/menu/hazzelnut_latte.png"
                  alt="hazzelnut"
                  className="w-24 h-24 object-cover rounded-md mb-6"
                />
                <div className="flex flex-col justify-center mb-7 ml-7">
                  <p className="font-medium">Hazzelnut Latte</p>
                  <p className="font-medium text-left">x1</p>
                  <p className="font-medium text-left">Regular</p>
                </div>
              </div>
              <p className="text-lg mb-7 mr-4">IDR 24.000</p>
            </div>
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center text-lg">
                <img
                  src="/images/menu/chicken_fire.png"
                  alt="Drum sticks"
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex flex-col justify-center mb-3 ml-7">
                  <p className="font-medium">Drum sticks</p>
                  <p className="font-medium text-left">x1</p>
                  <p className="font-medium text-left">Regular</p>
                </div>
              </div>
              <p className="text-lg mb-5 mr-4">IDR 24.000</p>
            </div>

            <section id="yourcart"></section>

            <div className="border-t text-right border-gray-300 py-2">
              <div className="flex justify-between text-left text-xl mb-4 mt-4">
                <p className="w-1/2">SUBTOTAL</p>
                <p className="w-1/2 text-right mr-2">IDR 48.000</p>
              </div>
              <div className="flex justify-between text-left text-xl mb-4">
                <p className="w-1/2">TAX &FEES </p>
                <p className="w-1/2 text-right mr-2">IDR 20.000</p>
              </div>
              <div className="flex justify-between text-left text-xl mb-20">
                <p className="w-1/2">SHIPPING</p>
                <p className="w-1/2 text-right mr-2">IDR 20.000</p>
              </div>
              <div className="flex w-full justify-between font-bold text-3xl mb-6">
                <p className="w-1/2">TOTAL</p>
                <p className="w-full mr-12">IDR 88.000</p>
              </div>
            </div>
          </div>

          <div className="flex-grow lg:w-1/3 space-y-6">
            <div className="ml-20">
              <h2
                className="text-xl -mt-5 mb-2 pb-2 pr-48 text-white font-bold"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                  letterSpacing: '0.05em',
                  transform: 'scale(1.05)'
                }}
              >
                Address details
              </h2>
              <div className="relative bg-white shadow-md p-8 mb-8 w-96 lg:max-w-md ml-2  text-left rounded-2xl" style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)' }}>
                <p className="text-gray-600 text-lg border-b pb-2">
                  <span className="font-bold text-lg">Delivery</span> to Iskandar Street
                </p>
                <p className="text-gray-600 border-b pt-2 pb-2 text-lg">
                  Km 5 refinery road, opposite republic road, effurun, Jakarta
                </p>
                <p className="text-gray-600 pt-2 text-lg">+62 81348287878</p>
              </div>
            </div>
            <div className="ml-24">
              <h2
                className="text-xl mb-2 pb-2 pr-44 text-white font-bold"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                  letterSpacing: '0.05em',
                  transform: 'scale(1.05)'
                }}
              >
                Payment Method
              </h2>
              <div className="relative bg-white shadow-md p-8 mb-5 w-full lg:max-w-lg rounded-2xl" style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.9)' }}>
                <div className="space-y-2">
                  <label className="flex items-center border-b pb-2">
                    <input
                      type="radio"
                      name="payment"
                      value="Card"
                      onChange={handlePaymentChange}
                      className="mr-2 w-5 h-5 border-2 border-blue-500 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer"
                    />
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <img src="/images/icon/bg_card.png" alt="Background Card" className="w-full h-full" />
                      <img src="/images/icon/card.png" alt="Card" className="absolute w-5 h-5" />
                    </div>
                    <span className="ml-4 text-lg">Card</span>
                  </label>

                  <label className="flex items-center border-b pb-2">
                    <input
                      type="radio"
                      name="payment"
                      value="Bank Account"
                      onChange={handlePaymentChange}
                      className="mr-2 w-5 h-5 border-2 border-blue-500 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer"
                    />
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <img src="/images/icon/bank.png" alt="Background Card" className="w-full h-full" />
                      <img src="/images/icon/bank1.png" alt="Card" className="absolute w-6 h-6" />
                    </div>
                    <span className="ml-4 text-lg">Bank Account</span>
                  </label>

                  <label className="flex items-center pb-2">
                    <input
                      type="radio"
                      name="payment"
                      value="Cash on Delivery"
                      onChange={handlePaymentChange}
                      className="mr-2 w-5 h-5 border-2 border-blue-500 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer"
                    />
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <img src="/images/icon/cash1.png" alt="Background Card" className="w-full h-full" />
                      <img src="/images/icon/cash.png" alt="Card" className="absolute w-6 h-6" />
                    </div>
                    <span className="ml-4 text-lg">Cash on Delivery</span>
                  </label>
                </div>
              </div>
            </div>
            <button
              onClick={handleConfirmPayment}
              className="mt-5 bg-amber-950 text-white text-lg font-bold ml-24 py-6 px-28 rounded-3xl shadow-lg hover:bg-yellow-600 transition-all duration-300"
            >
              Confirm and Pay
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>


  );
};

export default Youcart

