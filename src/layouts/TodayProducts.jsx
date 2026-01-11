import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Button from '../components/Button'
import productone from '../assets/productone.png'
import producttwo from '../assets/producttwo.png'
import productthree from '../assets/productthree.png'
import productfour from '../assets/productfour.png'
import Flex from '../components/Flex'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from '../components/NextArrow'
import PrevArrow from '../components/PrevArrow'


const TodayProducts = () => {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <section className='mb-20 '>
      <Container>
        <div className='border-b border-[#9a9a9a3d] pb-[60px]'>
          <SubHeading text="Today’s" />
          <Heading className='pt-6 pb-8' text="Flash Sales" />
          <Slider {...settings}>
            <div>
              <Card image={productone} title='HAVIT HV-G92 Gamepad' saleprice='120' regularprice='160' badge='-40%' />
            </div>
            <div>
              <Card image={producttwo} title='AK-900 Wired Keyboard' saleprice='960' regularprice='1160' badge='-35%'/>
            </div>
            <div>
              <Card image={productthree} title='IPS LCD Gaming Monitor' saleprice='370' regularprice='400' badge='-30%'/>
            </div>
            <div>
              <Card image={productfour} title='S-Series Comfort Chair ' saleprice='375' regularprice='400' badge='-25%'/>
            </div>
            <div>
              <Card image={producttwo} title='AK-900 Wired Keyboard' saleprice='960' regularprice='1160' badge='-35%'/>
            </div>





          </Slider>
          <div className='text-center mt-[60px]'>
            <Button text="View All Products" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TodayProducts