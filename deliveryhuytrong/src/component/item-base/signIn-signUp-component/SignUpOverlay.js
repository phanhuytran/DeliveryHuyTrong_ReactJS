import React from 'react';
import logoIMG from '../image/logo.png'

class SignUpOverlay extends React.Component {
    render() {
        return (
            <div className="overlay-panel overlay-right">
                <a className="a-s" href="/"><img className="img-s wow bounceIn" src={logoIMG} alt="logo" /></a>
                <h1 className="h1-s">Hello, Friend!</h1>
                <p className="p-s">Enter your details personal information and start journey with us</p>
                <button className="btn-s ghost" id="signUp">Sign Up</button>
            </div>
        );
    }
}

export default SignUpOverlay;