import React, { useEffect, useState } from "react";
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
  let [show, setShow] = useState(0)
  let [Apidata, setApiData] = useState([])


  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <section className='mb-20 '>
      <Container>
        <div className='border-b border-[#9a9a9a3d] pb-[60px]'>
          <SubHeading text="Today’s" />
          <Heading className='pt-6 pb-8' text="Flash Sales" />
          <Slider {...settings}>
            {
              Apidata.map(item => (
                <div>
                  <Card
                    image={item.thumbnail}
                    title={item.title}
                    saleprice="300"
                    regularprice="200"
                    badge="new"
                  />
                </div>


              ))
            }
          </Slider>
          <div className="flex flex-wrap gap-4">
            {
              Apidata.slice(0, show).map(item => (
                <div>
                  <Card
                    image={item.thumbnail}
                    title={item.title}
                    saleprice="300"
                    regularprice="200"
                    badge={"new"}
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
        </div>
      </Container>
    </section>
  )
}

export default TodayProducts