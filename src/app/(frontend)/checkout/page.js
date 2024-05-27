import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const Checkout = () => {
  return (
    <>
      <Breadcrumb title="Checkout" />

      <section className="section-b-space">
        <div className="container">
          <div className="checkout-page">
            <div className="checkout-form">
              <form>
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-xs-12">
                    <div className="checkout-title">
                      <h3>Billing Details</h3>
                    </div>
                    <div className="row check-out">
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <div className="field-label">First Name</div>
                        <input type="text" name="field-name" defaultValue="" placeholder="" />
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <div className="field-label">Last Name</div>
                        <input type="text" name="field-name" defaultValue="" placeholder="" />
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <div className="field-label">Phone</div>
                        <input type="text" name="field-name" defaultValue="" placeholder="" />
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <div className="field-label">Email Address</div>
                        <input type="text" name="field-name" defaultValue="" placeholder="" />
                      </div>
                      <div className="form-group col-md-12 col-sm-12 col-xs-12">
                        <div className="field-label">Country</div>
                        <select>
                          <option>India</option>
                          <option>South Africa</option>
                          <option>United State</option>
                          <option>Australia</option>
                        </select>
                      </div>
                      <div className="form-group col-md-12 col-sm-12 col-xs-12">
                        <div className="field-label">Address</div>
                        <input type="text" name="field-name" defaultValue="" placeholder="Street address" />
                      </div>
                      <div className="form-group col-md-12 col-sm-12 col-xs-12">
                        <div className="field-label">Town/City</div>
                        <input type="text" name="field-name" defaultValue="" placeholder="" />
                      </div>
                      <div className="form-group col-md-12 col-sm-6 col-xs-12">
                        <div className="field-label">State / County</div>
                        <input type="text" name="field-name" defaultValue="" placeholder="" />
                      </div>
                      <div className="form-group col-md-12 col-sm-6 col-xs-12">
                        <div className="field-label">Postal Code</div>
                        <input type="text" name="field-name" defaultValue="" placeholder="" />
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <input type="checkbox" name="shipping-option" id="account-option" /> &ensp;
                        <label htmlFor="account-option">Create An Account?</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-xs-12">
                    <div className="checkout-details">
                      <div className="order-box">
                        <div className="title-box">
                          <div>Product <span>Total</span></div>
                        </div>
                        <ul className="qty">
                          <li>Pink Slim Shirt × 1 <span>$25.10</span></li>
                          <li>SLim Fit Jeans × 1 <span>$555.00</span></li>
                        </ul>
                        <ul className="sub-total">
                          <li>Subtotal <span className="count">$380.10</span></li>
                          <li>Shipping
                            <div className="shipping">
                              <div className="shopping-option">
                                <input type="checkbox" name="free-shipping" id="free-shipping" />
                                <label htmlFor="free-shipping">Free Shipping</label>
                              </div>
                              <div className="shopping-option">
                                <input type="checkbox" name="local-pickup" id="local-pickup" />
                                <label htmlFor="local-pickup">Local Pickup</label>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul className="total">
                          <li>Total <span className="count">$620.00</span></li>
                        </ul>
                      </div>
                      <div className="payment-box">
                        <div className="upper-box">
                          <div className="payment-options">
                            <ul>
                              <li>
                                <div className="radio-option">
                                  <input type="radio" name="payment-group" id="payment-1"
                                    defaultChecked="checked" />
                                  <label htmlFor="payment-1">Check Payments<span
                                    className="small-text">Please send a check to Store
                                    Name, Store Street, Store Town, Store State /
                                    County, Store Postcode.</span></label>
                                </div>
                              </li>
                              <li>
                                <div className="radio-option">
                                  <input type="radio" name="payment-group" id="payment-2" />
                                  <label htmlFor="payment-2">Cash On Delivery<span
                                    className="small-text">Please send a check to Store
                                    Name, Store Street, Store Town, Store State /
                                    County, Store Postcode.</span></label>
                                </div>
                              </li>
                              <li>
                                <div className="radio-option paypal">
                                  <input type="radio" name="payment-group" id="payment-3" />
                                  <label htmlFor="payment-3">PayPal<span className="image"><img
                                    src="../assets/images/paypal.png"
                                    alt="" /></span></label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="text-end"><Link href="#" className="btn-solid btn">Place Order</Link></div>
                      </div>
                    </div>
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

export default Checkout