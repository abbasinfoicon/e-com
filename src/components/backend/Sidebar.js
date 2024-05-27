import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className="page-sidebar">
            <div className="main-header-left d-none d-lg-block">
                <div className="logo-wrapper">
                    <Link href="/dashboard">
                        <img className="d-none d-lg-block blur-up lazyloaded"
                            src="../assets/images/dashboard/multikart-logo.png" alt="" />
                    </Link>
                </div>
            </div>

            <div className="sidebar custom-scrollbar">
                <Link href="#" className="sidebar-back d-lg-none d-block">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </Link>

                <div className="sidebar-user">
                    <img className="img-60" src="../assets/images/dashboard/user3.jpg" alt="#" />
                    <div>
                        <h6 className="f-14">JOHN</h6>
                        <p>general manager.</p>
                    </div>
                </div>

                <ul className="sidebar-menu">
                    <li>
                        <Link className="sidebar-header" href="/dashboard">
                            <i class="fa fa-home"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className='fa fa-cube'></i>
                            <span>Products</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </Link>

                        <ul className="sidebar-submenu">
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>
                                    <span>Physical</span>
                                    <i className="fa fa-angle-right pull-right"></i>
                                </Link>

                                <ul className="sidebar-submenu">
                                    <li>
                                        <Link href="#">
                                            <i className="fa fa-circle"></i>Category
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#">
                                            <i className="fa fa-circle"></i>Sub Category</Link>
                                    </li>

                                    <li>
                                        <Link href="#">
                                            <i className="fa fa-circle"></i>Product List</Link>
                                    </li>

                                    <li>
                                        <Link href="#">
                                            <i className="fa fa-circle"></i>Product Detail</Link>
                                    </li>

                                    <li>
                                        <Link href="#">
                                            <i className="fa fa-circle"></i>Add Product
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>
                                    <span>Digital</span>
                                    <i className="fa fa-angle-right pull-right"></i>
                                </Link>

                                <ul className="sidebar-submenu">
                                    <li>
                                        <Link href="#">
                                            <i className="fa fa-circle"></i>Category
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#">
                                            <i className="fa fa-circle"></i>Sub Category
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#">
                                            <i className="fa fa-circle"></i>Product List
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#">
                                            <i className="fa fa-circle"></i>Add Product
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>
                                    <span>product Review</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className='fa fa-archive'></i>
                            <span>Orders</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </Link>

                        <ul className="sidebar-submenu">
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>
                                    <span>Order List</span>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>
                                    <span>Order Tracking</span>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>
                                    <span>Order Details</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className='fa fa-usd'></i>
                            <span>Sales</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>Orders
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>Transactions
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className='fa fa-tag'></i>
                            <span>Coupons</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>List Coupons
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>Create Coupons
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className='fa fa-file-text'></i>
                            <span>Pages</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>List Page
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>Create Page
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className='fa fa-camera-retro'></i>
                            <span>Media</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className='fa fa-bars'></i>
                            <span>Menus</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>Menu Lists
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>Create Menu
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className='fa fa-user-plus'></i>
                            <span>Users</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>User List
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>Create User
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className='fa fa-users'></i>
                            <span>Vendors</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>Vendor List
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="fa fa-circle"></i>Create Vendor
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className='fa fa-compass'></i>
                            <span>Localization</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <Link href="#"><i className="fa fa-circle"></i>Translations
                                </Link>
                            </li>
                            <li>
                                <Link href="#"><i className="fa fa-circle"></i>Currency Rates
                                </Link>
                            </li>
                            <li>
                                <Link href="#"><i className="fa fa-circle"></i>Taxes
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className="fa fa-volume-control-phone"></i>
                            <span>Support Ticket</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className="fa fa-bar-chart"></i>
                            <span>Reports</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className="fa fa-cog"></i>
                            <span>Settings</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <Link href="#"><i className="fa fa-circle"></i>Profile</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className="fa fa-file-pdf-o"></i>
                            <span>Invoice</span></Link>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="/forgot-password">
                            <i className='fa fa-key'></i>
                            <span>Forgot Password</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="/login">
                            <i className='fa fa-sign-in'></i>
                            <span>Login</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar