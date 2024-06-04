"use client"
import Breadcrumb from '@/components/backend/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'

const mainSliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product__slider-thmb'
};

const thumbSliderSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product__slider-main',
  dots: true,
  centerMode: true,
  focusOnSelect: true
};

const ProductDetail = () => {
  return (
    <div className="page-body">
      <Breadcrumb title="Product Detail" subtitle="Multikart Admin panel" parent="products" />

      <div className="container-fluid">
        <div className="card">
          <div className="row product-page-main card-body">
            <div className="col-xl-4">
              <Slider {...mainSliderSettings} className="product__slider-main">
                <div className="item">
                  <img src="/assets/images/pro3/2.jpg" alt="Product" className="img-fluid" />
                </div>
                <div className="item">
                  <img src="/assets/images/pro3/27.jpg" alt="Product" className="img-fluid" />
                </div>
                <div className="item">
                  <img src="/assets/images/pro3/1.jpg" alt="Product" className="img-fluid" />
                </div>
              </Slider>

              <Slider {...thumbSliderSettings} className='product__slider-thmb'>
                <div className="item">
                  <img src="/assets/images/pro3/2.jpg" alt="Product" className="img-fluid" />
                </div>
                <div className="item">
                  <img src="/assets/images/pro3/27.jpg" alt="Product" className="img-fluid" />
                </div>
                <div className="item">
                  <img src="/assets/images/pro3/1.jpg" alt="Product" className="img-fluid" />
                </div>
              </Slider>
            </div>

            <div className="col-xl-8">
              <div className="product-page-details product-right mb-0">
                <h2>WOMEN PINK SHIRT</h2>
                <select name="rating">
                  <option defaultValue="1">1</option>
                  <option defaultValue="2">2</option>
                  <option defaultValue="3">3</option>
                  <option defaultValue="4">4</option>
                  <option defaultValue="5">5</option>
                </select>
                <hr />
                <h6 className="product-title">product details</h6>
                <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,</p>
                <div className="product-price digits mt-2">
                  <h3>$26.00 <del>$350.00</del>
                  </h3>
                </div>
                <ul className="color-variant">
                  <li className="bg-light0"></li>
                  <li className="bg-light1"></li>
                  <li className="bg-light2"></li>
                </ul>
                <hr />
                <h6 className="product-title size-text">select size <span className="pull-right">
                  <Link href="#" data-bs-toggle="modal" data-bs-target="#sizemodal">size chart</Link>
                </span>
                </h6>

                <div className="modal fade" id="sizemodal">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Sheer Straight Kurta </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <img src="/assets/images/size-chart.jpg" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="size-box">
                  <ul>
                    <li className="active">
                      <Link href="#">s</Link>
                    </li>
                    <li>
                      <Link href="#">m</Link>
                    </li>
                    <li>
                      <Link href="#">l</Link>
                    </li>
                    <li>
                      <Link href="#">xl</Link>
                    </li>
                  </ul>
                </div>
                <div className="add-product-form">
                  <h6 className="product-title">quantity</h6>
                  <fieldset className="qty-box mt-2 ms-0">
                    <div className="input-group">
                      <input className="touchspin" type="text" defaultValue="1" />
                    </div>
                  </fieldset>
                </div>
                <hr />
                <h6 className="product-title">Sales Ends In</h6>
                <div className="timer">
                  <p id="demo">
                    <span>25 <span className="padding-l">:</span>
                      <span className="timer-cal">Days</span>
                    </span>
                    <span>22 <span className="padding-l">:</span>
                      <span className="timer-cal">Hrs</span>
                    </span>
                    <span>13 <span className="padding-l">:</span>
                      <span className="timer-cal">Min</span>
                    </span>
                    <span>57 <span className="timer-cal">Sec</span>
                    </span>
                  </p>
                </div>
                <div className="m-t-15">
                  <button className="btn btn-primary m-r-10" type="button">Add To Cart</button>
                  <button className="btn btn-secondary" type="button">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail