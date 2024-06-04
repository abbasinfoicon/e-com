"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Sidebar = () => {
    useEffect(() => {
        const handleSidebarClick = (event) => {
            const liElements = document.querySelectorAll('.sidebar-menu li');
            liElements.forEach((li) => li.classList.remove('active'));
            event.currentTarget.classList.add('active');
        };

        const liElements = document.querySelectorAll('.sidebar-menu > li');
        liElements.forEach((li) => {
            li.addEventListener('click', handleSidebarClick);
        });

        return () => {
            liElements.forEach((li) => {
                li.removeEventListener('click', handleSidebarClick);
            });
        };
    }, []);

    return (
        <div className="page-sidebar">
            <div className="main-header-left d-none d-lg-block">
                <div className="logo-wrapper">
                    <Link href="/dashboard">
                        <img className="d-none d-lg-block blur-up lazyloaded"
                            src="/assets/images/dashboard/multikart-logo.png" alt="" />
                    </Link>
                </div>
            </div>

            <div className="sidebar custom-scrollbar">
                <Link href="#" className="sidebar-back d-lg-none d-block">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </Link>

                <div className="sidebar-user">
                    <img className="img-60" src="/assets/images/dashboard/user3.jpg" alt="#" />
                    <div>
                        <h6 className="f-14">JOHN</h6>
                        <p>general manager.</p>
                    </div>
                </div>

                <ul className="sidebar-menu">
                    <li>
                        <Link className="sidebar-header" href="/dashboard">
                            <i className="fa fa-home"></i>
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
                                <Link href="/dashboard/products">
                                    <i className="fa fa-circle"></i>
                                    <span>Product List</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/category">
                                    <i className="fa fa-circle"></i>
                                    <span>Category</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/products/add">
                                    <i className="fa fa-circle"></i>
                                    <span>Add Product</span>
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
                                <Link href="/dashboard/orders">
                                    <i className="fa fa-circle"></i>
                                    <span>Order List</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link href="/dashboard/orders/sales">
                                    <i className="fa fa-circle"></i>Sales
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/orders/transaction">
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
                                <Link href="/dashboard/coupons">
                                    <i className="fa fa-circle"></i>List Coupons
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/coupons/add">
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
                                <Link href="/dashboard/pages">
                                    <i className="fa fa-circle"></i>List Page
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/pages/add">
                                    <i className="fa fa-circle"></i>Create Page
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className='fa fa-bars'></i>
                            <span>Menus</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <Link href="/dashboard/menu">
                                    <i className="fa fa-circle"></i>Menu Lists
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/menu/add">
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
                                <Link href="/dashboard/user">
                                    <i className="fa fa-circle"></i>User List
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/user/add">
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
                                <Link href="/dashboard/vendors">
                                    <i className="fa fa-circle"></i>Vendor List
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/vendors/add">
                                    <i className="fa fa-circle"></i>Create Vendor
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="#">
                            <i className="fa fa-cog"></i>
                            <span>Settings</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <Link href="/dashboard/profile"><i className="fa fa-circle"></i>Profile</Link>
                            </li>
                            <li>
                                <Link href="/dashboard/profile/reset-password"><i className='fa fa-circle'></i>Change Password</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="sidebar-header" href="/dashboard/invoice">
                            <i className="fa fa-file-pdf-o"></i>
                            <span>Invoice</span></Link>
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