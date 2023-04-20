import React from 'react'
import Navbar from '../components/navbar/Navbar'
import slide1 from "../assets/slide1.jpg";
import slide from '../assets/slide.jpg'
import Carousel from '../components/carousel/Carousel'
import Body from '../components/body/Body';
// import Carousel from '../components/Carousel'

const Home = () => {

  const slides = [
    {
      url: slide1,
    },
    {
      url: slide,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-slate-100 flex-col box-border">
      <Navbar />
     <Carousel />
     <Body />
    </div>
  )
}

export default Home
