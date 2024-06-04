'use client'
import Link from 'next/link';
import React from 'react'
import Slider from "react-slick";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Frontend = () => {
    var options = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    var products = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
        ]
    }
    var slide3 = {
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    }
    var slide7 = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [{
            breakpoint: 1367,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
        ]
    }
    var clients = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
            breakpoint: 1367,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }

        ]
    }

    return (
        <main>
            <section className="p-0">
                <Slider {...options} className="home-slider">
                    <div className='pos-rel'>
                        <div className="home text-center">
                            <img src="/assets/images/home-banner/1.jpg" alt="" className="bg-img" />
                            <div className="slider-contain">
                                <div className="custom-text">
                                    <h4>welcome to fashion</h4>
                                    <h1>men fashion</h1>
                                    <Link href="#" className="btn btn-solid">shop now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pos-rel'>
                        <div className="home text-center">
                            <img src="/assets/images/home-banner/2.jpg" alt="" className="bg-img" />
                            <div className="slider-contain">
                                <div className="custom-text">
                                    <h4>welcome to fashion</h4>
                                    <h1>men fashion</h1>
                                    <Link href="#" className="btn btn-solid">shop now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>

            <section className="pb-0 ratio2_1">
                <div className="container">
                    <div className="row partition2">
                        <div className="col-md-6">
                            <Link href="#">
                                <div className="collection-banner p-right text-center">
                                    <div className="img-part">
                                        <img src="/assets/images/sub-banner1.jpg" className="img-fluid bg-img"
                                            alt="" />
                                    </div>
                                    <div className="contain-banner">
                                        <div>
                                            <h4>save 30%</h4>
                                            <h2>men</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link href="#">
                                <div className="collection-banner p-right text-center">
                                    <div className="img-part">
                                        <img src="/assets/images/sub-banner2.jpg" className="img-fluid bg-img"
                                            alt="" />
                                    </div>
                                    <div className="contain-banner">
                                        <div>
                                            <h4>save 60%</h4>
                                            <h2>women</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="title1 section-t-space">
                <h4>special offer</h4>
                <h2 className="title-inner1">Latest Drops</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="product-para">
                            <p className="text-center">Looking for the latest trends in clothing, shoes and accessories? Welcome to
                                our 'Latest Drops' edit, bringing you all the latest styles from all your fave brands.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section-b-space pt-0 ratio_asos">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Slider {...products} className="product-m no-arrow">
                                <div className="product-box">
                                    <div className="img-wrapper">
                                        <div className="front">
                                            <Link href="/products/1"><img src="/assets/images/pro3/27.jpg"
                                                className="img-fluid bg-img" alt="" /></Link>
                                        </div>
                                        <div className="back">
                                            <Link href="/products/1"><img src="/assets/images/pro3/28.jpg"
                                                className="img-fluid bg-img" alt="" /></Link>
                                        </div>
                                        <div className="cart-info cart-wrap">
                                            <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart">
                                                <i className="ti-shopping-cart"></i>
                                            </button>
                                            <Link href="#" title="Add to Wishlist">
                                                <i className="ti-heart" aria-hidden="true"></i>
                                            </Link>
                                            <Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View">
                                                <i className="ti-search" aria-hidden="true"></i>
                                            </Link>
                                            <Link href="/compare" title="Compare">
                                                <i className="ti-reload" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-detail">
                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                            className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        </div>
                                        <Link href="/products/1">
                                            <h6>Purple polo tshirt</h6>
                                        </Link>
                                        <h4>$20.00</h4>
                                        <ul className="color-variant">
                                            <li className="bg-light0"></li>
                                            <li className="bg-light1"></li>
                                            <li className="bg-light2"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-box">
                                    <div className="img-wrapper">
                                        <div className="lable-block"><span className="lable3">new</span> <span className="lable4">on
                                            sale</span></div>
                                        <div className="front">
                                            <Link href="/products/1">
                                                <img src="/assets/images/pro3/1.jpg" className="img-fluid bg-img"
                                                    alt="" /></Link>
                                        </div>
                                        <div className="back">
                                            <Link href="/products/1"><img src="/assets/images/pro3/2.jpg"
                                                className="img-fluid bg-img" alt="" /></Link>
                                        </div>
                                        <div className="cart-info cart-wrap">
                                            <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i
                                                className="ti-shopping-cart"></i></button> <Link href="#"
                                                    title="Add to Wishlist"><i className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                        href="#" data-bs-toggle="modal" data-bs-target="#quick-view"
                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link> <Link
                                                            href="/compare" title="Compare"><i className="ti-reload"
                                                                aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                    <div className="product-detail">
                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                            className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        </div>
                                        <Link href="/products/1">
                                            <h6>Sleevless white top</h6>
                                        </Link>
                                        <h4>$25.00 <del>$30.00</del></h4>
                                        <ul className="color-variant">
                                            <li className="bg-light0"></li>
                                            <li className="bg-light1"></li>
                                            <li className="bg-light2"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-box">
                                    <div className="img-wrapper">
                                        <div className="lable-block"><span className="lable3">new</span> <span className="lable4">on
                                            sale</span></div>
                                        <div className="front">
                                            <Link href="/products/1"><img src="/assets/images/pro3/33.jpg"
                                                className="img-fluid bg-img" alt="" /></Link>
                                        </div>
                                        <div className="back">
                                            <Link href="/products/1"><img src="/assets/images/pro3/34.jpg"
                                                className="img-fluid bg-img" alt="" /></Link>
                                        </div>
                                        <div className="cart-info cart-wrap">
                                            <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i
                                                className="ti-shopping-cart"></i></button> <Link href="#"
                                                    title="Add to Wishlist"><i className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                        href="#" data-bs-toggle="modal" data-bs-target="#quick-view"
                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link> <Link
                                                            href="/compare" title="Compare"><i className="ti-reload"
                                                                aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                    <div className="product-detail">
                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                            className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        </div>
                                        <Link href="/products/1">
                                            <h6>multi color polo tshirt</h6>
                                        </Link>
                                        <h4>$65.00</h4>
                                        <ul className="color-variant">
                                            <li className="bg-light0"></li>
                                            <li className="bg-light1"></li>
                                            <li className="bg-light2"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-box">
                                    <div className="img-wrapper">
                                        <div className="front">
                                            <Link href="/products/1"><img src="/assets/images/pro3/35.jpg"
                                                className="img-fluid bg-img" alt="" /></Link>
                                        </div>
                                        <div className="back">
                                            <Link href="/products/1"><img src="/assets/images/pro3/36.jpg"
                                                className="img-fluid bg-img" alt="" /></Link>
                                        </div>
                                        <div className="cart-info cart-wrap">
                                            <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i
                                                className="ti-shopping-cart"></i></button> <Link href="#"
                                                    title="Add to Wishlist"><i className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                        href="#" data-bs-toggle="modal" data-bs-target="#quick-view"
                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link> <Link
                                                            href="/compare" title="Compare"><i className="ti-reload"
                                                                aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                    <div className="product-detail">
                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                            className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        </div>
                                        <Link href="/products/1">
                                            <h6>Candy red solid tshirt</h6>
                                        </Link>
                                        <h4>$89.00</h4>
                                        <ul className="color-variant">
                                            <li className="bg-light0"></li>
                                            <li className="bg-light1"></li>
                                            <li className="bg-light2"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-box">
                                    <div className="img-wrapper">
                                        <div className="lable-block"><span className="lable3">new</span> <span className="lable4">on
                                            sale</span></div>
                                        <div className="front">
                                            <Link href="/products/1"><img src="/assets/images/pro3/33.jpg"
                                                className="img-fluid bg-img" alt="" /></Link>
                                        </div>
                                        <div className="back">
                                            <Link href="/products/1"><img src="/assets/images/pro3/34.jpg"
                                                className="img-fluid bg-img" alt="" /></Link>
                                        </div>
                                        <div className="cart-info cart-wrap">
                                            <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i
                                                className="ti-shopping-cart"></i></button> <Link href="#"
                                                    title="Add to Wishlist"><i className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                        href="#" data-bs-toggle="modal" data-bs-target="#quick-view"
                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link> <Link
                                                            href="/compare" title="Compare"><i className="ti-reload"
                                                                aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                    <div className="product-detail">
                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                            className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        </div>
                                        <Link href="/products/1">
                                            <h6>multicolored polo tshirt</h6>
                                        </Link>
                                        <h4>$36.00</h4>
                                        <ul className="color-variant">
                                            <li className="bg-light0"></li>
                                            <li className="bg-light1"></li>
                                            <li className="bg-light2"></li>
                                        </ul>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-0">
                <div className="full-banner parallax text-center p-left" style={{ backgroundImage: 'url(/assets/images/parallax/1.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="banner-contain">
                                    <h2>2021</h2>
                                    <h3>fashion trends</h3>
                                    <h4>special offer</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="title1 section-t-space">
                <h4>exclusive products</h4>
                <h2 className="title-inner1">everyday casual</h2>
            </div>
            <section className="section-b-space pt-0 ratio_asos">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="theme-tab">
                                <Tabs>
                                    <TabList>
                                        <Tab>work casua</Tab>
                                        <Tab>WFH Wear</Tab>
                                        <Tab>comfort wear</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="no-slider row">
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/27.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/28.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>purple solid polo tshirt</h6>
                                                    </Link>
                                                    <h4>$50.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="lable-block"><span className="lable3">new</span> <span
                                                        className="lable4">on sale</span></div>
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/1.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/2.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>sleevles white tshirt with text</h6>
                                                    </Link>
                                                    <h4>$65.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/33.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/34.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>multi-color polo tshirt</h6>
                                                    </Link>
                                                    <h4>$45.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="lable-block"><span className="lable3">new</span> <span
                                                        className="lable4">on sale</span></div>
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/35.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/36.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>Candy red solid tshirt</h6>
                                                    </Link>
                                                    <h4>$30.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="lable-block"><span className="lable3">new</span> <span
                                                        className="lable4">on sale</span></div>
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/33.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/34.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>multi-color polo tshirt</h6>
                                                    </Link>
                                                    <h4>$65.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/35.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/36.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>Candy red solid tshirt</h6>
                                                    </Link>
                                                    <h4>$500.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="lable-block"><span className="lable3">new</span> <span
                                                        className="lable4">on sale</span></div>
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/1.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/2.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>sleevles white tshirt with text</h6>
                                                    </Link>
                                                    <h4>$50.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/27.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/28.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>purple solid polo tshirt</h6>
                                                    </Link>
                                                    <h4>$25.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="no-slider row">
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="lable-block"><span className="lable3">new</span> <span
                                                        className="lable4">on sale</span></div>
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/33.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/34.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>purple solid polo tshirt</h6>
                                                    </Link>
                                                    <h4>$50.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/35.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/36.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>Candy red solid tshirt</h6>
                                                    </Link>
                                                    <h4>$35.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="lable-block"><span className="lable3">new</span> <span
                                                        className="lable4">on sale</span></div>
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/1.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/2.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>sleevles white tshirt with text</h6>
                                                    </Link>
                                                    <h4>$55.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/27.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/28.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>purple solid polo tshirt</h6>
                                                    </Link>
                                                    <h4>$56.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/27.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/28.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>purple solid polo tshirt</h6>
                                                    </Link>
                                                    <h4>$35.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="lable-block"><span className="lable3">new</span> <span
                                                        className="lable4">on sale</span></div>
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/1.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/2.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>sleevles white tshirt with text</h6>
                                                    </Link>
                                                    <h4>$16.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/33.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/34.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>multi-color polo tshirt</h6>
                                                    </Link>
                                                    <h4>$19.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="lable-block"><span className="lable3">new</span> <span
                                                        className="lable4">on sale</span></div>
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/35.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/36.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>Candy red solid tshirt</h6>
                                                    </Link>
                                                    <h4>$18.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="no-slider row">
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="lable-block"><span className="lable3">new</span> <span
                                                        className="lable4">on sale</span></div>
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/33.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/34.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>multi-color polo tshirt</h6>
                                                    </Link>
                                                    <h4>$25.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/27.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/28.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>purple solid polo tshirt</h6>
                                                    </Link>
                                                    <h4>$35.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/33.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/34.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>multi-color polo tshirt</h6>
                                                    </Link>
                                                    <h4>$28.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="lable-block"><span className="lable3">new</span> <span
                                                        className="lable4">on sale</span></div>
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/1.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/2.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>sleevles white tshirt with text</h6>
                                                    </Link>
                                                    <h4>$16.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="lable-block"><span className="lable3">new</span> <span
                                                        className="lable4">on sale</span></div>
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/35.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/36.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>Candy red solid tshirt</h6>
                                                    </Link>
                                                    <h4>$24.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/35.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/36.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>Candy red solid tshirt</h6>
                                                    </Link>
                                                    <h4>$24.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="lable-block"><span className="lable3">new</span> <span
                                                        className="lable4">on sale</span></div>
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/1.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/2.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>sleevles white tshirt with text</h6>
                                                    </Link>
                                                    <h4>$38.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-box">
                                                <div className="img-wrapper">
                                                    <div className="front">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/27.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="back">
                                                        <Link href="/products/1"><img
                                                            src="/assets/images/pro3/28.jpg"
                                                            className="img-fluid bg-img" alt="" /></Link>
                                                    </div>
                                                    <div className="cart-info cart-wrap">
                                                        <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                            title="Add to cart"><i className="ti-shopping-cart"></i></button> <Link
                                                                href="#" title="Add to Wishlist"><i
                                                                    className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                                        data-bs-toggle="modal" data-bs-target="#quick-view"
                                                                        title="Quick View"><i className="ti-search" aria-hidden="true"></i></Link>
                                                        <Link href="/compare" title="Compare"><i className="ti-reload"
                                                            aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div>
                                                    <Link href="/products/1">
                                                        <h6>purple solid polo tshirt</h6>
                                                    </Link>
                                                    <h4>$24.00</h4>
                                                    <ul className="color-variant">
                                                        <li className="bg-light0"></li>
                                                        <li className="bg-light1"></li>
                                                        <li className="bg-light2"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <section className="service border-section small-section">
                    <div className="row">
                        <div className="col-md-4 service-block">
                            <div className="media">
                                <i className="ti-truck"></i>
                                <div className="media-body">
                                    <h4>free shipping</h4>
                                    <p>free shipping world wide</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 service-block">
                            <div className="media">
                                <i className="ti-alarm-clock"></i>
                                <div className="media-body">
                                    <h4>24 X 7 service</h4>
                                    <p>online service for new customer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 service-block">
                            <div className="media">
                                <i className="ti-announcement"></i>
                                <div className="media-body">
                                    <h4>festival offer</h4>
                                    <p>new online special festival offer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title1 section-t-space">
                            <h4>From the Blog</h4>
                            <h2 className="title-inner1">Fashion for you</h2>
                        </div>
                    </div>
                </div>
            </div>
            <section className="blog pt-0 ratio2_3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...slide3} className="no-arrow slick-default-margin">
                                <div className="col-md-12">
                                    <Link href="#">
                                        <div className="classic-effect">
                                            <div>
                                                <img src="/assets/images/blog/1.jpg" className="img-fluid bg-img"
                                                    alt="" />
                                            </div>
                                            <span></span>
                                        </div>
                                    </Link>
                                    <div className="blog-details">
                                        <h4>25 January 2021</h4>
                                        <Link href="#">
                                            <p>Top 10 January Best-Sellers Products – All Under $50!</p>
                                        </Link>
                                        <hr className="style1" />
                                        <h6>by: John Dio , 2 Comment</h6>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <Link href="#">
                                        <div className="classic-effect">
                                            <div>
                                                <img src="/assets/images/blog/2.jpg" className="img-fluid bg-img"
                                                    alt="" />
                                            </div>
                                            <span></span>
                                        </div>
                                    </Link>
                                    <div className="blog-details">
                                        <h4>25 January 2018</h4>
                                        <Link href="#">
                                            <p>Quarantine Birthday Celebration | In The Times of COVID-19</p>
                                        </Link>
                                        <hr className="style1" />
                                        <h6>by: John Dio , 2 Comment</h6>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <Link href="#">
                                        <div className="classic-effect">
                                            <div>
                                                <img src="/assets/images/blog/3.jpg" className="img-fluid bg-img"
                                                    alt="" />
                                            </div>
                                            <span></span>
                                        </div>
                                    </Link>
                                    <div className="blog-details">
                                        <h4>25 January 2018</h4>
                                        <Link href="#">
                                            <p>London fashion & Hair Trends From Fashion Week</p>
                                        </Link>
                                        <hr className="style1" />
                                        <h6>by: John Dio , 2 Comment</h6>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <Link href="#">
                                        <div className="classic-effect">
                                            <div>
                                                <img src="/assets/images/blog/4.jpg" className="img-fluid bg-img"
                                                    alt="" />
                                            </div>
                                            <span></span>
                                        </div>
                                    </Link>
                                    <div className="blog-details">
                                        <h4>25 January 2018</h4>
                                        <Link href="#">
                                            <p>Fun Fashion Clothing and Ideas for Valentine’s Day</p>
                                        </Link>
                                        <hr className="style1" />
                                        <h6>by: John Dio , 2 Comment</h6>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <Link href="#">
                                        <div className="classic-effect">
                                            <div>
                                                <img src="/assets/images/blog/5.jpg" className="img-fluid bg-img"
                                                    alt="" />
                                            </div>
                                            <span></span>
                                        </div>
                                    </Link>
                                    <div className="blog-details">
                                        <h4>25 January 2018</h4>
                                        <Link href="#">
                                            <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                                        </Link>
                                        <hr className="style1" />
                                        <h6>by: John Dio , 2 Comment</h6>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className="instagram ratio_square">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <h2 className="title-borderless">#whowearwhat</h2>
                            <Slider {...slide7} className="no-arrow slick-instagram">
                                <div>
                                    <Link href="#">
                                        <div className="instagram-box"> <img src="/assets/images/slider/2.jpg" className="bg-img"
                                            alt="img" />
                                            <div className="overlay"><i className="fa fa-instagram"></i></div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <div className="instagram-box"> <img src="/assets/images/slider/3.jpg" className="bg-img"
                                            alt="img" />
                                            <div className="overlay"><i className="fa fa-instagram"></i></div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <div className="instagram-box"> <img src="/assets/images/slider/4.jpg" className="bg-img"
                                            alt="img" />
                                            <div className="overlay"><i className="fa fa-instagram"></i></div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <div className="instagram-box"> <img src="/assets/images/slider/9.jpg" className="bg-img"
                                            alt="img" />
                                            <div className="overlay"><i className="fa fa-instagram"></i></div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <div className="instagram-box"> <img src="/assets/images/slider/6.jpg" className="bg-img"
                                            alt="img" />
                                            <div className="overlay"><i className="fa fa-instagram"></i></div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <div className="instagram-box"> <img src="/assets/images/slider/7.jpg" className="bg-img"
                                            alt="img" />
                                            <div className="overlay"><i className="fa fa-instagram"></i></div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <div className="instagram-box"> <img src="/assets/images/slider/8.jpg" className="bg-img"
                                            alt="img" />
                                            <div className="overlay"><i className="fa fa-instagram"></i></div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <div className="instagram-box"> <img src="/assets/images/slider/9.jpg" className="bg-img"
                                            alt="img" />
                                            <div className="overlay"><i className="fa fa-instagram"></i></div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        <div className="instagram-box"> <img src="/assets/images/slider/2.jpg" className="bg-img"
                                            alt="img" />
                                            <div className="overlay"><i className="fa fa-instagram"></i></div>
                                        </div>
                                    </Link>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...clients} className="no-arrow">
                                <div>
                                    <div className="logo-block">
                                        <Link href="#"><img src="/assets/images/logos/1.png" alt="" /></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <Link href="#"><img src="/assets/images/logos/2.png" alt="" /></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <Link href="#"><img src="/assets/images/logos/3.png" alt="" /></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <Link href="#"><img src="/assets/images/logos/4.png" alt="" /></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <Link href="#"><img src="/assets/images/logos/5.png" alt="" /></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <Link href="#"><img src="/assets/images/logos/6.png" alt="" /></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <Link href="#"><img src="/assets/images/logos/7.png" alt="" /></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <Link href="#"><img src="/assets/images/logos/8.png" alt="" /></Link>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Frontend