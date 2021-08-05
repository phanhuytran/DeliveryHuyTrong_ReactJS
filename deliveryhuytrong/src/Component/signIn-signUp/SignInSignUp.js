import React, { Component } from 'react';
import SignInForm from './signIn-signUp-component/SignInForm';
import SignInOverlay from './signIn-signUp-component/SignInOverlay';
import SignUpForm from './signIn-signUp-component/SignUpForm';
import SignUpOverlay from './signIn-signUp-component/SignUpOverlay';

class SignInSignUp extends Component {
    render() {

        window.onload = function () {
            const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const container = document.getElementById('container');

            signUpButton.addEventListener('click', () => {
                container.classList.add('right-panel-active');
            });

            signInButton.addEventListener('click', () => {
                container.classList.remove('right-panel-active');
            })
        }

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
}

export default SignInSignUp;