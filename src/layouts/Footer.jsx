import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import footerimg from '../assets/footerimg.png'
import { GoPaperAirplane } from "react-icons/go";
import FooterListitem from '../components/FooterListitem'
import footerend from '../assets/footerend.png'
import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa";




const Footer = () => {
    return (
        <footer className='bg-black pt-[80px]'>
            <Container>
                <Flex>
                    <div className='w-3/12 '>
                        <Image src={footerimg} />
                        <h4 className='text-white text-xl font-pop font-medium py-6 '>Subscribe</h4>
                        <p className='text-white text-base font-pop font-normal pb-[16px] '>Get 10% off your first order</p>
                        <div className='relative w-[217px]  bg-black rounded-4 '>
                            <input className='border border-white w-full py-3 pl-4 pr-8 text-sm placeholder:text-xs text-white font-normal font-pop' type="text" placeholder='What are you looking for?' /><GoPaperAirplane className='absolute top-[15px] right-2 text-xl text-white' />
                        </div>
                    </div>
                    <div className='w-9/12 justify-between flex'>
                        <div>
                            <strong className='text-xl text-white font-pop font-medium'>Support</strong>
                            <ul className='flex flex-col gap-y-5 mt-6'>
                                <FooterListitem className='w-[175px]' text="111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh." />
                                <FooterListitem text="exclusive@gmail.com" />
                                <FooterListitem text="+88015-88888-9999" />
                            </ul>
                        </div>
                        <div>
                            <strong className='text-xl text-white font-pop font-medium'>Account</strong>
                            <ul className='flex flex-col gap-y-5 mt-6'>
                                <FooterListitem text="My Account" />
                                <FooterListitem text="Login / Register" />
                                <FooterListitem text="Cart" />
                                <FooterListitem text="Wishlist" />
                                <FooterListitem text="Shop" />
                            </ul>
                        </div>
                        <div>
                            <strong className='text-xl text-white font-pop font-medium'>Quick Link</strong>
                            <ul className='flex flex-col gap-y-5 mt-6'>
                                <FooterListitem text="Privacy Policy" />
                                <FooterListitem text="Terms Of Use" />
                                <FooterListitem text="FAQ" />
                                <FooterListitem text="Contact" />
                            </ul>
                        </div>
                        <div>
                            <strong className='text-xl text-white font-pop font-medium'>Download App</strong>
                            <ul className='flex flex-col gap-y-5 mt-6'>
                                <p className='text-white text-xs font-pop font-medium'>Save $3 with App New User Only</p>
                                <Image src={footerend} />
                                <div className='flex text-white text-2xl gap-x-6' >
                                    <RiFacebookLine />
                                    <RiTwitterLine />
                                    <FaInstagram />
                                    <RiLinkedinLine />

                                </div>
                            </ul>
                        </div>


                    </div>
                </Flex>

                <div className='relative pt-[60px] pb-5'>
                    <FaRegCopyright className='absolute left-[405px] text-xl text-white' />
                    <p className='text-center text-white text-base font-pop font-normal'>Copyright Rimel 2022. All right reserved</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer