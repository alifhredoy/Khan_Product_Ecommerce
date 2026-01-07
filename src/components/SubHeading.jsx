import React from 'react'

const SubHeading = ({text,className}) => {
    return (
        <div className={`flex items-center gap-x-4 ${className}`}>
            <div className='w-[20px] h-[40px] bg-secondary rounded-sm'></div>
            <p className='text-base text-secondary font-pop font-semibold'>{text}</p>


        </div>
    )
}

export default SubHeading