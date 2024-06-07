"use client"
import React from 'react'
import Slider from 'react-slick'

const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots:false
};

const thumbSliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
};

const ProductSlider = (data) => {
    const images = data.image.img;

    const renderSlides = images.map((item, i) => (
        <div className="item" key={i}>
            <img src={`/assets/images/upload/${item}`} alt="Product" className="img-fluid" />
        </div>
    ));

    return (
        <div className="col-xl-4">
            <Slider {...mainSliderSettings} className="product__slider-main">
                {renderSlides}
            </Slider>

            <Slider {...thumbSliderSettings} className='product__slider-thmb'>
                {renderSlides}
            </Slider>
        </div>
    )
}

export default ProductSlider