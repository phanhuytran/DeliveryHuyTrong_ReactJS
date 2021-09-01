import React from 'react';
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
            is_successful: '',
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
                    is_successful: 'success'
                })
            }).catch((err) => {
                console.log(err.response.data);
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
                        this.state.is_successful === 'success' ?
                            <span className="success">
                                {this.state.message}
                            </span> : <span className="error">
                                {this.state.message}
                            </span>
                    }
                    <table>
                        <tbody>
                            <tr>
                                <td><span>First name</span><br /><input type="text" placeholder="First name" value={this.state.user.first_name} onChange={this.change.bind(this, 'first_name')} required /></td>
                                <td><span>Last name</span><br /><input type="text" placeholder="Last name" value={this.state.user.last_name} onChange={this.change.bind(this, 'last_name')} required /></td>
                                <td><span>Date of birth</span><br /><input type="date" value={this.state.user.date_of_birth} onChange={this.change.bind(this, 'date_of_birth')} required /></td>
                            </tr>
                            <tr>
                                <td><span>Gender</span><br />
                                    <select value={this.state.user.gender} onChange={this.change.bind(this, 'gender')} required>
                                        <option value="" disabled hidden></option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </td>
                                <td><span>Avatar</span><br /><input type="file" ref={this.avatar} required /></td>
                                <td><span>Address</span><br /><input type="text" placeholder="Address" value={this.state.user.address} onChange={this.change.bind(this, 'address')} required /></td>
                            </tr>
                            <tr>
                                <td><span>Email</span><br /><input type="email" placeholder="Email" value={this.state.user.email} onChange={this.change.bind(this, 'email')} required /></td>
                                <td><span>Phone</span><br /><input type="text" placeholder="Phone" value={this.state.user.phone} onChange={this.change.bind(this, 'phone')} required /></td>
                                <td><span>Role</span><br />
                                    <select value={this.state.user.choice_group} onChange={this.change.bind(this, 'choice_group')} required>
                                        <option value={0} disabled hidden></option>
                                        <option value={1}>Customer</option>
                                        <option value={2}>Shipper</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><span>Username</span><br /><input type="text" placeholder="Username" value={this.state.user.username} onChange={this.change.bind(this, 'username')} required /></td>
                                <td><span>Password</span><br /><input type="password" placeholder="Password" value={this.state.user.password} onChange={this.change.bind(this, 'password')} required /></td>
                                <td><span>Confirm password</span><br /><input type="password" placeholder="Confirm password" value={this.state.user.confirm_password} onChange={this.change.bind(this, 'confirm_password')} required /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn-s signUp">Sign Up</button>
                </form>
            </div>
        );
    }
}