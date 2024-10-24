import React, { useState } from 'react';
import "./signup.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signup = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const Register = async (e) => {
    e.preventDefault(); 
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/auth/register', {
        email,
        password,
        phoneNumber,
      });

      if (response.status === 201) { 
        // Jika berhasil
        Swal.fire({
          title: 'Registation Succes!',
          text: 'You have successfully registered.',
          icon: 'success',
          confirmButtonText: 'Login',
          confirmButtonColor: '#3085d6',
          allowOutsideClick: false, // Mencegah popup tertutup secara tidak sengaja
        }).then(() => {
          navigate("/signin"); // Pindah ke halaman login setelah user klik "Login"
        });
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mendaftarkan pengguna!", error);
      Swal.fire({
        title: 'Registation Failed!',
        text: 'lease try again.',
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#d33',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container1">
        <div className="images">
          <img className="signin image" src="/images/signin_image.png" alt="signin img" />
        </div>
        <div className="form">
          <div className="top">
            <div className="logo coffe">
              <img src="/images/logo_coffe.svg" alt="logo coffe img" />
              <span>Coffee Shop</span>
            </div>
            <button onClick={() => navigate("/signin")} className="btn-signin">Login</button>
          </div>
          <h2>Sign Up</h2>
          <form onSubmit={Register}>
            <div className="form-input">
              <label htmlFor="email">Email Address:</label>
              <input className='input-signin'
                onChange={e => setEmail(e.target.value)}
                type="text"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="password">Password:</label>
              <input className='input-signin'
                onChange={e => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input className='input-signin'
                onChange={e => setPhoneNumber(e.target.value)}
                type="text"
                id="phoneNumber"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <button type="submit" className="button-login">
              {isLoading ? "loading..." : "Sign Up"}
            </button>
            <div id="btn-google" className="btn-google">
              <img src="/images/google_logo.svg" alt="google logo img" />
              Login With Google
            </div>
          </form>
        </div>
      </div>

      <div className="footer">
        <div className="member">
          <div className="get-member">
            <h1><b>Get your member card now!</b></h1>
            <p>Let's join with our members and enjoy the deals.</p>
          </div>
          <button className="btn-createnow">Create Now</button>
        </div>
        <div className="footer-bawah">
          <div className="row">
            <div className="footer-left">
              <div className="logo-coffe">
                <img src="/images/logo_coffe.svg" alt="logo coffe" />
                <span>Coffee Shop</span>
              </div>
              <div className="p-icon">
                <p>
                  Coffee Shop is a store that sells some good <br />
                  meals, and especially coffee. We provide <br />
                  high quality beans
                </p>
              </div>
              <div className='icon'>
                <img className="logo-sosmed" src="/images/Facebook.svg" alt="Facebook" />
                <img className="logo-sosmed" src="/images/Twitter.svg" alt="Twitter" />
                <img className="logo-sosmed" src="/images/Instagram.svg" alt="Instagram" />
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-col">
                <h4>Product</h4>
                <ul>
                  <li><a href="#">Download</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Locations</a></li>
                  <li><a href="#">Countries</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Engage</h4>
                <ul>
                  <li><a href="#">Coffee Shop?</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
