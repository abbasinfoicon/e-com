"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Menu = () => {
    const pathname = usePathname();

    const isActive = (href) => {
        if (href === '/') {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    return (
        <ul id="main-menu" className="sm pixelstrap sm-horizontal">
            <li>
                <div className="mobile-back text-end">Back<i className="fa fa-angle-right ps-2"
                    aria-hidden="true"></i></div>
            </li>
            <li className={isActive("/") ? "active" : ""}><Link href="/">Home</Link></li>
            <li className={isActive("/about") ? "active" : ""}><Link href="/about">About us</Link></li>
            <li className={isActive("/products") ? "active" : ""}><Link href="/products">Product</Link></li>
            <li className={isActive("/gallery") ? "active" : ""}><Link href="/gallery">Gallery</Link></li>
            <li className={isActive("/blog") ? "active" : ""}><Link href="/blog">Blog</Link></li>
            <li className={isActive("/contact") ? "active" : ""}><Link href="/contact">Contact</Link></li>
        </ul>
    )
}

export default Menu