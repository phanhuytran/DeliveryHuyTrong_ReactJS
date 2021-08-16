import React from 'react';

class SignInForm extends React.Component {
    render() {
        return (
            <div className="form-container sign-in-container">
                <form className="form-s" method="POST">
                    <h1 className="h1-title-s">Sign in</h1>
                    <div className="social-container">
                        <a className="a-s" href="https://www.facebook.com/thephanhuytran/"><i className="fab fa-facebook-f" /></a>
                        <a className="a-s social" href="https://www.facebook.com/thephanhuytran/"><i className="fab fa-google-plus-g" /></a>
                        <a className="a-s social" href="https://www.facebook.com/thephanhuytran/"><i className="fab fa-linkedin-in" /></a>
                    </div>
                    <span className="error">error</span>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <a className="a-s" href="/">Forgot your password?</a>
                    <button type="submit" className="btn-s signIn">Sign In</button>
                </form>
            </div>
        );
    }
}

export default SignInForm;