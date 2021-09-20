import React from 'react';
import '../post.css';
import cookies from 'react-cookies';
import { AuthAPI, endpoints } from '../../API';

export default class EditCurrentUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: cookies.load("user"),
            messagePhone: '',
            messageEmail: ''
        }
    }

    change = (field, event) => {
        let fields = {
            [field]: event.target.value
        }
        this.setState({
            user: { ...this.state.user, ...fields },
            messagePhone: '',
            messageEmail: ''
        })
    }

    editInfo = (e) => {
        e.preventDefault();
        let formData = new FormData();
        for (let k in this.state.user) {
            if (k !== 'avatar') {
                formData.append(k, this.state.user[k])
            }
        }
        AuthAPI.patch(endpoints['users'] + cookies.load("user").id + '/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res);
            console.log(res.data);
            cookies.save("user", res.data);
            window.location.reload();
        }).catch((err) => {
            console.log(err.response.data);
            if (err.response.data.phone) {
                this.setState({
                    messagePhone: 'Ensure this phone has no more than 10 digits in total'
                })
            }
            if (err.response.data.email) {
                this.setState({
                    messageEmail: 'Enter a valid email address'
                })
            }
        });
    }

    render() {
        return (
            <form className="edit-form" onSubmit={this.editInfo}>
                <h1 style={{ fontSize: 22 }}>PERSONAL INFORMATION</h1>
                <p>First name:</p>
                <input type="text" placeholder="First name..." value={this.state.user.first_name} onChange={this.change.bind(this, 'first_name')} required />
                <p>Last name:</p>
                <input type="text" placeholder="Last name..." value={this.state.user.last_name} onChange={this.change.bind(this, 'last_name')} required />
                <p>Date of birth:</p>
                <input type="date" value={this.state.user.date_of_birth} onChange={this.change.bind(this, 'date_of_birth')} required />
                <p>Gender:</p>
                <select value={this.state.user.gender} onChange={this.change.bind(this, 'gender')} required>
                    <option value="" disabled hidden></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <p>Address:</p>
                <input type="text" placeholder="Address..." value={this.state.user.address} onChange={this.change.bind(this, 'address')} required />
                <p>Email: <span className="edit-error">{this.state.messageEmail}</span></p>
                <input type="email" placeholder="Email..." value={this.state.user.email} onChange={this.change.bind(this, 'email')} required />
                <p>Phone: <span className="edit-error">{this.state.messagePhone}</span></p>
                <input type="text" placeholder="Phone..." value={this.state.user.phone} onChange={this.change.bind(this, 'phone')} required />
                <button className="btn-edit-current-user" type="submit">Edit</button><div style={{ marginBottom: '100px' }}></div>
            </form>
        );
    }
}