'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";

const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const products = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 991, settings: { slidesToShow: 2 } }
    ]
};

const blogs = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
};

const instagrams = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
        { breakpoint: 1367, settings: { slidesToShow: 6, slidesToScroll: 6 } },
        { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 5 } },
        { breakpoint: 600, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 3 } }
    ]
};

const clients = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        { breakpoint: 1367, settings: { slidesToShow: 5, slidesToScroll: 5 } },
        { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 767, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 2 } }
    ]
};

export const HomeSlider = () => (
    <Slider {...options} className="home-slider">
        {['/assets/images/home-banner/1.jpg', '/assets/images/home-banner/2.jpg'].map((src, index) => (
            <div key={index} className='pos-rel'>
                <div className="home text-center">
                    <img src={src} alt="" className="bg-img" />
                    <div className="slider-contain">
                        <div className="custom-text">
                            <h4>welcome to fashion</h4>
                            <h1>men fashion</h1>
                            <Link href="#" className="btn btn-solid">shop now</Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </Slider>
);

export const ProductSlider = ({ data }) => (
    <Slider {...products} className="product-m no-arrow">
        {
            data.map((item, index) => {
                return (
                    <div className="product-box" key={index}>
                        <div className="img-wrapper">
                            <div className="front">
                                {
                                    item.img.slice(0, 1).map((item, index) => (
                                        <img src={`/assets/images/upload/${item}`} alt="" key={index} className="img-fluid" />
                                    ))
                                }
                            </div>
                            <div className="back">
                                {
                                    item.img.slice(1, 2).map((item, index) => (
                                        <img src={`/assets/images/upload/${item}`} alt="" key={index} className="img-fluid" />
                                    ))
                                }
                            </div>

                            <div className="cart-info cart-wrap">
                                <button title="Add to cart"><i className="ti-shopping-cart"></i></button>
                                <Link href="#" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true"></i></Link>
                                <Link href="#" title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                <Link href="/compare" title="Compare"><i className="ti-reload" aria-hidden="true"></i></Link>
                            </div>
                        </div>

                        <div className="product-detail">
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>

                            <Link href={`/products/${item._id}`}>
                                <h6>{item.title}</h6>
                            </Link>

                            <h4>${item.price}.00</h4>
                            <ul className="color-variant">
                                {
                                    item.colors.map((item, index) => (
                                        item && <li key={index} style={{ backgroundColor: item }}></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                )
            })
        }
    </Slider>
);

export const BlogSlider = () => (
    <Slider {...blogs} className="no-arrow slick-default-margin">
        {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="col-md-12">
                <Link href="#">
                    <div className="classic-effect">
                        <img src={`/assets/images/blog/${i}.jpg`} className="img-fluid bg-img" alt="" />
                        <span></span>
                    </div>
                </Link>
                <div className="blog-details">
                    <h4>25 January 2021</h4>
                    <Link href="#"><p>Blog post {i}</p></Link>
                    <hr className="style1" />
                    <h6>by: John Doe, 2 Comments</h6>
                </div>
            </div>
        ))}
    </Slider>
);

export const InstagramSlider = () => (
    <Slider {...instagrams} className="no-arrow slick-instagram">
        {[2, 3, 4, 6, 7, 8, 9].map((i) => (
            <div key={i}>
                <Link href="#">
                    <div className="instagram-box">
                        <img src={`/assets/images/slider/${i}.jpg`} className="bg-img" alt="img" />
                        <div className="overlay"><i className="fa fa-instagram"></i></div>
                    </div>
                </Link>
            </div>
        ))}
    </Slider>
);

export const ClientSlider = () => (
    <Slider {...clients} className="no-arrow">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i}>
                <div className="logo-block">
                    <Link href="#"><img src={`/assets/images/logos/${i}.png`} alt="" /></Link>
                </div>
            </div>
        ))}
    </Slider>
);

export const SingleProductSlider = ({ data }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    return (
        <>
            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} className="product-slick">
                {data.img.map((item, index) => (
                    <div key={index}>
                        <img src={`/assets/images/upload/${item}`} alt="" className="img-fluid image_zoom_cls-0" />
                    </div>
                ))}
            </Slider>

            <div className="row">
                <div className="col-12 p-0">
                    <Slider asNavFor={nav1} ref={slider => (sliderRef2 = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true} className="slider-nav">
                        {data.img.map((item, index) => (
                            <div key={index}>
                                <img src={`/assets/images/upload/${item}`} alt="" className="img-fluid image_zoom_cls-0" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
};