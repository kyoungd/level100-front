import React, { Component } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';
import { useSession } from "next-auth/client";
import { logOut } from '../../../../store/auth/action';
import { Dropdown, Menu } from 'antd';

const AccountQuickLinks = () => {
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
    const menu = (
        <Menu>
            {accountLinks.map(link => (
                <Menu.Item key={link.url}>
                    <Link href={link.url}>
                        <a>{link.text}</a>
                    </Link>
                </Menu.Item>
            ))}

            <Menu.Item>
                <a href="#" onClick={this.handleLogout.bind(this)}>
                    Logout
                    </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} placement="bottomLeft">
            <a href="#" className="header__extra ps-user--mobile">
                <i className="icon-user"></i>
            </a>
        </Dropdown>
    )
}
export default AccountQuickLinks;
