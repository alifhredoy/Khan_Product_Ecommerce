import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Image from '../components/Image'

import arrivalone from '../assets/arrivalone.png'
import arrivaltwo from '../assets/arrivaltwo.png'
import arrivalthree from '../assets/arrivalthree.png'
import arrivalfour from '../assets/arrivalfour.png'

import { Link } from 'react-router-dom'

const NewArrival = () => {
    return (
        <section className='pb-[140px]'>
            <Container>
                <SubHeading text="Featured" />
                <Heading className="pt-6 pb-[60px]" text="New Arrival" />


                <div className='one'>
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
            </Container>
        </section>
    )
}

export default NewArrival