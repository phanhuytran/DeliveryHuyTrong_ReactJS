import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import cookies from 'react-cookies';
import { UserContext } from '../../App';
import ModalSignInSignUp from './signIn-signUp-component/ModalSignInSignUp';
import "./item-base.css";

export default function Menu() {
    const auth = useContext(UserContext);
    let user = auth.user;

    return (
        <>
            <div>
                <div className="col-md-6 col-xs-6 col-md-offset-1 col-sm-7 col-lg-offset-1 col-lg-6 mobMenuCol">
                    <nav className="navbar">
                        <ul className="nav navbar-nav navbar-right menu">
                            <li className="menu-main"><NavLink to="/" exact={true} activeClassName="current-menu-item" className="navlink-color">Home</NavLink></li>
                            {
                                user && cookies.load("user").username === 'admin'
                                    ? <li className="menu-main"><NavLink to="/statistic" exact={true} activeClassName="current-menu-item" className="navlink-color">Statistic</NavLink></li>
                                    : <></>
                            }
                            <li className="menu-main"><NavLink to="/about" exact={true} activeClassName="current-menu-item" className="navlink-color">About</NavLink></li>
                            {
                                user && (cookies.load("user").groups[0] === 2 || cookies.load("user").username === 'admin')
                                    ? <li className="menu-main"><NavLink to="/list-orders" exact={true} activeClassName="current-menu-item" className="navlink-color">Order</NavLink></li>
                                    : <></>
                            }
                            {
                                user
                                    ? <li className="menu-main"><NavLink to="/shipper" exact={true} activeClassName="current-menu-item" className="navlink-color">Shipper</NavLink></li>
                                    : <></>
                            }
                            <li className="menu-main"><NavLink to="/pricing" exact={true} activeClassName="current-menu-item" className="navlink-color">Pricing</NavLink></li>
                            <li className="menu-main"><NavLink to="/contact" exact={true} activeClassName="current-menu-item" className="navlink-color">Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <ModalSignInSignUp />
        </>
    );
}