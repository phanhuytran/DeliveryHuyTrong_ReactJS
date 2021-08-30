import React from 'react';
import "../item-base.css";
import SignInOverlay from './SignInOverlay';
import SignUpOverlay from './SignUpOverlay';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

export default function SignInSignUp() {
    React.useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        })
    })

    return (
        <div className="body-s">
            <div className="container-s" id="container">
                <SignUpForm />
                <SignInForm />
                <div className="overlay-container">
                    <div className="overlay">
                        <SignInOverlay />
                        <SignUpOverlay />
                    </div>
                </div>
            </div>
        </div>
    );
}