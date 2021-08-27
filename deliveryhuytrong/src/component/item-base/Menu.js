import React from 'react';
import "./item-base.css";
import { NavLink, Route } from "react-router-dom";
import ModalSignInSignUp from './ModalSignInSignUp';

const menu = [
    {
        label: "Home",
        to: "/",
        exact: true
    }, {
        label: "Statistic",
        to: "/statistic",
        exact: true
    }, {
        label: "About",
        to: "/about",
        exact: true
    }, {
        label: "Order",
        to: "/list-orders",
        exact: true
    }, {
        label: "Shipper",
        to: "/shipper",
        exact: true
    }, {
        label: "Pricing",
        to: "/pricing",
        exact: true
    }, {
        label: "Contact",
        to: "/contact",
        exact: true
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'current-menu-item' : '';
            return (
                <li className="menu-main">
                    <NavLink to={to} activeClassName={active} className="navlink-color">
                        {label}
                    </NavLink>
                </li>
            )
        }} />
    )
}

export default function Menu() {
    return (
        <>
            <div>
                <div className="col-md-6 col-xs-6 col-md-offset-1 col-sm-7 col-lg-offset-1 col-lg-6 mobMenuCol">
                    <nav className="navbar">
                        <ul className="nav navbar-nav navbar-right menu">
                            {showMenu(menu)}
                        </ul>
                    </nav>
                </div>
            </div>
            <ModalSignInSignUp />
        </>
    );
}

function showMenu(menu) {
    var result = null;
    if (menu.length > 0) {
        result = menu.map((menu, index) => {
            return (
                <MenuLink
                    key={index}
                    label={menu.label}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                />
            )
        });
    }
    return result;
}