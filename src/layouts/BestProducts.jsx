import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import CardBest from '../components/CardBest'
import Button from '../components/Button'
import bestone from '../assets/bestone.png'
import besttwo from '../assets/besttwo.png'
import bestthree from '../assets/bestthree.png'
import bestfour from '../assets/bestfour.png'

import Flex from '../components/Flex'

import "slick-carousel/slick/slick.css";



const TodayProducts = () => {
    return (
        <section className='pb-[140px]'>
            <Container>

                <Flex className='items-center justify-between'>
                    <div>
                        <SubHeading text="This Month" />
                        <Heading className='pt-6 pb-[60px]' text="Best Selling Products" />
                    </div>

                    <Button text="View All" />

                </Flex>
                <Flex className='justify-between'>
                    <div>
                        <CardBest image={besttwo} title='The north coat' saleprice='260' regularprice='360' />
                    </div>
                    <div>
                        <CardBest image={bestthree} title='Gucci duffle bag' saleprice='960' regularprice='1160' />
                    </div>
                    <div>
                        <CardBest image={bestfour} title='RGB liquid CPU Cooler ' saleprice='160' regularprice='170' />
                    </div>
                    <div>
                        <CardBest image={bestone} title='Small BookSelf' saleprice='360' regularprice='460' />
                    </div>



                </Flex>

            </Container>
        </section>
    )
}

export default TodayProducts