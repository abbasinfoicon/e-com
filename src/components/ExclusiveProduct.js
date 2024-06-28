'use client'
import Link from 'next/link';
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ExclusiveProduct = () => {
    return (
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
    )
}

export default ExclusiveProduct