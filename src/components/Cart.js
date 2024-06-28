'use client'
import { removeFromCart } from '@/lib/features/cartSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Cart = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const user = useSelector((state) => state.user.data);

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handleRemoveCart = (item) => {
        if (user?._id) {
            dispatch(removeFromCart(item));
            toast.success('Remove Product!');
        } else {
            router.push('/login');
        }
    };

    return (
        <li className="onhover-div mobile-cart">
            <div className='cart_icon'>
                <img src="/assets/images/icon/cart.png" className="img-fluid" alt="" />
                <i className="ti-shopping-cart"></i>
            </div>

            <span className="cart_qty_cls">{cartItems.length}</span>

            <ul className="show-div shopping-cart">
                <li>
                    <ul>
                        {
                            cartItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="media">
                                            <Link href={`/products/${item._id}`}><img alt="" className="me-3" src={`/assets/images/upload/${item.img[0]}`} /></Link>
                                            <div className="media-body">
                                                <Link href={`/products/${item._id}`}><h4>{item.title}</h4></Link>
                                                <h4><span>{item.quantity} x $ {item.price}.00</span></h4>
                                            </div>
                                        </div>
                                        <div className="close-circle">
                                            <button className='remove-cart' onClick={() => handleRemoveCart(item)}><i className="fa fa-times"></i></button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li>
                    <div className="total">
                        <h5>subtotal : <span>${subtotal.toFixed(2)}</span></h5>
                    </div>
                </li>

                <li>
                    <div className="buttons">
                        <Link href="/cart" className="view-cart">view cart</Link>
                        <Link href="/checkout" className="checkout">checkout</Link>
                    </div>
                </li>
            </ul>
        </li>
    )
}

export default Cart