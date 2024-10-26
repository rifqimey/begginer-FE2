import React from 'react'


const Footer = () => {
  return (
    <div>
      <div className="container-footer bg-[#F8F8F8] h-[450px]">
        <div className="row flex flex-row justify-around pt-[180px] -mt-10 px-[20px] gap-[120px]">
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
                <li><span className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Download</span></li>
                <li><span className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Pricing</span></li>
                <li><span className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Locations</span></li>
                <li><span className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Countries</span></li>
                <li><span className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Blog</span></li>
              </ul>
            </div>

            {/* Engage Column */}
            <div className="footer-col flex flex-col gap-[30px]">
              <div className="judul-list">
                <h4 className="font-bold">Engage</h4>
              </div>
              <ul className="list-footer flex flex-col items-start gap-[20px]">
                <li><span className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Coffee Shop</span></li>
                <li><span className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">About Us</span></li>
                <li><span className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Contact Us</span></li>
                <li><span className="text-[#4F5665] hover:text-[#6A4029] hover:underline hover:font-medium">Support</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
