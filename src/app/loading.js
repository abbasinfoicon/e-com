import Link from 'next/link'
import React from 'react'

const loading = () => {
    return (
        <div className="loader_skeleton">
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                    <li>Welcome to Our store Multikart</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123 - 456 - 7890</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <ul className="header-dropdown">
                                <li className="mobile-wishlist"><Link href="#"><i className="fa fa-heart" aria-hidden="true"></i></Link>
                                </li>
                                <li className="onhover-dropdown mobile-account"> <i className="fa fa-user" aria-hidden="true"></i>
                                    My Account
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="main-menu">
                                <div className="menu-left">
                                    <div className="navbar">
                                        <Link href="#">
                                            <div className="bar-style"><i className="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="brand-logo">
                                        <Link href="/"><img src="../assets/images/icon/logo.png"
                                            className="img-fluid blur-up lazyload" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="menu-right pull-right">
                                    <div>
                                        <nav>
                                            <div className="toggle-nav"><i className="fa fa-bars sidebar-bar"></i></div>
                                            <ul className="sm pixelstrap sm-horizontal">
                                                <li>
                                                    <div className="mobile-back text-end">Back<i className="fa fa-angle-right ps-2"
                                                        aria-hidden="true"></i></div>
                                                </li>
                                                <li>
                                                    <Link href="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">feature<div className="lable-nav">new</div></Link>
                                                </li>
                                                <li>
                                                    <Link href="#">shop</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">product</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">pages</Link>
                                                </li>
                                                <li><Link href="#">blog</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div>
                                        <div className="icon-nav d-none d-sm-block">
                                            <ul>
                                                <li className="onhover-div mobile-search">
                                                    <div><img src="../assets/images/icon/search.png"
                                                        className="img-fluid blur-up lazyload" alt="" /> <i className="ti-search"
                                                           ></i></div>
                                                </li>
                                                <li className="onhover-div mobile-setting">
                                                    <div><img src="../assets/images/icon/setting.png"
                                                        className="img-fluid blur-up lazyload" alt="" /> <i
                                                            className="ti-settings"></i></div>
                                                </li>
                                                <li className="onhover-div mobile-cart">
                                                    <div><img src="../assets/images/icon/cart.png"
                                                        className="img-fluid blur-up lazyload" alt="" /> <i
                                                            className="ti-shopping-cart"></i></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="home-slider">
                <div className="home"></div>
            </div>
            <section className="collection-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ldr-bg">
                                <div className="contain-banner">
                                    <div>
                                        <h4></h4>
                                        <h2></h2>
                                        <h6></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ldr-bg">
                                <div className="contain-banner">
                                    <div>
                                        <h4></h4>
                                        <h2></h2>
                                        <h6></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container section-b-space">
                <div className="row section-t-space">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="product-para">
                            <p className="first"></p>
                            <p className="second"></p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="no-slider row">
                            <div className="product-box">
                                <div className="img-wrapper"></div>
                                <div className="product-detail">
                                    <h4></h4>
                                    <h5></h5>
                                    <h5 className="second"></h5>
                                    <h6></h6>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="img-wrapper"></div>
                                <div className="product-detail">
                                    <h4></h4>
                                    <h5></h5>
                                    <h5 className="second"></h5>
                                    <h6></h6>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="img-wrapper"></div>
                                <div className="product-detail">
                                    <h4></h4>
                                    <h5></h5>
                                    <h5 className="second"></h5>
                                    <h6></h6>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="img-wrapper"></div>
                                <div className="product-detail">
                                    <h4></h4>
                                    <h5></h5>
                                    <h5 className="second"></h5>
                                    <h6></h6>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="img-wrapper"></div>
                                <div className="product-detail">
                                    <h4></h4>
                                    <h5></h5>
                                    <h5 className="second"></h5>
                                    <h6></h6>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="img-wrapper"></div>
                                <div className="product-detail">
                                    <h4></h4>
                                    <h5></h5>
                                    <h5 className="second"></h5>
                                    <h6></h6>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="img-wrapper"></div>
                                <div className="product-detail">
                                    <h4></h4>
                                    <h5></h5>
                                    <h5 className="second"></h5>
                                    <h6></h6>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="img-wrapper"></div>
                                <div className="product-detail">
                                    <h4></h4>
                                    <h5></h5>
                                    <h5 className="second"></h5>
                                    <h6></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loading