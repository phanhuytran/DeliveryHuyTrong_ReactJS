import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import API, { endpoints } from '../../API';

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.user = {
            'first_name': '',
            'last_name': '',
            'date_of_birth': '',
            'gender': '',
            'address': '',
            'email': '',
            'phone': '',
            'username': '',
            'password': '',
            'confirm_password': '',
            'choice_group': 0
        }
        this.avatar = React.createRef();
        this.state = {
            'user': this.user,
            message: '',
            is_successful: false,
        }
    }

    change = (field, event) => {
        this.user[field] = event.target.value;
        this.setState({
            'user': this.user
        })
    }

    register = (e) => {
        if (this.state.user.password === this.state.user.confirm_password) {
            let formData = new FormData();
            for (let k in this.state.user) {
                if (k !== 'confirm_password') {
                    formData.append(k, this.state.user[k])
                }
            }
            formData.append('avatar', this.avatar.current.files[0]);
            API.post(endpoints['users'], formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.log(res);
                this.setState({
                    message: 'Account was registered successfully!',
                    is_successful: true
                });
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }).catch((err) => {
                console.log(err.response.data);
                if (err.response.data.phone) {
                    this.setState({
                        message: err.response.data.phone.toString()
                    })
                }
                if (err.response.data.email) {
                    this.setState({
                        message: err.response.data.email.toString()
                    })
                }
                if (err.response.data.username) {
                    this.setState({
                        message: err.response.data.username.toString()
                    })
                }
            })
        } else {
            this.setState({
                message: 'Please make sure your password match!'
            })
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="form-container sign-up-container">
                <form className="form-s" onSubmit={this.register}>
                    <h1 className="h1-title-s">Create Account</h1>
                    <div className="social-container">
                        <a className="a-s" href="https://www.facebook.com/thephanhuytran/"><i className="fab fa-facebook-f" /></a>
                        <a className="a-s social" href="/"><i className="fab fa-google-plus-g" /></a>
                        <a className="a-s social" href="/"><i className="fab fa-linkedin-in" /></a>
                    </div>
                    {
                        this.state.is_successful === true ?
                            <span className="success">
                                {this.state.message}
                            </span> : <span className="error" id="message">
                                {this.state.message}
                            </span>
                    }
                    <div className="register-main">
                        <div id="sign-up-1">
                            <p>First name</p>
                            <input type="text" id="first_name" placeholder="First name" value={this.state.user.first_name} onChange={this.change.bind(this, 'first_name')} required />
                            <p>Last name</p>
                            <input type="text" id="last_name" placeholder="Last name" value={this.state.user.last_name} onChange={this.change.bind(this, 'last_name')} required />
                            <p>Date of birth</p>
                            <input type="date" id="date_of_birth" value={this.state.user.date_of_birth} onChange={this.change.bind(this, 'date_of_birth')} required />
                            <p>Gender</p>
                            <select value={this.state.user.gender} id="gender" onChange={this.change.bind(this, 'gender')} required>
                                <option value="" disabled hidden></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <div id="sign-up-next-1">
                                <ArrowForwardIcon className="cursor-move-part" style={{ fontSize: 40 }} onClick={nextSignUp2} />
                            </div>
                        </div>
                        <div id="sign-up-2">
                            <p>Address</p>
                            <input type="text" id="address" placeholder="Address" value={this.state.user.address} onChange={this.change.bind(this, 'address')} required />
                            <p>Email</p>
                            <input type="email" id="email" placeholder="Email" value={this.state.user.email} onChange={this.change.bind(this, 'email')} required />
                            <p>Phone</p>
                            <input type="text" id="phone" placeholder="Phone" value={this.state.user.phone} onChange={this.change.bind(this, 'phone')} required />
                            <p>Avatar</p>
                            <input type="file" id="avatar" ref={this.avatar} required />
                            <div id="sign-up-previous-1">
                                <ArrowBackIcon className="cursor-move-part" style={{ fontSize: 40 }} onClick={previousSignUp1} />
                            </div>
                            <div id="sign-up-next-2">
                                <ArrowForwardIcon className="cursor-move-part" style={{ fontSize: 40 }} onClick={nextSignUp3} />
                            </div>
                        </div>
                        <div id="sign-up-3">
                            <p>Username</p>
                            <input type="text" placeholder="Username" value={this.state.user.username} onChange={this.change.bind(this, 'username')} required />
                            <p>Password</p>
                            <input type="password" placeholder="Password" value={this.state.user.password} onChange={this.change.bind(this, 'password')} required />
                            <p>Confirm password</p>
                            <input type="password" placeholder="Confirm password" value={this.state.user.confirm_password} onChange={this.change.bind(this, 'confirm_password')} required />
                            <p>User type</p>
                            <select value={this.state.user.choice_group} onChange={this.change.bind(this, 'choice_group')} required>
                                <option value={0} disabled hidden></option>
                                <option value={1}>Customer</option>
                                <option value={2}>Shipper</option>
                            </select>
                            <div id="sign-up-previous-2">
                                <ArrowBackIcon className="cursor-move-part" style={{ fontSize: 40 }} onClick={previousSignUp2} />
                            </div>
                            <button type="submit" className="btn-s signUp">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        );

        function nextSignUp2() {
            if (document.getElementById("first_name").value === '' || document.getElementById("last_name").value === '' || document.getElementById("date_of_birth").value === '' || document.getElementById("gender").value === '') {
                document.getElementById("message").innerHTML = "Please enter full registration information!";
            } else {
                document.getElementById("message").innerHTML = "";
                document.getElementById("sign-up-1").style.display = "none";
                document.getElementById("sign-up-2").style.display = "block";
                document.getElementById("sign-up-3").style.display = "none";
            }
        }

        function nextSignUp3() {
            if (document.getElementById("address").value === '' || document.getElementById("email").value === '' || document.getElementById("phone").value === '' || document.getElementById("avatar").value === '') {
                document.getElementById("message").innerHTML = "Please enter full registration information!";
            } else {
                document.getElementById("message").innerHTML = "";
                document.getElementById("sign-up-1").style.display = "none";
                document.getElementById("sign-up-2").style.display = "none";
                document.getElementById("sign-up-3").style.display = "block";
            }
        }

        function previousSignUp1() {
            document.getElementById("sign-up-1").style.display = "block";
            document.getElementById("sign-up-2").style.display = "none";
            document.getElementById("sign-up-3").style.display = "none";
        }

        function previousSignUp2() {
            document.getElementById("message").innerHTML = "";
            document.getElementById("sign-up-1").style.display = "none";
            document.getElementById("sign-up-2").style.display = "block";
            document.getElementById("sign-up-3").style.display = "none";
        }
    }
}