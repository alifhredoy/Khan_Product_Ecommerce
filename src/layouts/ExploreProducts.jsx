import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import ExploreCard from '../components/ExploreCard'
import Button from '../components/Button'
import exploreone from '../assets/exploreone.png'
import exploretwo from '../assets/exploretwo.png'
import explorethree from '../assets/explorethree.png'
import explorefour from '../assets/explorefour.png'
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
    rows:2,
    slidesPerRow:4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <section className='pb-[168px]'>
      <Container>
        <div className='border-b border-[#9a9a9a3d] pb-[60px]'>
          <SubHeading text="Our Products" />
          <Heading className='pt-6 pb-[60px]' text="Explore Our Products" />
          <Slider {...settings}>
            <div>
              <ExploreCard image={exploreone} title='Breed Dry Dog Food' saleprice='100'  />
            </div>
            <div>
              <ExploreCard image={exploretwo} title='CANON EOS DSLR Camera' saleprice='360'  />
            </div>
            <div>
              <ExploreCard image={explorethree} title='ASUS FHD Gaming Laptop' saleprice='700' r />
            </div>
            <div>
              <ExploreCard image={explorefour} title='Curology Product Set ' saleprice='500' />
            </div>
            <div>
              <ExploreCard image={exploreone} title='Breed Dry Dog Food' saleprice='100'  />
            </div>
            <div>
              <ExploreCard image={exploretwo} title='CANON EOS DSLR Camera' saleprice='360' />
            </div>
           <div>
              <ExploreCard image={explorethree} title='ASUS FHD Gaming Laptop' saleprice='700' />
            </div>
             <div>
              <ExploreCard image={explorefour} title='Curology Product Set ' saleprice='500'/>
            </div>
            <div>
              <ExploreCard image={exploreone} title='Breed Dry Dog Food' saleprice='100'  />
            </div>

          </Slider>
          <div className='text-center'>
            <Button text="View All Products" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TodayProducts