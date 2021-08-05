import React, { Component } from 'react';
// import './signIn-signUp.css';

class SignInSignUp extends Component {
    render() {
        return (
            <div>
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form method="POST">
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="https://www.facebook.com/thephanhuytran/" className="social"><i className="fab fa-facebook-f" /></a>
                                <a className="social"><i className="fab fa-google-plus-g" /></a>
                                <a className="social"><i className="fab fa-linkedin-in" /></a>
                            </div>
                            <span className="error">error</span>
                            <div>
                                <input type="text" placeholder="First name" required />
                                <input type="text" placeholder="Last name" required />
                                <select>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Female">Other</option>
                                </select>
                                <input type="text" placeholder="ID card" required />
                                <input type="text" placeholder="Address" required />
                                <input type="email" placeholder="Email" required />
                                <input type="text" placeholder="Phone" required />
                                <input type="text" placeholder="Username" required />
                                <input type="password" placeholder="Password" required />
                                <input type="password" placeholder="Confirm password" required />
                                <input className="profile-picture" type="file" placeholder="Profile picture" required />
                                <div className="radio-role">
                                    <span />
                                    <input type="radio" name="role" defaultValue="customer" title="Customer" required />Customer
                                    <span />
                                    <input type="radio" name="role" defaultValue="shipper" title="Shipper" required />Shipper
                                </div>
                            </div>
                            <button className="signUp">Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form method="POST">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="https://www.facebook.com/thephanhuytran/" className="social"><i className="fab fa-facebook-f" /></a>
                                <a className="social"><i className="fab fa-google-plus-g" /></a>
                                <a className="social"><i className="fab fa-linkedin-in" /></a>
                            </div>
                            <span className="error">error</span>
                            <input type="text" placeholder="Username" required />
                            <input type="password" placeholder="Password" required />
                            <a>Forgot your password?</a>
                            <button className="signIn">Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <a href="/"><img className="wow bounceIn" src="img/logo.png" alt="logo" /></a>
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal information</p>
                                <button className="ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <a href="/"><img className="wow bounceIn" src="img/logo.png" alt="logo" /></a>
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInSignUp;