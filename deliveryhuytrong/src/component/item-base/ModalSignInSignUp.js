import React, { useState } from 'react';
import "./item-base.css";
import Modal from 'react-modal';
import SignInSignUp from './SignInSignUp';

function ModalSignInSignUp() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <div className="col-md-3 col-sm-3 col-xs-4 col-lg-3 signup">
                <ul className="nav navbar-nav menu-sign-in-sign-up">
                    <li onClick={() => setModalIsOpen(true)}><p>log in</p></li>
                    <li onClick={() => setModalIsOpen(true)}><p>sign up</p></li>
                    {/* <li onClick={() => setModalIsOpen(true)}><a>log in</a></li>
                    <li onClick={() => setModalIsOpen(true)}><a>sign up</a></li> */}
                </ul>
            </div>
            <Modal className="modal-signin-signup" isOpen={modalIsOpen} ariaHideApp={false}>
                <SignInSignUp />
                <div className="close-modal-signin-signup" onClick={() => setModalIsOpen(false)}>
                    <i className="fas fa-times-circle"></i>
                </div>
            </Modal>
        </>
    );
}

export default ModalSignInSignUp;