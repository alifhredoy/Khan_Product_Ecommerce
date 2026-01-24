import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import login from '../assets/login.png'
import Button from '../components/Button'

const Login = () => {
  return (
    <section className='pt-[76px] pb-[140px]'>
      <Container>
        <Flex>
          <div className='flex items-center justify-between'>
            <div className='w-7/12'>
          <Image src={login} alt="login"/>
          </div>
          <div className='w-4/12'>
          <h2 className='text-4xl text-black font-inter font-medium pb-[24px]'>Log in to Exclusive</h2>
          <h3 className='text-base text-black font-normal font-pop pb-[48px]'>Enter your details below</h3>
          <div className='pb-[40px]'>
            <input type="text" placeholder='Email or Phone Number' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none'/>
          </div>
          <input type="password" placeholder='Password' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none' />
          <Flex className='items-center pt-[40px]'>
             <Button text="Log In"/>
            <p className='text-base text-[#DB4444] font-normal font-pop pl-[87px]'>Forget Password?</p>
          </Flex>
            
          
          </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Login