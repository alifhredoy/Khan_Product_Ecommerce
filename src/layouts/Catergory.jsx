import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import { IoPhonePortraitOutline } from "react-icons/io5";
import CategoryBox from '../components/CategoryBox';
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";

import { CiSpeaker } from "react-icons/ci";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from '../components/NextArrow'
import PrevArrow from '../components/PrevArrow'



const Catergory = () => {
    var settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <section className='pb-[70px]'>
            <Container>
              <div className='border-b border-[#9a9a9a3d] pb-[70px]'>
                  <SubHeading text='Categories' />
                <Heading className='pt-6 pb-[60px]' text="Browse By Category" />
                <Slider {...settings}>

                    <div>
                        <CategoryBox text="Phones" icon={<IoPhonePortraitOutline />} />
                    </div>


                    <div>
                        <CategoryBox text="Computers" icon={<HiOutlineComputerDesktop />} />
                    </div>
                    <div>
                        <CategoryBox text="SmartWatch" icon={<BsSmartwatch />} />
                    </div>
                    <div>
                        <CategoryBox text="Camera" icon={<CiCamera />} />
                    </div>
                    <div>
                        <CategoryBox text="HeadPhones" icon={<CiHeadphones />} />
                    </div>
                    <div>
                        <CategoryBox text="Gaming" icon={<LuGamepad />} />
                    </div>
                    <div>
                        <CategoryBox text="Speaker" icon={<CiSpeaker />} />
                    </div>

                </Slider>
              </div>

            </Container>
        </section>
    )
}

export default Catergory