import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import login from '../assets/login.png'
import Button from '../components/Button'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom'


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const auth = getAuth();
  let [email, setEmail] = useState()
  let [password, setPassword] = useState()
  let handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Login Successful")

      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode.includes("auth/invalid-credential")) {
          toast.error("Invalid email or password")
        }


      });


  }

  return (
    <section className='pt-[76px] pb-[140px]'>
      <Container>
        <Flex>
          <div className='flex items-center justify-between'>
            <div className='w-7/12'>
              <Image src={login} alt="login" />
            </div>
            <div className='w-4/12'>
              <h2 className='text-4xl text-black font-inter font-medium pb-[24px]'>Log in to Exclusive</h2>
              <h3 className='text-base text-black font-normal font-pop pb-[48px]'>Enter your details below</h3>
              <div className='pb-[40px]'>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email or Phone Number' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none' />
              </div>
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border-0 border-b border-black py-2 pr-10 placeholder:text-[18px] font-pop font-normal focus:outline-none"
                />

                <div
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              </div>

              <Flex className='items-center pt-[40px]'>
                <div onClick={handleLogin}>
                  <Button text="Log In" />
                </div>
                <p className='text-base text-[#DB4444] font-normal font-pop pl-[87px]'>Forget Password?</p>
              </Flex>
               <Flex className='justify-center pt-[32px]'>
                <p className='text-base text-[#4D4D4D] font-pop font-normal'>New here? Let’s get you started.</p>
                <div className='pl-4'>
                  <Link to='/signup'><p className='text-base text-[#4D4D4D] font-medium font-pop border-0 border-b'>Sign Up</p></Link>
                </div>
              </Flex>


            </div>
          </div>
        </Flex>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
    </section>
  )
}

export default Login