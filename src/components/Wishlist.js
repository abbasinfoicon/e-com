'use client'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux';

const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist.items);

    return (
        <li className="mobile-wishlist">
            <Link href="/wishlist"><i className="fa fa-heart"></i></Link>
            <span className="bugde">{wishlistItems.length}</span>
        </li>
    )
}

export default Wishlist