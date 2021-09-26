import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

export default function SignInForm() {
    const auth = useContext(UserContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const login = async (e) => {
        e.preventDefault();
        auth.login(username, password);
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
                {
                    auth.message === true
                        ? <span className="success">Logged in successfully</span> :
                        auth.message === false
                            ? <span className="error">Username or password is incorrect</span> : <></>
                }
                <p>Username:</p>
                <input type="text" placeholder="Username" id="username" onChange={e => setUsername(e.target.value)} required />
                <p>Password:</p>
                <input type="password" placeholder="Password" id="password" onChange={e => setPassword(e.target.value)} required />
                <a className="a-s" href="/">Forgot your password?</a>
                <button type="submit" className="btn-s signIn">Sign In</button>
            </form>
        </div>
    );
}