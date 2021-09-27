import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cookies from 'react-cookies';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { UserContext } from '../../App';
import Menu from './Menu';
import logoIMG from './image/logo.png';

export default function Header() {
    const auth = useContext(UserContext);
    let user = auth.user;

    if (cookies.load("user") != null) {
        user = cookies.load("user");
    }

    const logout = () => {
        cookies.remove('access_token');
        cookies.remove('user');
        window.location.href = "/";
    }

    return (
        <>
            <div id="preloader" />
            <section className="about-us">
                <div className="logo_menu" id="sticker">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-lg-2 col-sm-2 col-xs-6">
                                <div className="logo wow bounceIn">
                                    <a className="res-header-menu-img" href="/"><img src={logoIMG} alt="logo" /></a>
                                </div>
                            </div>
                            <Menu />
                        </div>
                    </div>
                </div>
                {
                    user != null ? <div className="header-info">
                        <div className="header-info-left">
                            <Link className="username" to="/post">{user.username}</Link>
                        </div>
                        <div className="header-info-center">
                            <div id="expand-more">
                                <span />
                                <ExpandMoreIcon className="cursor-expand" style={{ fontSize: 15 }} onClick={showLogOut} />
                            </div>
                            <div id="expand-less">
                                <span />
                                <ExpandLessIcon className="cursor-expand" style={{ fontSize: 15 }} onClick={hideLogOut} />
                            </div>
                        </div>
                        <div className="header-info-right" id="log-out">
                            <table>
                                <tbody>
                                    <tr onClick={logout}>
                                        <td><i className="fas fa-sign-out-alt"></i></td>
                                        <td>LOG OUT</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> : <></>
                }
            </section>
        </>
    );

    function showLogOut() {
        document.getElementById("expand-more").style.display = "none";
        document.getElementById("expand-less").style.display = "block";
        document.getElementById("log-out").style.display = "block";
    }

    function hideLogOut() {
        document.getElementById("expand-more").style.display = "block";
        document.getElementById("expand-less").style.display = "none";
        document.getElementById("log-out").style.display = "none";
    }
}