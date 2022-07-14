import React, { useState } from "react"
import {
  FaFacebook,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"
import { FiUser } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { Snackbar, Alert } from "@mui/material"
import axios from "axios"

function Login() {
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target
    const user = {
      username: form[0].value,
      email: form[1].value,
      password: form[2].value,
    }
    axios.post("https://codefiesta-police-portal.herokuapp.com/signup/", user).then((res) => {
      if (res.data.message === "Username or email taken") {
        setUsernameExist(true)
      }
    })
  }
  const [usernameExist, setUsernameExist] = useState(false)

  return (
    <div className='flex flex-col items-center justify-center  py-2'>
      <main className='flex flex-col items-center  w-full  px-20 text-center'>
        <div className='bg-neutral-500 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
          {/* Header Text */}
          <div className='w-3/5 p-5 '>
            <div className='flex text-left font-bold'>
              <span className='text-2xl'>POLICE</span>
              <span className='text-1xl font-bold text-yellow-500'>PORTAL</span>
            </div>
            <div className='py-5'>
              <h2 className='text-3xl text-yellow-400 font-bold mb-2'>
                Sign Up your Account
              </h2>
              <div className='border-2 w-40 border-yellow-400 inline-block mb-2'></div>
            </div>
            <div className='flex justify-center my-2'>
              <a
                href='facebook.com'
                className='border-2 border-yellow-300 rounded-full p-3 mx-2'
              >
                <FaFacebook className='text-md'></FaFacebook>
              </a>
              <a
                href='linkedin.com'
                className='border-2 border-yellow-300 rounded-full p-3 mx-2'
              >
                <FaLinkedinIn className='text-md'></FaLinkedinIn>
              </a>
              <a
                href='google.com'
                className='border-2 border-yellow-300 rounded-full p-3 mx-2'
              >
                <FaGoogle className='text-md'></FaGoogle>
              </a>
            </div>
            <p className='text-black my-3'>or use your email account</p>

            {/* Inputs for Register Page Starts Here  */}
            <Snackbar
              open={usernameExist}
              autoHideDuration={3000}
              onClose={() => setUsernameExist(false)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert severity='warning'>
                Username or email already exist !!! PLEASE LOGIN
              </Alert>
            </Snackbar>
            <div className='flex flex-col items-center'>
              <form onSubmit={(e) => handleRegister(e)}>
                <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                  <FiUser className='text-slate-700 m-2 ml-1' />
                  <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    className='outline-none text-md flex-1'
                  />
                </div>
                <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-slate-700 m-2 ml-1' />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='outline-none text-md flex-1'
                  />
                </div>
                <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                  <MdLockOutline className='text-slate-700 m-2 ml-1' />
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='outline-none text-md flex-1'
                  />
                </div>

                <button
                  type='submit'
                  value='submit'
                  className='border-2 border-yellow-400 text-yellow-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-yellow-400 hover:text-black'
                >
                  Sign Up
                </button>
              </form>
            </div>

            {/* Inputs for Register Page Ends Here  */}
          </div>
          <div className='w-2/5 bg-yellow-400 text-black rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-3xl font-bold mb-2'>Hello, Friends</h2>
            <div className='border-2 w-20 border-black inline-block mb-2'></div>
            <p className='mb-10'>If you already have an account then Login!</p>
            <button
              onClick={() => navigate("/login")}
              className='border-2 border-black rounded-full px-12 py-2 inline-block font-semibold hover:bg-black hover:text-yellow-400'
            >
              Log In
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
