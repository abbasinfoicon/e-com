"use client"
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'

const Compare = () => {
    var options = {
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
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
        },
        {
            breakpoint: 586,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    };

    return (
        <>
            <Breadcrumb title="Compare" />

            <section className="compare-section section-b-space ratio_asos">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Slider {...options} className="slide-4 no-arrow">
                                <div>
                                    <div className="compare-part">
                                        <button type="button" className="close-btn">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <div className="img-secton">
                                            <div>
                                                <img src="../assets/images/pro3/1.jpg" className="img-fluid bg-img"
                                                    alt="" />
                                            </div>
                                            <Link href="#">
                                                <h5>slim fit shirt</h5>
                                            </Link>
                                            <h5>$555</h5>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>description</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>Brand Name</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Zara</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>size</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>XL, L, M, S, XS</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>color</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Red , Blue , Pink</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>material</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>cotton</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>availability</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>In stock</p>
                                            </div>
                                        </div>
                                        <div className="btn-part">
                                            <Link href="#" className="btn btn-solid">add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="compare-part">
                                        <button type="button" className="close-btn">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <div className="img-secton">
                                            <div>
                                                <img src="../assets/images/pro3/33.jpg"
                                                    className="img-fluid bg-img" alt="" />
                                            </div>
                                            <Link href="#">
                                                <h5>slim fit shirt</h5>
                                            </Link>
                                            <h5>$555</h5>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>description</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>Brand Name</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Zara</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>size</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>S, XS</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>color</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Blue , Pink</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>material</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>cotton</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>availability</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>In stock</p>
                                            </div>
                                        </div>
                                        <div className="btn-part">
                                            <Link href="#" className="btn btn-solid">add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="compare-part">
                                        <button type="button" className="close-btn">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <div className="img-secton">
                                            <div>
                                                <img src="../assets/images/pro3/35.jpg"
                                                    className="img-fluid bg-img" alt="" />
                                            </div>
                                            <Link href="#">
                                                <h5>slim fit shirt</h5>
                                            </Link>
                                            <h5>$555</h5>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>description</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>Brand Name</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Zara</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>size</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>XL, L, M, S, XS</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>color</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Red , Blue , Pink</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>material</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>cotton</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>availability</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>In stock</p>
                                            </div>
                                        </div>
                                        <div className="btn-part">
                                            <Link href="#" className="btn btn-solid">add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="compare-part">
                                        <button type="button" className="close-btn">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <div className="img-secton">
                                            <div>
                                                <img src="../assets/images/pro3/27.jpg"
                                                    className="img-fluid bg-img" alt="" />
                                            </div>
                                            <Link href="#">
                                                <h5>slim fit shirt</h5>
                                            </Link>
                                            <h5>$555</h5>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>description</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>Brand Name</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Zara</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>size</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>XL, L, M, S, XS</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>color</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Red , Blue , Pink</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>material</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>cotton</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>availability</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>In stock</p>
                                            </div>
                                        </div>
                                        <div className="btn-part">
                                            <Link href="#" className="btn btn-solid">add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="compare-part">
                                        <button type="button" className="close-btn">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <div className="img-secton">
                                            <div>
                                                <img src="../assets/images/pro3/1.jpg" className="img-fluid bg-img"
                                                    alt="" />
                                            </div>
                                            <Link href="#">
                                                <h5>slim fit shirt</h5>
                                            </Link>
                                            <h5>$555</h5>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>description</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>Brand Name</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Zara</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>size</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>XL, L</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>color</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>Red , Blue , Black</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>material</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>cotton</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>availability</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>In stock</p>
                                            </div>
                                        </div>
                                        <div className="btn-part">
                                            <Link href="#" className="btn btn-solid">add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Compare