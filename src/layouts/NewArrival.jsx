import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Image from '../components/Image'
import Flex from '../components/Flex'
import arrivalone from '../assets/arrivalone.png'
import arrivaltwo from '../assets/arrivaltwo.png'
import arrivalthree from '../assets/arrivalthree.png'
import arrivalfour from '../assets/arrivalfour.png'
import serviceone from '../assets/serviceone.png'
import servicetwo from '../assets/servicetwo.png'
import servicethree from '../assets/servicethree.png'
import { Link } from 'react-router-dom'

const NewArrival = () => {
    return (
        <section className='pb-[140px]'>
            <Container>
                <SubHeading text="Featured" />
                <Heading className="pt-6 pb-[60px]" text="New Arrival" />


                <div className='one pb-[140px]'>
                    <div className='two'>
                        <Link>
                            <Image src={arrivalone} />
                        </Link>
                    </div>
                    <div className='two'>
                        <Image src={arrivaltwo} />
                    </div>
                    <div className='two'>
                        <Image src={arrivalthree} />
                    </div>
                    <div className='two'>
                        <Image src={arrivalfour} />
                    </div>



                </div>


                <Flex className='justify-around'>
                    <div>
                        <Image className='pl-[84px]' src={serviceone} />
                        <h4 className="text-xl text-black fomt-pop font-semibold pt-6 pb-2">FREE AND FAST DELIVERY</h4>
                        <p className='text-sm text-black font-pop font-normal'>Free delivery for all orders over $140</p>
                    </div>
                    <div>
                        <Image className='pl-[84px]' src={servicetwo} />
                        <h4 className="text-xl text-black fomt-pop font-semibold pt-6 pb-2">24/7 CUSTOMER SERVICE</h4>
                        <p className='text-sm text-black font-pop font-normal'>Friendly 24/7 customer support</p>
                    </div>
                    <div>
                        <Image className='pl-[84px]' src={servicethree} />
                        <h4 className="text-xl text-black fomt-pop font-semibold pt-6 pb-2">MONEY BACK GUARANTEE</h4>
                        <p className='text-sm text-black font-pop font-normal'>We reurn money within 30 days</p>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default NewArrival