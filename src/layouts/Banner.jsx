import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CategoryList from '../components/CategoryList'
import Image from '../components/Image'
import BannerOne from '../assets/bannerone.jpg'
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className='pt-10 pb-[140px]'>
      <Container>
        <Flex>
          <div className='w-3/12 relative after:w-[2px] after:h-[389px] after:absolute after:-top-[13%] after:right-[50px] after:bg-[#9a9a9a3d] after:content-[""]'>
            <ul className='flex flex-col gap-y-4'>
              <CategoryList text="Woman’s Fashion" type="true" />
              <CategoryList classNameForIcon="ml-20" text="Men’s Fashion" type="true" />
              <CategoryList text="Electronics" />
              <CategoryList text="Home & Lifestyle" />
              <CategoryList text="Medicine" />
              <CategoryList text="Sports & Outdoor" />
              <CategoryList text="Baby’s & Toys" />
              <CategoryList text="Groceries & Pets" />
              <CategoryList text="Health & Beauty" />

            </ul>


          </div>
          <div className='w-9/12'>
            <Slider {...settings}>
              <div>
                <Image src={BannerOne} alt="Banner Image" />
              </div>
              <div>
                <Image src={BannerOne} alt="Banner Image" />
              </div>
              <div>
                <Image src={BannerOne} alt="Banner Image" />
              </div>
              <div>
                <Image src={BannerOne} alt="Banner Image" />
              </div>
              <div>
                <Image src={BannerOne} alt="Banner Image" />
              </div>
              <div>
                <Image src={BannerOne} alt="Banner Image" />
              </div>
              
            

            </Slider>

          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Banner