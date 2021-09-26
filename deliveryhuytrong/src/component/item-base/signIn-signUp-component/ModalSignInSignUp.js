import React, { useContext, useState } from 'react';
import "../item-base.css";
import cookies from 'react-cookies';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import SignInSignUp from './SignInSignUp';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

export default function ModalSignInSignUp() {
    const [isDisplaySignInSignUpModal, setIsDisplaySignInSignUpModal] = useState(false);
    const auth = useContext(UserContext);

    let user = auth.user;
    if (cookies.load("user") != null) {
        user = cookies.load("user");
    }
    
    let r = <>
        <li onClick={() => setIsDisplaySignInSignUpModal(true)}><p>log in</p></li>
        <li onClick={() => setIsDisplaySignInSignUpModal(true)}><p>sign up</p></li>
    </>

    const StyledBadge = withStyles((theme) => ({
        badge: {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: '$ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }))(Badge);

    if (user != null) {
        r = <>
            <li>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                    style={{ margin: '5px 10px' }}
                >
                    <Link to="/post"><Avatar src={user.avatar} alt="avatar" /></Link>
                </StyledBadge>
            </li>
        </>
    }

    return (
        <>
            <div className="col-md-3 col-sm-3 col-xs-4 col-lg-3 signup">
                <ul className="nav navbar-nav menu-sign-in-sign-up">{r}</ul>
            </div>
            {
                !user ? <>
                    <Modal className="modal-signin-signup" isOpen={isDisplaySignInSignUpModal} ariaHideApp={false}>
                        <SignInSignUp />
                        <div className="close-modal-signin-signup" onClick={() => setIsDisplaySignInSignUpModal(false)}>
                            <i className="fas fa-times-circle"></i>
                        </div>
                    </Modal>
                </> : <></>
            }
        </>
    );
}