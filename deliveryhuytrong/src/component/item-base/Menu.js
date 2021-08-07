import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Menu.css";
import ModalSignInSignUp from './ModalSignInSignUp';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="col-md-6 col-xs-6 col-md-offset-1 col-sm-7 col-lg-offset-1 col-lg-6 mobMenuCol">
                        <nav className="navbar">
                            <ul className="nav navbar-nav navbar-right menu">
                                <li className="menu-main">
                                    <NavLink className="navlink_color" activeClassName="current-menu-item" exact to="/">home</NavLink>
                                </li>
                                <li className="menu-main">
                                    <NavLink className="navlink_color" activeClassName="current-menu-item" to="/about">about</NavLink>
                                </li>
                                <li className="menu-main">
                                    <NavLink className="navlink_color" activeClassName="current-menu-item" to="/list-orders">order</NavLink>
                                </li>
                                <li className="menu-main">
                                    <NavLink className="navlink_color" activeClassName="current-menu-item" to="/shipper">shipper</NavLink>
                                </li>
                                <li className="menu-main">
                                    <NavLink className="navlink_color" activeClassName="current-menu-item" to="/pricing">pricing</NavLink>
                                </li>
                                <li className="menu-main">
                                    <NavLink className="navlink_color" activeClassName="current-menu-item" to="/contact">contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <ModalSignInSignUp />
            </div>
        );
    }
}

export default Menu;