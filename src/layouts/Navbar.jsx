import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import ListItem from '../components/ListItem'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'




const Navbar = () => {
    return (
        <nav className='pt-10 pb-4 border border-[#9a9a9a3d]'>
            <Container>
                <Flex>
                    <div className='w-3/12'>
                        <Image src={Logo} />
                    </div>
                    <div className='w-5/12 '>
                        <ul className='flex gap-x-12'>
                            <Link to='/'><ListItem text="Home" /></Link>
                            <ListItem text="Contact" />
                            <Link to='/about'><ListItem text="About" /></Link>
                            <Link to='/signup'><ListItem text="Sign Up" /></Link>
                        </ul>
                    </div>
                    <div className='w-4/12 pl-10'>
                        <Flex className="items-center justify-between">
                            <div className='relative w-[243px]  bg-input'>
                                <input className='w-full py-1 pl-4 pr-7 placeholder:text-xs font-normal' type="text" placeholder='What are you looking for?' /><IoSearchOutline className='absolute top-[9px] right-2 text-base' />
                            </div>
                            <IoIosHeartEmpty className='text-xl'/>
                            <IoCartOutline className='text-xl'/>
                        </Flex>



                    </div>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navbar