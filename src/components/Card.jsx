import React from 'react'
import Image from '../components/Image'
import productone from '../assets/productone.png'
import Flex from '../components/Flex'
import { FaRegHeart } from "react-icons/fa";

import { LuEye } from "react-icons/lu";



const Card = () => {
    return (
        <div className='w-[270px] h-[350px] bg-[#F5F5F5]'>
            <Flex className='relative w-full h-[250px] justify-center items-center'>
                <Image src={productone} alt="productone" />
                <p className='absolute top-3 left-4 bg-[#DB4444] py-1 px-3 rounded-[4px] text-xs text-white font-pop font-normal'>-40%</p>
                
                <li className='absolute top-4 right-3 list-none bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center'><FaRegHeart className='text-base' /></li>
                <li className='absolute top-14 right-3 list-none bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center'><LuEye className='text-base' /></li>

            </Flex>
        </div>
    )
}

export default Card