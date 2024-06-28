'use client'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveWishlist = (item) => {
    dispatch(removeFromWishlist(item));
  };

  return (
    <>
      <Breadcrumb title="Wishlist" />

      <section className="wishlist-section section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 table-responsive-xs">
              <table className="table cart-table">
                <thead>
                  <tr className="table-head">
                    <th scope="col">image</th>
                    <th scope="col">product name</th>
                    <th scope="col">price</th>
                    <th scope="col">availability</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    wishlistItems.length > 0 ? wishlistItems.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <Link href={`/products/${item._id}`}>
                            <img src={`/assets/images/upload/${item.img[0]}`} alt={item.title} />
                          </Link>
                        </td>
                        <td>
                          <Link href={`/products/${item._id}`}>{item.title}</Link>
                          <div className="mobile-cart-content row">
                            <div className="col">
                              <p>{item.availability ? 'In stock' : 'Out of stock'}</p>
                            </div>
                            <div className="col">
                              <h2 className="td-color">${item.price}.00</h2>
                            </div>
                            <div className="col">
                              <h2 className="td-color">
                                <button className="icon me-1" onClick={() => handleRemoveWishlist(item)}>
                                  <i className="ti-close"></i>
                                </button>
                                <Link href="/cart" className="cart">
                                  <i className="ti-shopping-cart"></i>
                                </Link>
                              </h2>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h2>${item.price}.00</h2>
                        </td>
                        <td>
                          <p>{item.availability ? 'In stock' : 'Out of stock'}</p>
                        </td>
                        <td>
                          <button className="icon me-3" onClick={() => handleRemoveWishlist(item)}>
                            <i className="ti-close"></i>
                          </button>
                          <Link href="/cart" className="cart">
                            <i className="ti-shopping-cart"></i>
                          </Link>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan="5">No items in the wishlist.</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>

          <div className="row wishlist-buttons">
            <div className="col-12">
              <Link href="/products" className="btn btn-solid">continue shopping</Link>
              <Link href="/checkout" className="btn btn-solid">check out</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Wishlist