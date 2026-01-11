import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const NextArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={`${className} absolute -top-[70px] right-0 bg-[#F5F5F5] w-[40px] h-[40px] block rounded-full text-black flex items-center justify-center`}
            
            onClick={onClick}
        >
        <FaArrowRight />

        </div>

    )
}

export default NextArrow