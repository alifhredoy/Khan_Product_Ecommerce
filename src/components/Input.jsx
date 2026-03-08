import React from 'react'

const Input = ({placeholder, type='text', className}) => {
  return (
    <>
    <input type={type} placeholder={placeholder} className={`peer w-[235px] h-[50px] rounded-[4px] bg-[#F5F5F5] px-4 text-base 
    outline-none border border-transparent focus:border-black text-base font-pop text-base font-normal text-[#00000080] ${className}`} />
    </>
  )
}

export default Input