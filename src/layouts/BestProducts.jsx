import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import CardBest from '../components/CardBest'
import Button from '../components/Button'
import Flex from '../components/Flex'

import "slick-carousel/slick/slick.css";

const BestProducts = () => {

    let [show, setShow] = useState(4)
    let [Apidata, setApiData] = useState([])
    let [viewAllClicked, setViewAllClicked] = useState(false)

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setApiData(data.products))
    }, [])

    const handleViewAll = () => {
        setShow(show + 4)
        setViewAllClicked(true)
    }

    const handleLoadMore = () => {
        setShow(show + 4)
    }

    return (
        <section className='pb-[140px]'>
            <Container>

                <Flex className='items-center justify-between'>
                    <div>
                        <SubHeading text="This Month" />
                        <Heading className='pt-6 pb-[60px]' text="Best Selling Products" />
                    </div>

                    {
                        !viewAllClicked && (
                            <div onClick={handleViewAll}>
                                <Button text="View All" />
                            </div>
                        )
                    }

                </Flex>

                <Flex className='justify-between flex-wrap gap-y-10'>
                    <div className="flex flex-wrap gap-4">
                        {
                            Apidata.slice(0, show).map(item => (
                                <div key={item.id}>
                                    <CardBest
                                        image={item.thumbnail}
                                        title={item.title}
                                        saleprice="280"
                                        regularprice="320"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </Flex>

                {
                    viewAllClicked && (
                        <div className="text-center mt-20">
                            {
                                show < Apidata.length ? (
                                    <div onClick={handleLoadMore}>
                                        <Button text="Load More Products" />
                                    </div>
                                ) : (
                                    <p className="text-3xl text-red-500">
                                        No More Products
                                    </p>
                                )
                            }
                        </div>
                    )
                }

            </Container>
        </section>
    )
}

export default BestProducts