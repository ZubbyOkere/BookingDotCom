import React, { useState } from 'react'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import {
  TbCircleArrowRightFilled,
  TbCircleArrowLeftFilled,
  TbCircleXFilled,
} from 'react-icons/tb'
import { GoLocation } from 'react-icons/go'
import './Hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

const Hotel = () => {
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },
  ]
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSliderNumber
    if (direction === 'i') {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSliderNumber)
  }
  return (
    <div>
      <Navbar />
      <Header type={'list'} />
      <div className='hotelContainer'>
        {open && (
          <div className='slider'>
            <div className='slider'>
              <TbCircleXFilled
                className='close'
                onClick={() => setOpen(false)}
                size={30}
              />
              <TbCircleArrowLeftFilled
                onClick={() => handleMove('i')}
                size={30}
              />
              <div className='slideWrapper'>
                <img src={photos[slideNumber].src} alt='' />
              </div>
              <TbCircleArrowRightFilled
                onClick={() => handleMove('r')}
                size={30}
              />
            </div>
          </div>
        )}
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or book now</button>
          <h1 className='hotelTitle'>Best Luxury Hotel</h1>
          <div className='hotelAddress'>
            <GoLocation />
            <span>Elton St 125 New york</span>
          </div>
          <span className='hotelDistance'>
            Excellent location -4km from the city center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay for just $44 and get a free ride to and from the airport
          </span>
          <div className='hotelImages'>
            {photos.map((photo) => (
              <div className='hotelImgWrapper'>
                <img
                  src={photo.src}
                  alt='Images'
                  onClick={() => handleOpen()}
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelDetailsTexts'>
                Get the best view of the city
              </h1>
              <p className='hotelDesc'>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for two weeks stay</h1>
              <span>
                Located at the heart of the city where you get the feel of the
                serenity and everything else!
              </span>
              <h2>
                <b>$300</b>(2weeks)
              </h2>
              <button>Reserve or book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
