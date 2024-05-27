import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-light">
            <div className="light-layout">
                <div className="container">
                    <section className="small-section border-section border-top-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="subscribe">
                                    <div>
                                        <h4>KNOW IT ALL FIRST!</h4>
                                        <p>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form
                                    action="/"
                                    className="form-inline subscribe-form auth-form needs-validation" method="post"
                                    id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                                    <div className="form-group mx-sm-3">
                                        <input type="text" className="form-control" name="EMAIL" id="mce-EMAIL"
                                            placeholder="Enter your email" required="required" />
                                    </div>
                                    <button type="submit" className="btn btn-solid" id="mc-submit">subscribe</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <section className="section-b-space light-layout">
                <div className="container">
                    <div className="row footer-theme partition-f">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-title footer-mobile-title">
                                <h4>about</h4>
                            </div>
                            <div className="footer-contant">
                                <div className="footer-logo"><Link href='/'><img src="../assets/images/icon/logo.png" alt="" /></Link></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                <div className="footer-social">
                                    <ul>
                                        <li><Link href="#"><i className="fa fa-facebook-f"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-google-plus"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                        <li><Link href="#"><i className="fa fa-rss" aria-hidden="true"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col offset-xl-1">
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>my account</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul>
                                        <li><Link href="#">mens</Link></li>
                                        <li><Link href="#">womens</Link></li>
                                        <li><Link href="#">clothing</Link></li>
                                        <li><Link href="#">accessories</Link></li>
                                        <li><Link href="#">featured</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>why we choose</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul>
                                        <li><Link href="/shipping-return">shipping & return</Link></li>
                                        <li><Link href="/secure-shppping">secure shopping</Link></li>
                                        <li><Link href="/gallery">gallary</Link></li>
                                        <li><Link href="/faq">FAQ's</Link></li>
                                        <li><Link href="/contact">contacts</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>store information</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul className="contact-list">
                                        <li><i className="fa fa-map-marker"></i>Multikart Demo Store, Demo store India
                                            345-659</li>
                                        <li><i className="fa fa-phone"></i>Call Us: 123-456-7898</li>
                                        <li><i className="fa fa-envelope"></i>Email Us: <Link href="mailto:support@Multikart.com">support@Multikart.com</Link>
                                        </li>
                                        <li><i className="fa fa-fax"></i>Fax: 123456</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="footer-end">
                                <p><i className="fa fa-copyright" aria-hidden="true"></i> 2023-24 themeforest powered by
                                    pixelstrap</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="payment-card-bottom">
                                <ul>
                                    <li>
                                        <Link href="#"><img src="../assets/images/icon/visa.png" alt="" /></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><img src="../assets/images/icon/mastercard.png" alt="" /></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><img src="../assets/images/icon/paypal.png" alt="" /></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><img src="../assets/images/icon/american-express.png" alt="" /></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><img src="../assets/images/icon/discover.png" alt="" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer