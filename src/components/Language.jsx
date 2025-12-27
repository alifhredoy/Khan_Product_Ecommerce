import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Flex from '../components/Flex'


const Language = () => {
    return (
        <Flex className='gap-x-1'>
            <button className='text-sm text-top font-normal font-pop'>English</button>
            <IoIosArrowDown className='text-top' />
        </Flex>

    )
}

export default Language