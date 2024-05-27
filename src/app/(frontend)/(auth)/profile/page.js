import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'

const Profile = () => {
    return (
        <>
            <Breadcrumb title="Profile" />

            <section className="contact-page register-page">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>PERSONAL DETAIL</h3>
                            <form className="theme-form">
                                <div className="form-row row">
                                    <div className="col-md-6">
                                        <label for="name">First Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter Your name"
                                            required="" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="email">Last Name</label>
                                        <input type="text" className="form-control" id="last-name" placeholder="Email" required="" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="review">Phone number</label>
                                        <input type="text" className="form-control" id="review" placeholder="Enter your number"
                                            required="" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="email">Email</label>
                                        <input type="text" className="form-control" id="email" placeholder="Email" required="" />
                                    </div>
                                    <div className="col-md-12">
                                        <label for="review">Write Your Message</label>
                                        <textarea className="form-control mb-0" placeholder="Write Your Message"
                                            id="exampleFormControlTextarea1" rows="6"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-page register-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>SHIPPING ADDRESS</h3>
                            <form className="theme-form">
                                <div className="form-row row">
                                    <div className="col-md-6">
                                        <label for="name">flat / plot</label>
                                        <input type="text" className="form-control" id="home-ploat" placeholder="company name"
                                            required="" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="name">Address *</label>
                                        <input type="text" className="form-control" id="address-two" placeholder="Address"
                                            required="" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="email">Zip Code *</label>
                                        <input type="text" className="form-control" id="zip-code" placeholder="zip-code"
                                            required="" />
                                    </div>
                                    <div className="col-md-6 select_input">
                                        <label for="review">Country *</label>
                                        <select className="form-control" size="1">
                                            <option value="India">India</option>
                                            <option value="UAE">UAE</option>
                                            <option value="U.K">U.K</option>
                                            <option value="US">US</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="review">City *</label>
                                        <input type="text" className="form-control" id="city" placeholder="City" required="" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="review">Region/State *</label>
                                        <input type="text" className="form-control" id="region-state" placeholder="Region/state"
                                            required="" />
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-sm btn-solid" type="submit">Save setting</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile