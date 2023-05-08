import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css'

const galleryImages = [
    {
        img: '/images/co-so/1.jpg'
    },
    {
        img: '/images/co-so/2.jpg'
    },
    {
        img: '/images/co-so/3.jpg'
    },
    {
        img: '/images/co-so/4.jpg'
    },
    {
        img: '/images/co-so/5.jpg'
    },
    {
        img: '/images/co-so/6.jpg'
    },
    {
        img: '/images/co-so/7.jpg'
    },
    {
        img: '/images/co-so/8.jpg'
    },
    {
        img: '/images/co-so/9.jpg'
    },
    {
        img: '/images/co-so/10.jpg'
    },
]

function Gallery() {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(!openModal);
    };

    const handleCloseModal = () => {
        setOpenModal(!openModal);
    };

    const prevSlide = () => {
        if (slideNumber === 0) {
            setSlideNumber(galleryImages.length - 1)
        } else {
            setSlideNumber(slideNumber - 1)
        }
        
    }

    const nextSlide = () => {
        if (slideNumber === galleryImages.length - 1) {
            setSlideNumber(0)
        } else {
            setSlideNumber(slideNumber + 1)
        }
    }

  return (
    <div className='gallery'>
        <h1>HÌNH ẢNH TẠI HỆ THỐNG KARAOKE MUZICBOX</h1>
        {openModal &&
            <div className='sliderParent'>
                <div className='sliderWrapper'>
                    <i className="fi fi-br-angle-left btnPrev" onClick={prevSlide}></i>
                    <div className='fullScreenImage'>
                        <i className="fi fi-sr-cross-circle btnClose" onClick={handleCloseModal}></i>
                        <img src={galleryImages[slideNumber].img}></img>
                    </div>
                    <i className="fi fi-br-angle-right btnNext" onClick={nextSlide}></i>
                </div>
                <div className='sliderWrapper-layer' onClick={handleCloseModal}>
                </div>
            </div>
        }
        
        <div className='galleryWrapper'>
            {
                galleryImages.map((slide, index) => {
                    return (
                        <div 
                            className='singleImage'
                            key={index}
                            onClick={ () => handleOpenModal(index)}
                        >
                            <img src={slide.img} alt='' />
                        </div>
                    )
                }) 
            }
        </div>
    </div>
  )
}

export default Gallery