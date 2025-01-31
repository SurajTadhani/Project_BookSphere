import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from 'axios';

function FreeBook() {
  const [book, setBook] = useState([])
  useEffect(() => {
   const getBook = async () => {
    try {
   const res =  await axios.get('https://project-book-sphere-backend.vercel.app/book',{
    withCredentials: true,  // Remove if your backend does not use authentication
})
  //  console.log(res.data)
   setBook(res.data.filter((item) => item.category === "free"));
    } catch (error) {
      console.log("Error",error)
    }
   }
  getBook()
  }, [])
 
 
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
    <div className='max-w-screen-2xl container my-10'>
    <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>
        <div className="">
    <Slider {...settings}>
      {book.map((items) =>(
        <Cards items={items} key={items.id} />
      ))}
      </Slider>
    </div>
    </div>
   
    
    </>
  )
}

export default FreeBook