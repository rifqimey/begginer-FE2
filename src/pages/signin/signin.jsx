import React, { useEffect, useState } from 'react'
import "./signin.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';


const Signin = () => {

  const navigation = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const login = async () => {

    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password
      })
      console.log({ response });
      if (response.status === 200) {
        localStorage.setItem("token", response.data?.token)
      }

      if (response.status === 200) {
        navigate("/")
      }
    } catch (error) {
      console.log({ error });
      Swal.fire({
        icon: 'warning', 
        title: 'Error',
        text: error?.response?.data?.msg || 'An unexpected error occurred!',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6', // 
      });
    }
    setIsLoading(false)
  }

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsLogin(true)
    }
  }, [])

  useEffect(() => {
    isLogin && navigate("/")
  }, (isLogin))
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
            <button onClick={() => {
              navigate("/signup")
            }} className="button-signup">SignUp </button>
          </div>
          <h2>Login</h2>
          <form>
            <div className="button-input">
              <label htmlFor="email">Email Address:</label>
              <input className='input-signin'
                onChange={e => {
                  setEmail(e.target.value);
                }}
                type="text"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="button-input">
              <label htmlFor="password">Password:</label>
              <input className='input-signin'
                onChange={e => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button onClick={() => navigation("/forgot")} className="forgot">Forgot Password?</button>
            <div onClick={login} className="button-login">
              {isLoading ? "loading..." : "login"}
            </div>
            <div id="btn-google" className="button-google">
              <img src="/images/google_logo.svg" alt="google logo img" />
              Login With Google
            </div>
          </form>
        </div>
      </div>

      <div className="footerr">
        <div className="member1">
          <div className="membership">
            <h1><b>Get your member card now!</b></h1>
            <p>Let's join with our members and enjoy the deals.</p>
          </div>
          <button className="btn-createnow">Create Now</button>
        </div>
        <div className="footer-bawah">
          <div className="roww">
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

export default Signin
