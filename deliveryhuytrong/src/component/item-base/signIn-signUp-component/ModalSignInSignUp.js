import React, { useContext, useState } from 'react';
import "../item-base.css";
import Modal from 'react-modal';
import cookies from 'react-cookies';
import SignInSignUp from './SignInSignUp';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

export default function ModalSignInSignUp() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const auth = useContext(UserContext);

    let user = auth.user;
    let r = <>
        <li onClick={() => setModalIsOpen(true)}><p>log in</p></li>
        <li onClick={() => setModalIsOpen(true)}><p>sign up</p></li>
    </>

    if (cookies.load("user") != null) {
        user = cookies.load("user");
    }

    if (user != null) {
        r = <>
            <li>
                <p className="current-user-cursor-style">
                    <Link className="see-info-current-user" to="/post">{user.username}</Link>
                </p>
            </li>
            <li><p>log out</p></li>
        </>
    }

    return (
        <>
            <div className="col-md-3 col-sm-3 col-xs-4 col-lg-3 signup">
                <ul className="nav navbar-nav menu-sign-in-sign-up">{r}</ul>
            </div>
            {
                !user ? <>
                    <Modal className="modal-signin-signup" isOpen={modalIsOpen} ariaHideApp={false}>
                        <SignInSignUp />
                        <div className="close-modal-signin-signup" onClick={() => setModalIsOpen(false)}>
                            <i className="fas fa-times-circle"></i>
                        </div>
                    </Modal>
                </> : ''
            }
        </>
    );
}