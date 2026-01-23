import React from 'react'
import Image from '../components/Image'


const SupportCard = ({title,text,image}) => {
  return (
    <div className='w-62.25 flex flex-col items-center justify-center'>
        <Image src={image}/>
        <h3 className="text-xl text-black fomt-pop font-semibold pt-6 pb-2">{title}</h3>
        <p className='text-sm text-black font-pop font-normal'>{text}</p>
    </div>
  )
}

export default SupportCard