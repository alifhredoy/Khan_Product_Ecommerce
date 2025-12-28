import React from 'react'

const FooterListitem = ({ text, className }) => {
    return (
        <li className={`text-base text-white font-pop font-regular cursor-pointer ${className}`}>{text}</li>
    )
}

export default FooterListitem