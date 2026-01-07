import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CategoryList from '../components/CategoryList'
import Image from '../components/Image'
import BannerImage from '../assets/bannerone.jpg'

const Banner = () => {
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
          <Image src={BannerImage} alt="Banner Image"/>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Banner