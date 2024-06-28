import Link from 'next/link'
import React from 'react'
import Menu from './Menu';
import { getUser, logoutUser } from '@/actions/userAction';
import { cookies } from 'next/headers';
import CurrentUser from './CurrentUser';
import Cart from './Cart';
import Wishlist from './Wishlist';

const Header = async () => {
    const token = cookies().get('token')?.value || '';
    const userData = await getUser();

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
                                <Wishlist />
                                <li className="onhover-dropdown mobile-account"> <i className="fa fa-user" aria-hidden="true"></i>
                                    <CurrentUser userData={userData} token={token} logoutUser={logoutUser} />
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
                                    <Link href="/"><img src="/assets/images/icon/logo.png"
                                        className="img-fluid" alt="" /></Link>
                                </div>
                            </div>

                            <div className="menu-right pull-right">
                                <div>
                                    <nav id="main-nav">
                                        <div className="toggle-nav"><i className="fa fa-bars sidebar-bar"></i></div>
                                        <Menu />
                                    </nav>
                                </div>
                                <div>
                                    <div className="icon-nav">
                                        <ul>
                                            <li className="onhover-div mobile-search">
                                                <div className='search-header'>
                                                    <img src="/assets/images/icon/search.png" className="img-fluid" alt="" />
                                                    <i className="ti-search"></i>
                                                </div>

                                                <div id="search-overlay" className="search-overlay">
                                                    <span className="closebtn" title="Close Overlay">×</span>
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
                                            </li>

                                            <li className="onhover-div mobile-setting">
                                                <div className='setting-header'>
                                                    <img src="/assets/images/icon/setting.png" className="img-fluid" alt="" />
                                                    <i className="ti-settings"></i>
                                                </div>

                                                <div className="show-div setting">
                                                    <h6>language</h6>
                                                    <ul>
                                                        <li><Link href="#">english</Link></li>
                                                        <li><Link href="#">french</Link></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <Cart />
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