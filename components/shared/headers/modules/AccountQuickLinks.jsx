import React, { Component } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';
import { useSession } from "next-auth/client";
import { logOut } from '../../../../store/auth/action';

const AccountQuickLinks = () => {
    // let [session] = useSession();
    const session = undefined;
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = e => {
        e.preventDefault();
        dispatch(logOut());
    };

    const accountLinks = [
        {
            text: 'Account Information',
            url: '/account/user-information',
        },
        {
            text: 'Notifications',
            url: '/account/notifications',
        },
        {
            text: 'Invoices',
            url: '/account/invoices',
        },
        {
            text: 'Address',
            url: '/account/addresses',
        },
        {
            text: 'Recent Viewed Product',
            url: '/account/recent-viewed-product',
        },
        {
            text: 'Wishlist',
            url: '/account/wishlist',
        },
    ];

    console.log('my session', session);
    if (session) {
        return (
            <div className="ps-block--user-account">
                <i className="icon-user"></i>
                <div className="ps-block__content">
                    <ul className="ps-list--arrow">
                        {accountLinks.map(link => (
                            <li key={link.text}>
                                <Link href={link.url}>
                                    <a>{session.name}</a>
                                </Link>
                            </li>
                        ))}
                        <li className="ps-block__footer">
                            <a
                                href="#"
                                onClick={handleLogout}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="ps-block--user-header">
                <div className="ps-block__left">
                    <i className="icon-user"></i>
                </div>
                <div className="ps-block__right">
                    <Link href="/account/login">
                        <a>Login</a>
                    </Link>
                    <Link href="/account/register">
                        <a>Register</a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default AccountQuickLinks;
