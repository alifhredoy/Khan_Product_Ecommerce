import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import supportone from '../assets/supportone.png'
import supporttwo from '../assets/supporttwo.png'
import supportthree from '../assets/supportthree.png'
import SupportCard from '../components/SupportCard'

const Support = () => {
    return (
        <section className='pb-35'>
            <Container>
              <Flex className="justify-evenly">
                  <SupportCard image={supportone} title="FREE AND FAST DELIVERY" text="Free delivery for all orders over $140"/>
                <SupportCard image={supporttwo} title="24/7 CUSTOMER SERVICE" text="Friendly 24/7 customer support"/>
                <SupportCard image={supportthree} title="MONEY BACK GUARANTEE" text="We reurn money within 30 days"/>
              </Flex>
                
            </Container>
        </section>
    )
}

export default Support