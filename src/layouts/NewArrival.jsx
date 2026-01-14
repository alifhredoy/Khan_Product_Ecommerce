import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Image from '../components/Image'

import arrivalone from '../assets/arrivalone.png'
import arrivaltwo from '../assets/arrivaltwo.png'
import arrivalthree from '../assets/arrivalthree.png'
import arrivalfour from '../assets/arrivalfour.png'

const NewArrival = () => {
    return (
        <section>
            <Container>
                <SubHeading text="Featured" />
                <Heading className="pt-6 pb-[60px]" text="New Arrival" />

                <div className="grid grid-cols-4 grid-rows-2 gap-7 pb-[140px] ">

                    <div className="col-start-1 col-end-3 row-start-1 row-end-3">
                        <Image src={arrivalone} className="w-full" />
                    </div>


                    <div className="col-start-3 col-end-5 row-start-1 row-end-2">
                        <Image src={arrivaltwo} className="w-full" />
                    </div>


                    <div className="col-start-3 col-end-4 row-start-2 row-end-3">
                        <Image src={arrivalthree} className="w-full" />
                    </div>


                    <div className="col-start-4 col-end-5 row-start-2 row-end-3">
                        <Image src={arrivalfour} className="w-full" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default NewArrival