import React from 'react'

const ListItem = ({ text, className }) => {
    return (
        <li className={`text-base text-black font-normal font-pop relative cursor-pointer pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full ${className}`}>{text}</li>
    )
}

export default ListItem