import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'

const Cart = () => {
  return (
    <>
      <Breadcrumb title="Cart" />

      <section className="cart-section section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="cart_counter">
                <div className="countdownholder">
                  Your cart will be expired in<span id="timer"></span> minutes!
                </div>
                <Link href="/checkout" className="cart_checkout btn btn-solid btn-xs">check out</Link>
              </div>
            </div>
            <div className="col-sm-12 table-responsive-xs">
              <table className="table cart-table">
                <thead>
                  <tr className="table-head">
                    <th scope="col">image</th>
                    <th scope="col">product name</th>
                    <th scope="col">price</th>
                    <th scope="col">quantity</th>
                    <th scope="col">action</th>
                    <th scope="col">total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link href="#"><img src="../assets/images/pro3/2.jpg" alt="" /></Link>
                    </td>
                    <td><Link href="#">cotton shirt</Link>
                      <div className="mobile-cart-content row">
                        <div className="col">
                          <div className="qty-box">
                            <div className="input-group">
                              <input type="text" name="quantity" className="form-control input-number"
                                defaultValue="1" />
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <h2 className="td-color">$63.00</h2>
                        </div>
                        <div className="col">
                          <h2 className="td-color"><Link href="#" className="icon"><i className="ti-close"></i></Link>
                          </h2>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h2>$63.00</h2>
                    </td>
                    <td>
                      <div className="qty-box">
                        <div className="input-group">
                          <input type="number" name="quantity" className="form-control input-number"
                            defaultValue="1" />
                        </div>
                      </div>
                    </td>
                    <td><Link href="#" className="icon"><i className="ti-close"></i></Link></td>
                    <td>
                      <h2 className="td-color">$4539.00</h2>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <Link href="#"><img src="../assets/images/pro3/35.jpg" alt="" /></Link>
                    </td>
                    <td><Link href="#">cotton shirt</Link>
                      <div className="mobile-cart-content row">
                        <div className="col">
                          <div className="qty-box">
                            <div className="input-group">
                              <input type="number" name="quantity"
                                className="form-control input-number" defaultValue="1" />
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <h2 className="td-color">$63.00</h2>
                        </div>
                        <div className="col">
                          <h2 className="td-color"><Link href="#" className="icon"><i className="ti-close"></i></Link>
                          </h2>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h2>$63.00</h2>
                    </td>
                    <td>
                      <div className="qty-box">
                        <div className="input-group">
                          <input type="number" name="quantity" className="form-control input-number"
                            defaultValue="1" />
                        </div>
                      </div>
                    </td>
                    <td><Link href="#" className="icon"><i className="ti-close"></i></Link></td>
                    <td>
                      <h2 className="td-color">$4539.00</h2>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <Link href="#"><img src="../assets/images/pro3/33.jpg" alt="" /></Link>
                    </td>
                    <td><Link href="#">cotton shirt</Link>
                      <div className="mobile-cart-content row">
                        <div className="col">
                          <div className="qty-box">
                            <div className="input-group">
                              <input type="number" name="quantity"
                                className="form-control input-number" defaultValue="1" />
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <h2 className="td-color">$63.00</h2>
                        </div>
                        <div className="col">
                          <h2 className="td-color"><Link href="#" className="icon"><i className="ti-close"></i></Link>
                          </h2>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h2>$63.00</h2>
                    </td>
                    <td>
                      <div className="qty-box">
                        <div className="input-group">
                          <input type="number" name="quantity" className="form-control input-number"
                            defaultValue="1" />
                        </div>
                      </div>
                    </td>
                    <td><Link href="#" className="icon"><i className="ti-close"></i></Link></td>
                    <td>
                      <h2 className="td-color">$4539.00</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="table-responsive-md">
                <table className="table cart-table ">
                  <tfoot>
                    <tr>
                      <td>total price :</td>
                      <td>
                        <h2>$6935.00</h2>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div className="row cart-buttons">
            <div className="col-6"><Link href="/products" className="btn btn-solid">continue shopping</Link></div>
            <div className="col-6"><Link href="/checkout" className="btn btn-solid">check out</Link></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart