'use client'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const ProductDetails = () => {
    var options1 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    };

    var options2 = {
        vertical: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slick',
        arrows: false,
        dots: false,
        focusOnSelect: true
    };

    return (
        <>
            <Breadcrumb title="Product details" parent="Products" parentLink="products" />

            <section>
                <div className="collection-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Slider {...options1} className="product-slick">
                                    <div><img src="/assets/images/pro3/1.jpg" alt=""
                                        className="img-fluid image_zoom_cls-0" /></div>
                                    <div><img src="/assets/images/pro3/2.jpg" alt=""
                                        className="img-fluid image_zoom_cls-1" /></div>
                                    <div><img src="/assets/images/pro3/27.jpg" alt=""
                                        className="img-fluid image_zoom_cls-2" /></div>
                                    <div><img src="/assets/images/pro3/27.jpg" alt=""
                                        className="img-fluid image_zoom_cls-3" /></div>
                                </Slider>
                                <div className="row">
                                    <div className="col-12 p-0">
                                        <Slider {...options2} className="slider-nav">
                                            <div><img src="/assets/images/pro3/1.jpg" alt=""
                                                className="img-fluid" /></div>
                                            <div><img src="/assets/images/pro3/2.jpg" alt=""
                                                className="img-fluid" /></div>
                                            <div><img src="/assets/images/pro3/27.jpg" alt=""
                                                className="img-fluid" /></div>
                                            <div><img src="/assets/images/pro3/27.jpg" alt=""
                                                className="img-fluid" /></div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 rtl-text">
                                <div className="product-right">
                                    <div className="product-count">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/fire.gif" className="img-fluid" alt="image" />
                                                <span className="p-counter">37</span>
                                                <span className="lang">orders in last 24 hours</span>
                                            </li>
                                            <li>
                                                <img src="/assets/images/person.gif" className="img-fluid user_img" alt="image" />
                                                <span className="p-counter">44</span>
                                                <span className="lang">active view this</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2>Women Pink Shirt</h2>
                                    <div className="rating-section">
                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                            className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        </div>
                                        <h6>120 ratings</h6>
                                    </div>
                                    <div className="label-section">
                                        <span className="badge badge-grey-color">#1 Best seller</span>
                                        <span className="label-text">in fashion</span>
                                    </div>
                                    <h3 className="price-detail">$32.96 <del>$459.00</del><span>55% off</span></h3>
                                    <ul className="color-variant">
                                        <li className="bg-light0 active"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                    <div id="selectSize" className="addeffect-section product-description border-product">
                                        <h6 className="product-title size-text">select size <span><Link href="#" data-bs-toggle="modal"
                                            data-bs-target="#sizemodal">size
                                            chart</Link></span></h6>
                                        <div className="modal fade">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Sheer
                                                            Straight Kurta</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                    </div>
                                                    <div className="modal-body"><img src="/assets/images/size-chart.jpg" alt=""
                                                        className="img-fluid" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="error-message">please select size</h6>
                                        <div className="size-box">
                                            <ul>
                                                <li><Link href="#">s</Link></li>
                                                <li><Link href="#">m</Link></li>
                                                <li><Link href="#">l</Link></li>
                                                <li><Link href="#">xl</Link></li>
                                            </ul>
                                        </div>
                                        <h6 className="product-title">quantity</h6>
                                        <div className="qty-box">
                                            <div className="input-group"><span className="input-group-prepend"><button type="button"
                                                className="btn quantity-left-minus" data-type="minus" data-field=""><i
                                                    className="ti-angle-left"></i></button> </span>
                                                <input type="text" name="quantity" className="form-control input-number" defaultValue="1" />
                                                <span className="input-group-prepend"><button type="button"
                                                    className="btn quantity-right-plus" data-type="plus" data-field=""><i
                                                        className="ti-angle-right"></i></button></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-buttons"><Link href="#" id="cartEffect"
                                        className="btn btn-solid hover-solid btn-animation"><i className="fa fa-shopping-cart me-1"
                                            aria-hidden="true"></i> add to cart</Link> <Link href="#" className="btn btn-solid"><i
                                                className="fa fa-bookmark fz-16 me-2" aria-hidden="true"></i>wishlist</Link></div>
                                    <div className="product-count">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/icon/truck.png" className="img-fluid" alt="image" />
                                                <span className="lang">Free shipping for orders above $500 USD</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="border-product">
                                        <h6 className="product-title">Sales Ends In</h6>
                                        <div className="timer">
                                            <p id="demo"></p>
                                        </div>
                                    </div>
                                    <div className="border-product">
                                        <h6 className="product-title">shipping info</h6>
                                        <ul className="shipping-info">
                                            <li>100% Original Products</li>
                                            <li>Free Delivery on order above Rs. 799</li>
                                            <li>Pay on delivery is available</li>
                                            <li>Easy 30 days returns and exchanges</li>
                                        </ul>
                                    </div>
                                    <div className="border-product">
                                        <h6 className="product-title">share it</h6>
                                        <div className="product-icon">
                                            <ul className="product-social">
                                                <li><Link href="#"><i className="fa fa-facebook-f"></i></Link></li>
                                                <li><Link href="#"><i className="fa fa-google-plus"></i></Link></li>
                                                <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                                <li><Link href="#"><i className="fa fa-rss"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="border-product">
                                        <h6 className="product-title">100% secure payment</h6>
                                        <img src="/assets/images/payment.png" className="img-fluid mt-1" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tab-product m-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <Tabs>
                                <TabList>
                                    <Tab>Details</Tab>
                                    <Tab>Specification</Tab>
                                    <Tab>Video</Tab>
                                    <Tab>Write Review</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="product-tab-discription">
                                        <div className="part">
                                            <p>The Model is wearing a white blouse from our stylist's collection, see the image
                                                for a mock-up of what the actual blouse would look like.it has text written on
                                                it in a black cursive language which looks great on a white color.</p>
                                        </div>
                                        <div className="part">
                                            <h5 className="inner-title">fabric:</h5>
                                            <p>Art silk is manufactured by synthetic fibres like rayon. It's light in weight and
                                                is soft on the skin for comfort in summers.Art silk is manufactured by synthetic
                                                fibres like rayon. It's light in weight and is soft on the skin for comfort in
                                                summers.</p>
                                        </div>
                                        <div className="part">
                                            <h5 className="inner-title">size & fit:</h5>
                                            <p>The model (height 5'8") is wearing a size S</p>
                                        </div>
                                        <div className="part">
                                            <h5 className="inner-title">Material & Care:</h5>
                                            <p>Top fabric: pure cotton</p>
                                            <p>Bottom fabric: pure cotton</p>
                                            <p>Hand-wash</p>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <p>The Model is wearing a white blouse from our stylist's collection, see the image for a
                                        mock-up of what the actual blouse would look like.it has text written on it in a black
                                        cursive language which looks great on a white color.</p>
                                    <div className="single-product-tables">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Sleeve Length</td>
                                                    <td>Sleevless</td>
                                                </tr>
                                                <tr>
                                                    <td>Neck</td>
                                                    <td>Round Neck</td>
                                                </tr>
                                                <tr>
                                                    <td>Occasion</td>
                                                    <td>Sports</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Fabric</td>
                                                    <td>Polyester</td>
                                                </tr>
                                                <tr>
                                                    <td>Fit</td>
                                                    <td>Regular Fit</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BUWzX78Ye_8"
                                            allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <form className="theme-form">
                                        <div className="form-row row">
                                            <div className="col-md-12">
                                                <div className="media">
                                                    <label>Rating</label>
                                                    <div className="media-body ms-3">
                                                        <div className="rating three-star"><i className="fa fa-star"></i> <i
                                                            className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label for="name">Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Enter Your name"
                                                    required />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="email">Email</label>
                                                <input type="text" className="form-control" id="email" placeholder="Email" required />
                                            </div>
                                            <div className="col-md-12">
                                                <label for="review">Review Title</label>
                                                <input type="text" className="form-control" id="review"
                                                    placeholder="Enter your Review Subjects" required />
                                            </div>
                                            <div className="col-md-12">
                                                <label for="review">Review Title</label>
                                                <textarea className="form-control" placeholder="Wrire Your Testimonial Here"
                                                    id="exampleFormControlTextarea1" rows="6"></textarea>
                                            </div>
                                            <div className="col-md-12">
                                                <button className="btn btn-solid" type="submit">Submit YOur
                                                    Review</button>
                                            </div>
                                        </div>
                                    </form>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-b-space ratio_asos">
                <div className="container">
                    <div className="row">
                        <div className="col-12 product-related">
                            <h2>related products</h2>
                        </div>
                    </div>
                    <div className="row search-product">
                        <div className="col-xl-2 col-md-4 col-6">
                            <div className="product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href="#"><img src="/assets/images/pro3/33.jpg"
                                            className="img-fluid bg-img" alt="" /></Link>
                                    </div>
                                    <div className="back">
                                        <Link href="#"><img src="/assets/images/pro3/34.jpg"
                                            className="img-fluid bg-img" alt="" /></Link>
                                    </div>
                                    <div className="cart-info cart-wrap">
                                        <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i
                                            className="ti-shopping-cart"></i></button> <Link href="#"
                                                title="Add to Wishlist"><i className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                    data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i
                                                        className="ti-search" aria-hidden="true"></i></Link> <Link href="/compare"
                                                            title="Compare"><i className="ti-reload" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                                <div className="product-detail">
                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                        className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                    </div>
                                    <Link href="/products/1">
                                        <h6>Slim Fit Cotton Shirt</h6>
                                    </Link>
                                    <h4>$500.00</h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6">
                            <div className="product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href="#"><img src="/assets/images/pro3/1.jpg"
                                            className="img-fluid bg-img" alt="" /></Link>
                                    </div>
                                    <div className="back">
                                        <Link href="#"><img src="/assets/images/pro3/2.jpg"
                                            className="img-fluid bg-img" alt="" /></Link>
                                    </div>
                                    <div className="cart-info cart-wrap">
                                        <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i
                                            className="ti-shopping-cart"></i></button> <Link href="#"
                                                title="Add to Wishlist"><i className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                    data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i
                                                        className="ti-search" aria-hidden="true"></i></Link> <Link href="/compare"
                                                            title="Compare"><i className="ti-reload" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                                <div className="product-detail">
                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                        className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                    </div>
                                    <Link href="/products/1">
                                        <h6>Slim Fit Cotton Shirt</h6>
                                    </Link>
                                    <h4>$500.00</h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6">
                            <div className="product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href="#"><img src="/assets/images/pro3/27.jpg"
                                            className="img-fluid bg-img" alt="" /></Link>
                                    </div>
                                    <div className="back">
                                        <Link href="#"><img src="/assets/images/pro3/28.jpg"
                                            className="img-fluid bg-img" alt="" /></Link>
                                    </div>
                                    <div className="cart-info cart-wrap">
                                        <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i
                                            className="ti-shopping-cart"></i></button> <Link href="#"
                                                title="Add to Wishlist"><i className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                    data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i
                                                        className="ti-search" aria-hidden="true"></i></Link> <Link href="/compare"
                                                            title="Compare"><i className="ti-reload" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                                <div className="product-detail">
                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                        className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                    </div>
                                    <Link href="/products/1">
                                        <h6>Slim Fit Cotton Shirt</h6>
                                    </Link>
                                    <h4>$500.00</h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6">
                            <div className="product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href="#"><img src="/assets/images/pro3/35.jpg"
                                            className="img-fluid bg-img" alt="" /></Link>
                                    </div>
                                    <div className="back">
                                        <Link href="#"><img src="/assets/images/pro3/36.jpg"
                                            className="img-fluid bg-img" alt="" /></Link>
                                    </div>
                                    <div className="cart-info cart-wrap">
                                        <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i
                                            className="ti-shopping-cart"></i></button> <Link href="#"
                                                title="Add to Wishlist"><i className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                    data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i
                                                        className="ti-search" aria-hidden="true"></i></Link> <Link href="/compare"
                                                            title="Compare"><i className="ti-reload" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                                <div className="product-detail">
                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                        className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                    </div>
                                    <Link href="/products/1">
                                        <h6>Slim Fit Cotton Shirt</h6>
                                    </Link>
                                    <h4>$500.00</h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6">
                            <div className="product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href="#"><img src="/assets/images/pro3/2.jpg"
                                            className="img-fluid bg-img" alt="" /></Link>
                                    </div>
                                    <div className="back">
                                        <Link href="#"><img src="/assets/images/pro3/1.jpg"
                                            className="img-fluid bg-img" alt="" /></Link>
                                    </div>
                                    <div className="cart-info cart-wrap">
                                        <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i
                                            className="ti-shopping-cart"></i></button> <Link href="#"
                                                title="Add to Wishlist"><i className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                    data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i
                                                        className="ti-search" aria-hidden="true"></i></Link> <Link href="/compare"
                                                            title="Compare"><i className="ti-reload" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                                <div className="product-detail">
                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                        className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                    </div>
                                    <Link href="/products/1">
                                        <h6>Slim Fit Cotton Shirt</h6>
                                    </Link>
                                    <h4>$500.00</h4>
                                    <ul className="color-variant">
                                        <li className="bg-light0"></li>
                                        <li className="bg-light1"></li>
                                        <li className="bg-light2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6">
                            <div className="product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <Link href="#"><img src="/assets/images/pro3/28.jpg"
                                            className="img-fluid bg-img" alt="" /></Link>
                                    </div>
                                    <div className="back">
                                        <Link href="#"><img src="/assets/images/pro3/27.jpg"
                                            className="img-fluid bg-img" alt="" /></Link>
                                    </div>
                                    <div className="cart-info cart-wrap">
                                        <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i
                                            className="ti-shopping-cart"></i></button> <Link href="#"
                                                title="Add to Wishlist"><i className="ti-heart" aria-hidden="true"></i></Link> <Link href="#"
                                                    data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i
                                                        className="ti-search" aria-hidden="true"></i></Link> <Link href="/compare"
                                                            title="Compare"><i className="ti-reload" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                                <div className="product-detail">
                                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                        className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                    </div>
                                    <Link href="/products/1">
                                        <h6>Slim Fit Cotton Shirt</h6>
                                    </Link>
                                    <h4>$500.00</h4>
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
            </section>
        </>
    )
}

export default ProductDetails