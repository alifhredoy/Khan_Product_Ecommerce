import React, { use, useEffect, useState } from 'react'
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


const ExploreProducts = () => {

  let [show, setShow] = useState(0)
  let [Apidata, setApiData] = useState([])


  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setApiData(data.products))

  }, [])

  return (
    <section className='pb-[168px]'>
      <Container>

        <SubHeading text="Our Products" />
        <Heading className='pt-6 pb-[60px]' text="Explore Our Products" />
        <Slider {...settings}>
          {
            Apidata.map(item => (
              <div>
                <ExploreCard
                  image={item.thumbnail}
                  title={item.title}
                  saleprice="300"

                />
              </div>


            ))
          }


        </Slider>
        <div className="flex flex-wrap gap-4">
          {
            Apidata.slice(0, show).map(item => (
              <div>
                <ExploreCard
                  image={item.thumbnail}
                  title={item.title}
                  saleprice="300"

                />
              </div>

            ))

          }

        </div>
        {
          show < Apidata.length ? <div onClick={() => setShow(show + 4)} className="text-center mt-[60px]">
            <Button text="Load More Product" />
          </div>
            : <p className="text-center text-3xl text-red-500">No More Products</p>
        }
      </Container>
    </section>
  )
}

export default ExploreProducts