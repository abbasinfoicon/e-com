import { getProduct } from '@/actions/prdtAction';
import ExclusiveProduct from '@/components/ExclusiveProduct';
import { BlogSlider, ClientSlider, HomeSlider, InstagramSlider, ProductSlider } from '@/components/Sliders';
import Link from 'next/link';
import React from 'react'

const Frontend = async () => {
    const productData = await getProduct();

    return (
        <main>
            <section className="p-0">
                <HomeSlider />
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
                            <ProductSlider data={productData} />
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
                                <ExclusiveProduct />
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
                            <BlogSlider />
                        </div>
                    </div>
                </div>
            </section>

            <section className="instagram ratio_square">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <h2 className="title-borderless">#whowearwhat</h2>
                            <InstagramSlider />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ClientSlider />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Frontend