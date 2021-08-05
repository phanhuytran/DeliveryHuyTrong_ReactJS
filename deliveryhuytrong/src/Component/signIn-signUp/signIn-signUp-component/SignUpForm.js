import React, { Component } from 'react';

class SignUpForm extends Component {
    render() {
        return (
            <div className="form-container sign-up-container">
                <form className="form-s" method="POST">
                    <h1 className="h1-title-s">Create Account</h1>
                    <div className="social-container">
                        <a className="a-s" target="_blank" href="https://www.facebook.com/thephanhuytran/"><i className="fab fa-facebook-f" /></a>
                        <a className="a-s social"><i className="fab fa-google-plus-g" /></a>
                        <a className="a-s social"><i className="fab fa-linkedin-in" /></a>
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
                    <button className="btn-s signUp">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;