import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const CategoryList = ({type,text,className,classNameForIcon}) => {
    console.log(type);
    
  return (
    <div>
        <li className={`text-base text-black font-pop font-normal list-none cursor-pointer ${className}`}>{text}{type=="true" && <IoIosArrowForward className={`inline-block ml-13 ${classNameForIcon}`}/>}</li>
    </div>
  )
}

export default CategoryList