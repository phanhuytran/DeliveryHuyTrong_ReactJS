import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

export default function SignInForm() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const auth = useContext(UserContext);

    const login = async (e) => {
        e.preventDefault();
        auth.login(username, password)
    }

    return (
        <div className="form-container sign-in-container">
            <form className="form-s" onSubmit={login}>
                <h1 className="h1-title-s">Sign in</h1>
                <div className="social-container">
                    <a className="a-s" href="https://www.facebook.com/thephanhuytran/"><i className="fab fa-facebook-f" /></a>
                    <a className="a-s social" href="https://www.facebook.com/thephanhuytran/"><i className="fab fa-google-plus-g" /></a>
                    <a className="a-s social" href="https://www.facebook.com/thephanhuytran/"><i className="fab fa-linkedin-in" /></a>
                </div>
                <span className="error">error</span>
                <input type="text" placeholder="Username" id="username" onChange={e => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" id="password" onChange={e => setPassword(e.target.value)} required />
                <a className="a-s" href="/">Forgot your password?</a>
                <button type="submit" className="btn-s signIn">Sign In</button>
            </form>
        </div>
    );
}