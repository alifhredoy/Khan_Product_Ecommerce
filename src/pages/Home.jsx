import React, { useEffect } from 'react'
import Banner from '../layouts/Banner'
import TodayProducts from '../layouts/TodayProducts'
import Catergory from '../layouts/Catergory'
import BestProducts from '../layouts/BestProducts'
import Promotion from '../layouts/Promotion'
import ExploreProducts from '../layouts/ExploreProducts'
import NewArrival from '../layouts/NewArrival'
import Support from '../layouts/Support'





import { useDispatch } from "react-redux"
import { addbreadcrumb } from "../slices/breadCrumbSlice"

const Home = () => {

const dispatch = useDispatch()
useEffect(()=>{
  dispatch(addbreadcrumb("Home"))
},[])









  return (
    <>
      <Banner/>
      <TodayProducts/>
      <Catergory/>
      <BestProducts/>
      <Promotion/>
      <ExploreProducts/>
      <NewArrival/>
      <Support/>
    </>
  )
}

export default Home