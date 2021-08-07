import React from 'react';

class SignInOverlay extends React.Component {
    render() {
        return (
            <div className="overlay-panel overlay-left">
                <a className="a-s" href="/"><img className="img-s wow bounceIn" src="img/logo.png" alt="logo" /></a>
                <h1 className="h1-s">Welcome Back!</h1>
                <p className="p-s">To keep connected with us please login with your personal information</p>
                <button className="btn-s ghost" id="signIn">Sign In</button>
            </div>
        );
    }
}

export default SignInOverlay;