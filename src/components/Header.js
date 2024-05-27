'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Header = () => {
    const pathname = usePathname();
    const isActive = (href) => {
        if (href === '/') {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };


    return (
        <header>
            <div className="mobile-fix-option"></div>
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
                                <li className="mobile-wishlist"><Link href="/wishlist"><i className="fa fa-heart" aria-hidden="true"></i></Link>
                                </li>
                                <li className="onhover-dropdown mobile-account"> <i className="fa fa-user" aria-hidden="true"></i>
                                    My Account
                                    <ul className="onhover-show-div">
                                        <li><Link href="/user">User</Link></li>
                                        <li><Link href="/vendor">Vendor</Link></li>
                                        <li><Link href="/dashboard">Dashboard</Link></li>
                                        <li><Link href="/login">Login</Link></li>
                                        <li><Link href="/register">register</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="main-menu">
                            <div className="menu-left">
                                <div className="brand-logo">
                                    <Link href="/"><img src="../assets/images/icon/logo.png"
                                        className="img-fluid" alt="" /></Link>
                                </div>
                            </div>

                            <div className="menu-right pull-right">
                                <div>
                                    <nav id="main-nav">
                                        <div className="toggle-nav"><i className="fa fa-bars sidebar-bar"></i></div>
                                        <ul id="main-menu" className="sm pixelstrap sm-horizontal">
                                            <li>
                                                <div className="mobile-back text-end">Back<i className="fa fa-angle-right ps-2"
                                                    aria-hidden="true"></i></div>
                                            </li>
                                            <li className={isActive("/") ? "active" : ""}><Link href="/">Home</Link></li>
                                            <li className={isActive("/about") ? "active" : ""}><Link href="/about">About us</Link></li>
                                            <li className={isActive("/products") ? "active" : ""}><Link href="/products">Product</Link></li>
                                            <li className={isActive("/gallery") ? "active" : ""}><Link href="/gallery">Gallery</Link></li>
                                            <li className={isActive("/blog") ? "active" : ""}><Link href="/blog">Blog</Link></li>
                                            <li className={isActive("/contact") ? "active" : ""}><Link href="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div>
                                    <div className="icon-nav">
                                        <ul>
                                            <li className="onhover-div mobile-search">
                                                <div><img src="../assets/images/icon/search.png"
                                                    className="img-fluid" alt="" /> <i className="ti-search"
                                                       ></i></div>
                                                <div id="search-overlay" className="search-overlay">
                                                    <div> <span className="closebtn"
                                                        title="Close Overlay">×</span>
                                                        <div className="overlay-content">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <form>
                                                                            <div className="form-group">
                                                                                <input type="text" className="form-control"
                                                                                    id="exampleInputPassword1"
                                                                                    placeholder="Search a Product" />
                                                                            </div>
                                                                            <button type="submit" className="btn btn-primary"><i
                                                                                className="fa fa-search"></i></button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="onhover-div mobile-setting">
                                                <div><img src="../assets/images/icon/setting.png"
                                                    className="img-fluid" alt="" /> <i
                                                        className="ti-settings"></i></div>
                                                <div className="show-div setting">
                                                    <h6>language</h6>
                                                    <ul>
                                                        <li><Link href="#">english</Link></li>
                                                        <li><Link href="#">french</Link></li>
                                                    </ul>
                                                    <h6>currency</h6>
                                                    <ul className="list-inline">
                                                        <li><Link href="#">euro</Link></li>
                                                        <li><Link href="#">rupees</Link></li>
                                                        <li><Link href="#">pound</Link></li>
                                                        <li><Link href="#">doller</Link></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="onhover-div mobile-cart">
                                                <div><img src="../assets/images/icon/cart.png"
                                                    className="img-fluid" alt="" /> <i
                                                        className="ti-shopping-cart"></i></div>
                                                <span className="cart_qty_cls">2</span>
                                                <ul className="show-div shopping-cart">
                                                    <li>
                                                        <div className="media">
                                                            <Link href="#"><img alt="" className="me-3"
                                                                src="../assets/images/fashion/product/1.jpg" /></Link>
                                                            <div className="media-body">
                                                                <Link href="#">
                                                                    <h4>item name</h4>
                                                                </Link>
                                                                <h4><span>1 x $ 299.00</span></h4>
                                                            </div>
                                                        </div>
                                                        <div className="close-circle"><Link href="#"><i className="fa fa-times"
                                                            aria-hidden="true"></i></Link></div>
                                                    </li>
                                                    <li>
                                                        <div className="media">
                                                            <Link href="#"><img alt="" className="me-3"
                                                                src="../assets/images/fashion/product/2.jpg" /></Link>
                                                            <div className="media-body">
                                                                <Link href="#">
                                                                    <h4>item name</h4>
                                                                </Link>
                                                                <h4><span>1 x $ 299.00</span></h4>
                                                            </div>
                                                        </div>
                                                        <div className="close-circle"><Link href="#"><i className="fa fa-times"
                                                            aria-hidden="true"></i></Link></div>
                                                    </li>
                                                    <li>
                                                        <div className="total">
                                                            <h5>subtotal : <span>$299.00</span></h5>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="buttons"><Link href="/cart" className="view-cart">view
                                                            cart</Link> <Link href="/checkout" className="checkout">checkout</Link></div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </header >
    )
}

export default Header