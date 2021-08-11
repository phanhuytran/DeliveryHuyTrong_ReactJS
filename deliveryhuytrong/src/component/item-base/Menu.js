import React, { useState } from 'react';
import { NavLink, Route } from "react-router-dom";
import "./item-base.css";
import ModalSignInSignUp from './ModalSignInSignUp';


const menu = [
    {
        label: "Home",
        to: "/",
        exact: true
    }, {
        label: "About",
        to: "/about",
        exact: false
    }, {
        label: "Order",
        to: "/list-orders",
        exact: false
    }, {
        label: "Shipper",
        to: "/shipper",
        exact: false
    }, {
        label: "Pricing",
        to: "/pricing",
        exact: false
    }, {
        label: "Contact",
        to: "/contact",
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'current-menu-item' : '';
            return (
                <li className="menu-main">
                    <NavLink to={to} activeClassName={active} className="navlink_color">
                        {label}
                    </NavLink>
                </li>
            )
        }} />
    )
}

class Menu extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="col-md-6 col-xs-6 col-md-offset-1 col-sm-7 col-lg-offset-1 col-lg-6 mobMenuCol">
                        <nav className="navbar">
                            <ul className="nav navbar-nav navbar-right menu">
                                {this.showMenu(menu)}
                            </ul>
                        </nav>
                    </div>
                </div>
                <ModalSignInSignUp />
            </div>
        );
    }

    showMenu = (menu) => {
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
}

export default Menu;