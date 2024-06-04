import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const Products = () => {
    return (
        <>
            <Breadcrumb title="Products" />

            <section className="section-b-space ratio_asos">
                <div className="collection-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 collection-filter">
                                <div className="collection-filter-block">
                                    <div className="collection-mobile-back"><span className="filter-back"><i className="fa fa-angle-left"
                                        aria-hidden="true"></i> back</span></div>
                                    <div className="collection-collapse-block open">
                                        <h3 className="collapse-block-title">brand</h3>
                                        <div className="collection-collapse-block-content">
                                            <div className="collection-brand-filter">
                                                <div className="form-check collection-filter-checkbox">
                                                    <input type="checkbox" className="form-check-input" id="zara" />
                                                    <label className="form-check-label" htmlFor="zara">zara</label>
                                                </div>
                                                <div className="form-check collection-filter-checkbox">
                                                    <input type="checkbox" className="form-check-input" id="vera-moda" />
                                                    <label className="form-check-label" htmlFor="vera-moda">vera-moda</label>
                                                </div>
                                                <div className="form-check collection-filter-checkbox">
                                                    <input type="checkbox" className="form-check-input" id="forever-21" />
                                                    <label className="form-check-label" htmlFor="forever-21">forever-21</label>
                                                </div>
                                                <div className="form-check collection-filter-checkbox">
                                                    <input type="checkbox" className="form-check-input" id="roadster" />
                                                    <label className="form-check-label" htmlFor="roadster">roadster</label>
                                                </div>
                                                <div className="form-check collection-filter-checkbox">
                                                    <input type="checkbox" className="form-check-input" id="only" />
                                                    <label className="form-check-label" htmlFor="only">only</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="collection-collapse-block open">
                                        <h3 className="collapse-block-title">colors</h3>
                                        <div className="collection-collapse-block-content">
                                            <div className="color-selector">
                                                <ul>
                                                    <li className="color-1 active"></li>
                                                    <li className="color-2"></li>
                                                    <li className="color-3"></li>
                                                    <li className="color-4"></li>
                                                    <li className="color-5"></li>
                                                    <li className="color-6"></li>
                                                    <li className="color-7"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="collection-collapse-block border-0 open">
                                        <h3 className="collapse-block-title">size</h3>
                                        <div className="collection-collapse-block-content">
                                            <div className="collection-brand-filter">
                                                <div className="form-check collection-filter-checkbox">
                                                    <input type="checkbox" className="form-check-input" id="hundred" />
                                                    <label className="form-check-label" htmlFor="hundred">s</label>
                                                </div>
                                                <div className="form-check collection-filter-checkbox">
                                                    <input type="checkbox" className="form-check-input" id="twohundred" />
                                                    <label className="form-check-label" htmlFor="twohundred">m</label>
                                                </div>
                                                <div className="form-check collection-filter-checkbox">
                                                    <input type="checkbox" className="form-check-input" id="threehundred" />
                                                    <label className="form-check-label" htmlFor="threehundred">l</label>
                                                </div>
                                                <div className="form-check collection-filter-checkbox">
                                                    <input type="checkbox" className="form-check-input" id="fourhundred" />
                                                    <label className="form-check-label" htmlFor="fourhundred">xl</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="collection-collapse-block border-0 open">
                                        <h3 className="collapse-block-title">price</h3>
                                        <div className="collection-collapse-block-content">
                                            <div className="wrapper mt-3">
                                                <div className="range-slider">
                                                    <input type="text" className="js-range-slider" defaultdefaultValue="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="theme-card">
                                    <h5 className="title-border">new product</h5>
                                    <div className="offer-slider slide-1">
                                        <div>
                                            <div className="media">
                                                <Link href="/products/1"><img className="img-fluid"
                                                    src="/assets/images/fashion/pro/1.jpg" alt="" /></Link>
                                                <div className="media-body align-self-center">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div><Link href="/products/1">
                                                        <h6>Green Printed Dresses</h6>
                                                    </Link>
                                                    <h4>30.00</h4>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <Link href="/products/1"><img className="img-fluid"
                                                    src="/assets/images/fashion/pro/011.jpg" alt="" /></Link>
                                                <div className="media-body align-self-center">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div><Link href="/products/1">
                                                        <h6>Pink Printed Dresses</h6>
                                                    </Link>
                                                    <h4>$35.00</h4>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <Link href="/products/1"><img className="img-fluid"
                                                    src="/assets/images/fashion/pro/16.jpg" alt="" /></Link>
                                                <div className="media-body align-self-center">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div><Link href="/products/1">
                                                        <h6>Solid Green Dresses</h6>
                                                    </Link>
                                                    <h4>$33.00</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="media">
                                                <Link href="/products/1"><img className="img-fluid"
                                                    src="/assets/images/fashion/pro/001.jpg" alt="" /></Link>
                                                <div className="media-body align-self-center">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div><Link href="/products/1">
                                                        <h6>black White Printed Dresses</h6>
                                                    </Link>
                                                    <h4>$32.00</h4>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <Link href="/products/1"><img className="img-fluid"
                                                    src="/assets/images/fashion/pro/4.jpg" alt="" /></Link>
                                                <div className="media-body align-self-center">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div><Link href="/products/1">
                                                        <h6>Dotted Black Dresses</h6>
                                                    </Link>
                                                    <h4>$38.00</h4>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <Link href="/products/1"><img className="img-fluid"
                                                    src="/assets/images/fashion/pro/19.jpg" alt="" /></Link>
                                                <div className="media-body align-self-center">
                                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i>
                                                    </div><Link href="/products/1">
                                                        <h6>Blue Printed Dresses</h6>
                                                    </Link>
                                                    <h4>$36.00</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="collection-sidebar-banner">
                                    <Link href="/products/1"><img src="/assets/images/side-banner.png" className="img-fluid"
                                        alt="" /></Link>
                                </div>
                            </div>

                            <div className="collection-content col">
                                <div className="page-main-content">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="top-banner-wrapper">
                                                <Link href="/products/1"><img src="/assets/images/mega-menu/2.jpg"
                                                    className="img-fluid" alt="" /></Link>
                                                <div className="top-banner-content small-section">
                                                    <h4>BIGGEST DEALS ON TOP BRANDS</h4>
                                                    <p>The trick to choosing the best wear for yourself is to keep in mind your
                                                        body type, individual style, occasion and also the time of day or
                                                        weather.
                                                        In addition to eye-catching products from top brands, we also offer an
                                                        easy 30-day return and exchange policy, free and fast shipping across
                                                        all pin codes, cash or card on delivery option, deals and discounts,
                                                        among other perks. So, sign up now and shop for westarn wear to your
                                                        heart’s content on Multikart. </p>
                                                </div>
                                            </div>
                                            <div className="collection-product-wrapper">
                                                <div className="product-top-filter">
                                                    <div className="row">
                                                        <div className="col-xl-12">
                                                            <div className="filter-main-btn"><span
                                                                className="filter-btn btn btn-theme"><i className="fa fa-filter"
                                                                    aria-hidden="true"></i> Filter</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="product-filter-content">
                                                                <div className="search-count">
                                                                    <h5>Showing Products 1-24 of 10 Result</h5>
                                                                </div>
                                                                <div className="collection-view">
                                                                    <ul>
                                                                        <li><i className="fa fa-th grid-layout-view"></i></li>
                                                                        <li><i className="fa fa-list-ul list-layout-view"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="collection-grid-view">
                                                                    <ul>
                                                                        <li><img src="/assets/images/icon/2.png" alt=""
                                                                            className="product-2-layout-view" /></li>
                                                                        <li><img src="/assets/images/icon/3.png" alt=""
                                                                            className="product-3-layout-view" /></li>
                                                                        <li><img src="/assets/images/icon/4.png" alt=""
                                                                            className="product-4-layout-view" /></li>
                                                                        <li><img src="/assets/images/icon/6.png" alt=""
                                                                            className="product-6-layout-view" /></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="product-page-per-view">
                                                                    <select>
                                                                        <option defaultdefaultValue="High to low">24 Products Par Page
                                                                        </option>
                                                                        <option defaultdefaultValue="Low to High">50 Products Par Page
                                                                        </option>
                                                                        <option defaultdefaultValue="Low to High">100 Products Par Page
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div className="product-page-filter">
                                                                    <select>
                                                                        <option defaultdefaultValue="High to low">Sorting items</option>
                                                                        <option defaultdefaultValue="Low to High">50 Products</option>
                                                                        <option defaultdefaultValue="Low to High">100 Products</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-wrapper-grid">
                                                    <div className="row margin-res">
                                                        <div className="col-xl-3 col-6 col-grid-box">
                                                            <div className="product-box">
                                                                <div className="img-wrapper">
                                                                    <div className="front">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/35.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="back">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/36.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="cart-info cart-wrap">
                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#addtocart" title="Add to cart"><i
                                                                                className="ti-shopping-cart"></i></button> <Link
                                                                                    href="#" title="Add to Wishlist"><i
                                                                                        className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                                                            href="#" data-bs-toggle="modal"
                                                                                            data-bs-target="#quick-view" title="Quick View"><i
                                                                                                className="ti-search" aria-hidden="true"></i></Link> <Link
                                                                                                    href="/compare" title="Compare"><i
                                                                                                        className="ti-reload" aria-hidden="true"></i></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="product-detail">
                                                                    <div>
                                                                        <div className="rating"><i className="fa fa-star"></i> <i
                                                                            className="fa fa-star"></i> <i
                                                                                className="fa fa-star"></i> <i
                                                                                    className="fa fa-star"></i> <i
                                                                                        className="fa fa-star"></i></div>
                                                                        <Link href="/products/1">
                                                                            <h6>Candy red solid tshirt</h6>
                                                                        </Link>
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and
                                                                            typesetting industry. Lorem Ipsum has been the
                                                                            industry's standard dummy text ever since the 1500s,
                                                                            when an unknown printer took a galley
                                                                            of type and scrambled it to make a type specimen
                                                                            book</p>
                                                                        <h4>$45.00</h4>
                                                                        <ul className="color-variant">
                                                                            <li className="bg-light0"></li>
                                                                            <li className="bg-light1"></li>
                                                                            <li className="bg-light2"></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-6 col-grid-box">
                                                            <div className="product-box">
                                                                <div className="img-wrapper">
                                                                    <div className="front">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/27.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="back">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/28.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="cart-info cart-wrap">
                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#addtocart" title="Add to cart"><i
                                                                                className="ti-shopping-cart"></i></button> <Link
                                                                                    href="#" title="Add to Wishlist"><i
                                                                                        className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                                                            href="#" data-bs-toggle="modal"
                                                                                            data-bs-target="#quick-view" title="Quick View"><i
                                                                                                className="ti-search" aria-hidden="true"></i></Link> <Link
                                                                                                    href="/compare" title="Compare"><i
                                                                                                        className="ti-reload" aria-hidden="true"></i></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="product-detail">
                                                                    <div className="rating"><i className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <Link href="/products/1">
                                                                        <h6>Purple polo tshirt</h6>
                                                                    </Link>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. Lorem Ipsum has been the
                                                                        industry's standard dummy text ever since the 1500s,
                                                                        when an unknown printer took a galley
                                                                        of type and scrambled it to make a type specimen book
                                                                    </p>
                                                                    <h4>$40.00</h4>
                                                                    <ul className="color-variant">
                                                                        <li className="bg-light0"></li>
                                                                        <li className="bg-light1"></li>
                                                                        <li className="bg-light2"></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-6 col-grid-box">
                                                            <div className="product-box">
                                                                <div className="img-wrapper">
                                                                    <div className="front">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/1.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="back">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/2.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="cart-info cart-wrap">
                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#addtocart" title="Add to cart"><i
                                                                                className="ti-shopping-cart"></i></button> <Link
                                                                                    href="#" title="Add to Wishlist"><i
                                                                                        className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                                                            href="#" data-bs-toggle="modal"
                                                                                            data-bs-target="#quick-view" title="Quick View"><i
                                                                                                className="ti-search" aria-hidden="true"></i></Link> <Link
                                                                                                    href="/compare" title="Compare"><i
                                                                                                        className="ti-reload" aria-hidden="true"></i></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="product-detail">
                                                                    <div className="rating"><i className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <Link href="/products/1">
                                                                        <h6>Sleevless white top</h6>
                                                                    </Link>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. Lorem Ipsum has been the
                                                                        industry's standard dummy text ever since the 1500s,
                                                                        when an unknown printer took a galley
                                                                        of type and scrambled it to make a type specimen book
                                                                    </p>
                                                                    <h4>$65.00</h4>
                                                                    <ul className="color-variant">
                                                                        <li className="bg-light0"></li>
                                                                        <li className="bg-light1"></li>
                                                                        <li className="bg-light2"></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-6 col-grid-box">
                                                            <div className="product-box">
                                                                <div className="img-wrapper">
                                                                    <div className="front">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/33.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="back">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/34.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="cart-info cart-wrap">
                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#addtocart" title="Add to cart"><i
                                                                                className="ti-shopping-cart"></i></button> <Link
                                                                                    href="#" title="Add to Wishlist"><i
                                                                                        className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                                                            href="#" data-bs-toggle="modal"
                                                                                            data-bs-target="#quick-view" title="Quick View"><i
                                                                                                className="ti-search" aria-hidden="true"></i></Link> <Link
                                                                                                    href="/compare" title="Compare"><i
                                                                                                        className="ti-reload" aria-hidden="true"></i></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="product-detail">
                                                                    <div className="rating"><i className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <Link href="/products/1">
                                                                        <h6>multi color polo tshirt</h6>
                                                                    </Link>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. Lorem Ipsum has been the
                                                                        industry's standard dummy text ever since the 1500s,
                                                                        when an unknown printer took a galley
                                                                        of type and scrambled it to make a type specimen book
                                                                    </p>
                                                                    <h4>$65.00</h4>
                                                                    <ul className="color-variant">
                                                                        <li className="bg-light0"></li>
                                                                        <li className="bg-light1"></li>
                                                                        <li className="bg-light2"></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-6 col-grid-box">
                                                            <div className="product-box">
                                                                <div className="img-wrapper">
                                                                    <div className="front">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/27.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="back">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/28.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="cart-info cart-wrap">
                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#addtocart" title="Add to cart"><i
                                                                                className="ti-shopping-cart"></i></button> <Link
                                                                                    href="#" title="Add to Wishlist"><i
                                                                                        className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                                                            href="#" data-bs-toggle="modal"
                                                                                            data-bs-target="#quick-view" title="Quick View"><i
                                                                                                className="ti-search" aria-hidden="true"></i></Link> <Link
                                                                                                    href="/compare" title="Compare"><i
                                                                                                        className="ti-reload" aria-hidden="true"></i></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="product-detail">
                                                                    <div className="rating"><i className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <Link href="/products/1">
                                                                        <h6>Purple polo tshirt</h6>
                                                                    </Link>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. Lorem Ipsum has been the
                                                                        industry's standard dummy text ever since the 1500s,
                                                                        when an unknown printer took a galley
                                                                        of type and scrambled it to make a type specimen book
                                                                    </p>
                                                                    <h4>$40.00</h4>
                                                                    <ul className="color-variant">
                                                                        <li className="bg-light0"></li>
                                                                        <li className="bg-light1"></li>
                                                                        <li className="bg-light2"></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-6 col-grid-box">
                                                            <div className="product-box">
                                                                <div className="img-wrapper">
                                                                    <div className="front">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/35.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="back">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/36.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="cart-info cart-wrap">
                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#addtocart" title="Add to cart"><i
                                                                                className="ti-shopping-cart"></i></button> <Link
                                                                                    href="#" title="Add to Wishlist"><i
                                                                                        className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                                                            href="#" data-bs-toggle="modal"
                                                                                            data-bs-target="#quick-view" title="Quick View"><i
                                                                                                className="ti-search" aria-hidden="true"></i></Link> <Link
                                                                                                    href="/compare" title="Compare"><i
                                                                                                        className="ti-reload" aria-hidden="true"></i></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="product-detail">
                                                                    <div className="rating"><i className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <Link href="/products/1">
                                                                        <h6>Candy red solid tshirt</h6>
                                                                    </Link>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. Lorem Ipsum has been the
                                                                        industry's standard dummy text ever since the 1500s,
                                                                        when an unknown printer took a galley
                                                                        of type and scrambled it to make a type specimen
                                                                        book</p>
                                                                    <h4>$45.00</h4>
                                                                    <ul className="color-variant">
                                                                        <li className="bg-light0"></li>
                                                                        <li className="bg-light1"></li>
                                                                        <li className="bg-light2"></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-6 col-grid-box">
                                                            <div className="product-box">
                                                                <div className="img-wrapper">
                                                                    <div className="front">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/27.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="back">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/28.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="cart-info cart-wrap">
                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#addtocart" title="Add to cart"><i
                                                                                className="ti-shopping-cart"></i></button> <Link
                                                                                    href="#" title="Add to Wishlist"><i
                                                                                        className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                                                            href="#" data-bs-toggle="modal"
                                                                                            data-bs-target="#quick-view" title="Quick View"><i
                                                                                                className="ti-search" aria-hidden="true"></i></Link> <Link
                                                                                                    href="/compare" title="Compare"><i
                                                                                                        className="ti-reload" aria-hidden="true"></i></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="product-detail">
                                                                    <div className="rating"><i className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <Link href="/products/1">
                                                                        <h6>Purple polo tshirt</h6>
                                                                    </Link>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. Lorem Ipsum has been the
                                                                        industry's standard dummy text ever since the 1500s,
                                                                        when an unknown printer took a galley
                                                                        of type and scrambled it to make a type specimen book
                                                                    </p>
                                                                    <h4>$40.00</h4>
                                                                    <ul className="color-variant">
                                                                        <li className="bg-light0"></li>
                                                                        <li className="bg-light1"></li>
                                                                        <li className="bg-light2"></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-6 col-grid-box">
                                                            <div className="product-box">
                                                                <div className="img-wrapper">
                                                                    <div className="front">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/1.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="back">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/2.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="cart-info cart-wrap">
                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#addtocart" title="Add to cart"><i
                                                                                className="ti-shopping-cart"></i></button> <Link
                                                                                    href="#" title="Add to Wishlist"><i
                                                                                        className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                                                            href="#" data-bs-toggle="modal"
                                                                                            data-bs-target="#quick-view" title="Quick View"><i
                                                                                                className="ti-search" aria-hidden="true"></i></Link> <Link
                                                                                                    href="/compare" title="Compare"><i
                                                                                                        className="ti-reload" aria-hidden="true"></i></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="product-detail">
                                                                    <div className="rating"><i className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <Link href="/products/1">
                                                                        <h6>Sleevless white top</h6>
                                                                    </Link>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. Lorem Ipsum has been the
                                                                        industry's standard dummy text ever since the 1500s,
                                                                        when an unknown printer took a galley
                                                                        of type and scrambled it to make a type specimen book
                                                                    </p>
                                                                    <h4>$65.00</h4>
                                                                    <ul className="color-variant">
                                                                        <li className="bg-light0"></li>
                                                                        <li className="bg-light1"></li>
                                                                        <li className="bg-light2"></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-6 col-grid-box">
                                                            <div className="product-box">
                                                                <div className="img-wrapper">
                                                                    <div className="front">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/27.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="back">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/28.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="cart-info cart-wrap">
                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#addtocart" title="Add to cart"><i
                                                                                className="ti-shopping-cart"></i></button> <Link
                                                                                    href="#" title="Add to Wishlist"><i
                                                                                        className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                                                            href="#" data-bs-toggle="modal"
                                                                                            data-bs-target="#quick-view" title="Quick View"><i
                                                                                                className="ti-search" aria-hidden="true"></i></Link> <Link
                                                                                                    href="/compare" title="Compare"><i
                                                                                                        className="ti-reload" aria-hidden="true"></i></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="product-detail">
                                                                    <div className="rating"><i className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <Link href="/products/1">
                                                                        <h6>Purple polo tshirt</h6>
                                                                    </Link>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. Lorem Ipsum has been the
                                                                        industry's standard dummy text ever since the 1500s,
                                                                        when an unknown printer took a galley
                                                                        of type and scrambled it to make a type specimen book
                                                                    </p>
                                                                    <h4>$40.00</h4>

                                                                    <ul className="color-variant">
                                                                        <li className="bg-light0"></li>
                                                                        <li className="bg-light1"></li>
                                                                        <li className="bg-light2"></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-6 col-grid-box">
                                                            <div className="product-box">
                                                                <div className="img-wrapper">
                                                                    <div className="front">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/1.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="back">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/2.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="cart-info cart-wrap">
                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#addtocart" title="Add to cart"><i
                                                                                className="ti-shopping-cart"></i></button> <Link
                                                                                    href="#" title="Add to Wishlist"><i
                                                                                        className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                                                            href="#" data-bs-toggle="modal"
                                                                                            data-bs-target="#quick-view" title="Quick View"><i
                                                                                                className="ti-search" aria-hidden="true"></i></Link> <Link
                                                                                                    href="/compare" title="Compare"><i
                                                                                                        className="ti-reload" aria-hidden="true"></i></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="product-detail">
                                                                    <div className="rating"><i className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <Link href="/products/1">
                                                                        <h6>Sleevless white top</h6>
                                                                    </Link>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. Lorem Ipsum has been the
                                                                        industry's standard dummy text ever since the 1500s,
                                                                        when an unknown printer took a galley
                                                                        of type and scrambled it to make a type specimen book
                                                                    </p>
                                                                    <h4>$65.00</h4>
                                                                    <ul className="color-variant">
                                                                        <li className="bg-light0"></li>
                                                                        <li className="bg-light1"></li>
                                                                        <li className="bg-light2"></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-6 col-grid-box">
                                                            <div className="product-box">
                                                                <div className="img-wrapper">
                                                                    <div className="front">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/33.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="back">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/34.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="cart-info cart-wrap">
                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#addtocart" title="Add to cart"><i
                                                                                className="ti-shopping-cart"></i></button> <Link
                                                                                    href="#" title="Add to Wishlist"><i
                                                                                        className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                                                            href="#" data-bs-toggle="modal"
                                                                                            data-bs-target="#quick-view" title="Quick View"><i
                                                                                                className="ti-search" aria-hidden="true"></i></Link> <Link
                                                                                                    href="/compare" title="Compare"><i
                                                                                                        className="ti-reload" aria-hidden="true"></i></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="product-detail">
                                                                    <div className="rating"><i className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <Link href="/products/1">
                                                                        <h6>multi color polo tshirt</h6>
                                                                    </Link>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. Lorem Ipsum has been the
                                                                        industry's standard dummy text ever since the 1500s,
                                                                        when an unknown printer took a galley
                                                                        of type and scrambled it to make a type specimen book
                                                                    </p>
                                                                    <h4>$65.00</h4>
                                                                    <ul className="color-variant">
                                                                        <li className="bg-light0"></li>
                                                                        <li className="bg-light1"></li>
                                                                        <li className="bg-light2"></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-6 col-grid-box">
                                                            <div className="product-box">
                                                                <div className="img-wrapper">
                                                                    <div className="front">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/1.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="back">
                                                                        <Link href="/products/1"><img src="/assets/images/pro3/2.jpg"
                                                                            className="img-fluid bg-img"
                                                                            alt="" /></Link>
                                                                    </div>
                                                                    <div className="cart-info cart-wrap">
                                                                        <button data-bs-toggle="modal"
                                                                            data-bs-target="#addtocart" title="Add to cart"><i
                                                                                className="ti-shopping-cart"></i></button> <Link
                                                                                    href="#" title="Add to Wishlist"><i
                                                                                        className="ti-heart" aria-hidden="true"></i></Link> <Link
                                                                                            href="#" data-bs-toggle="modal"
                                                                                            data-bs-target="#quick-view" title="Quick View"><i
                                                                                                className="ti-search" aria-hidden="true"></i></Link> <Link
                                                                                                    href="/compare" title="Compare"><i
                                                                                                        className="ti-reload" aria-hidden="true"></i></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="product-detail">
                                                                    <div className="rating"><i className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    </div>
                                                                    <Link href="/products/1">
                                                                        <h6>Sleevless white top</h6>
                                                                    </Link>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and
                                                                        typesetting industry. Lorem Ipsum has been the
                                                                        industry's standard dummy text ever since the 1500s,
                                                                        when an unknown printer took a galley
                                                                        of type and scrambled it to make a type specimen book
                                                                    </p>
                                                                    <h4>$65.00</h4>
                                                                    <ul className="color-variant">
                                                                        <li className="bg-light0"></li>
                                                                        <li className="bg-light1"></li>
                                                                        <li className="bg-light2"></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-pagination">
                                                    <div className="theme-paggination-block">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-md-6 col-sm-12">
                                                                <nav aria-label="Page navigation">
                                                                    <ul className="pagination">
                                                                        <li className="page-item"><Link className="page-link" href="#"
                                                                            aria-label="Previous"><span
                                                                                aria-hidden="true"><i
                                                                                    className="fa fa-chevron-left"
                                                                                    aria-hidden="true"></i></span> <span
                                                                                        className="sr-only">Previous</span></Link></li>
                                                                        <li className="page-item active"><Link className="page-link"
                                                                            href="#">1</Link></li>
                                                                        <li className="page-item"><Link className="page-link"
                                                                            href="#">2</Link></li>
                                                                        <li className="page-item"><Link className="page-link"
                                                                            href="#">3</Link></li>
                                                                        <li className="page-item"><Link className="page-link" href="#"
                                                                            aria-label="Next"><span aria-hidden="true"><i
                                                                                className="fa fa-chevron-right"
                                                                                aria-hidden="true"></i></span> <span
                                                                                    className="sr-only">Next</span></Link></li>
                                                                    </ul>
                                                                </nav>
                                                            </div>
                                                            <div className="col-xl-6 col-md-6 col-sm-12">
                                                                <div className="product-search-count-bottom">
                                                                    <h5>Showing Products 1-24 of 10 Result</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products