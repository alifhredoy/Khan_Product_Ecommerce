import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import login from '../assets/login.png'
import Button from '../components/Button'
import googleicon from '../assets/googleicon.png'

const Signup = () => {
  return (
    <section className='pt-[76px] pb-[140px]'>
      <Container>
        <Flex>
          <div className='flex items-center justify-between'>
            <div className='w-7/12'>
          <Image src={login} alt="login"/>
          </div>
          <div className='w-4/12'>
          <h2 className='text-4xl text-black font-inter font-medium pb-[24px]'>Create an account</h2>
          <h3 className='text-base text-black font-normal font-pop pb-[48px]'>Enter your details below</h3>
          <div className='pb-[40px]'>
            <input type="text" placeholder='Name' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none'/>
          </div>
          <div className='pb-[40px]'>
            <input type="text" placeholder='Email or Phone Number' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal '/>
          </div>
          <input type="password" placeholder='Password' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none' />
          
            <div className='pt-10 pb-[16px]'>
              <Button className='w-full' text="Create Account"/>
            </div>

            <Flex className='w-[full] border border-[#CCCCCC] justify-center py-[16px] px-[86px]'>
              <Image src={googleicon} alt="google"/>
              <p className='text-base font-normal font-pop pl-[16px]'>Sign up with Google</p>
            </Flex>
            <Flex className='justify-center pt-[32px]'>
              <p className='text-base text-[#4D4D4D] font-pop font-normal'>Already have account?</p>
             <div className='pl-4'>
               <p className='text-base text-[#4D4D4D] font-medium font-pop border-0 border-b'>Log in</p>
             </div>
            </Flex>

          
            
          
          </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Signup