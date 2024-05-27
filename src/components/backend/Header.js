import Link from 'next/link'
import React from 'react'

const AdminHeader = () => {
    return (
        <div className="page-main-header">
            <div className="main-header-right row">
                <div className="main-header-left d-lg-none w-auto">
                    <div className="logo-wrapper">
                        <Link href="/dashboard">
                            <img className="d-block d-lg-none"
                                src="../assets/images/dashboard/multikart-logo-black.png" alt="" />
                        </Link>
                    </div>
                </div>

                <div className="mobile-sidebar w-auto">
                    <div className="media-body text-end switch-sm">
                        <label className="switch">
                            <Link href="#">
                                <i id="sidebar-toggle" className="fa fa-align-left"></i>
                            </Link>
                        </label>
                    </div>
                </div>

                <div className="nav-right col">
                    <ul className="nav-menus">
                        <li>
                            <form className="form-inline search-form">
                                <div className="form-group">
                                    <input className="form-control-plaintext" type="search" placeholder="Search.." />
                                    <span className="d-sm-none mobile-search">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </form>
                        </li>
                        <li>
                            <Link className="text-dark" href="#" >
                                <i className="fa fa-expand"></i>
                            </Link>
                        </li>
                        <li className="onhover-dropdown">
                            <Link className="txt-dark" href="#">
                                <h6>EN</h6>
                            </Link>
                            <ul className="language-dropdown onhover-show-div p-20">
                                <li>
                                    <Link href="#" data-lng="en">
                                        <i className="flag-icon flag-icon-is"></i>English</Link>
                                </li>
                                <li>
                                    <Link href="#" data-lng="es">
                                        <i className="flag-icon flag-icon-um"></i>Spanish</Link>
                                </li>
                                <li>
                                    <Link href="#" data-lng="pt">
                                        <i className="flag-icon flag-icon-uy"></i>Portuguese</Link>
                                </li>
                                <li>
                                    <Link href="#" data-lng="fr">
                                        <i className="flag-icon flag-icon-nz"></i>French</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="onhover-dropdown">
                            <i className="fa fa-bell-o"></i>
                            <span className="badge badge-pill badge-primary pull-right notification-badge">3</span>
                            <span className="dot"></span>
                            <ul className="notification-dropdown onhover-show-div p-0">
                                <li>Notification <span className="badge badge-pill badge-primary pull-right">3</span></li>
                                <li>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6 className="mt-0">
                                                <span><i className="shopping-color fa fa-archive"></i></span> Your order ready for Ship..!
                                            </h6>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6 className="mt-0 txt-success">
                                                <span><i className="download-color font-success fa fa-download"></i>
                                                </span> Download Complete
                                            </h6>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6 className="mt-0 txt-danger">
                                                <span><i className="alert-color font-danger fa fa-info-circle"></i>
                                                </span> 250 MB trash files
                                            </h6>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="txt-dark"><Link href="#">All</Link> notification</li>
                            </ul>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="right_side_toggle fa fa-comments-o"></i>
                                <span className="dot"></span>
                            </Link>
                        </li>
                        <li className="onhover-dropdown">
                            <div className="media align-items-center">
                                <img className="align-self-center pull-right img-50 "
                                    src="../assets/images/dashboard/user3.jpg" alt="header-user" />
                                <div className="dotted-animation">
                                    <span className="animate-circle"></span>
                                    <span className="main-circle"></span>
                                </div>
                            </div>
                            <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                                <li><Link href="#"><i className="fa fa-user"></i> Edit Profile</Link></li>
                                <li><Link href="#"><i className="fa fa-envelope-o"></i> Inbox</Link></li>
                                <li><Link href="#"><i className="fa fa-lock"></i> Lock Screen</Link></li>
                                <li><Link href="#"><i className="fa fa-cog"></i> Settings</Link></li>
                                <li><Link href="#"><i className="fa fa-sign-out"></i> Logout</Link></li>
                            </ul>
                        </li>
                    </ul>

                    <div className="d-lg-none mobile-toggle pull-right">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader