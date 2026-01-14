import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import promotion from '../assets/promotion.png'

const Promotion = () => {
  return (
    <section className='pb-[71px]'>
        <Container>
            <Image src={promotion}/>
        </Container>
    </section>
  )
}

export default Promotion