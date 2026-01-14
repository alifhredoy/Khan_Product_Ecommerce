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
import Flex from '../components/Flex';







const Catergory = () => {
    return (
        <section>
            <Container>
                <SubHeading text='Categories' />
                <Heading className='pt-6 pb-8' text="Browse By Category" />
                <Flex className='justify-between pb-[70px]'>
                    <CategoryBox text="Phones" icon={<IoPhonePortraitOutline />} />
                    <CategoryBox text="Computers" icon={<HiOutlineComputerDesktop />} />
                    <CategoryBox text="SmartWatch" icon={<BsSmartwatch />} />
                    <CategoryBox text="Camera" icon={<CiCamera />} />
                    <CategoryBox text="HeadPhones" icon={<CiHeadphones />} />
                    <CategoryBox text="Gaming" icon={<LuGamepad />} />
                </Flex>
                <hr className='mb-[70px] border-[#0000004d]' />
            </Container>
        </section>
    )
}

export default Catergory