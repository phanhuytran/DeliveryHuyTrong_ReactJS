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

    editInfo = event => {
        event.preventDefault();
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
                    messagePhone: err.response.data.phone.toString()
                })
            }
            if (err.response.data.email) {
                this.setState({
                    messageEmail: err.response.data.email.toString()
                })
            }
        });
    }

    render() {
        return (
            <form className="edit-form" onSubmit={this.editInfo}>
                <h1 style={{ fontSize: 22 }}>PERSONAL INFORMATION</h1>
                <p>First name</p>
                <input type="text" placeholder="First name..." value={this.state.user.first_name} onChange={this.change.bind(this, 'first_name')} required />
                <p>Last name</p>
                <input type="text" placeholder="Last name..." value={this.state.user.last_name} onChange={this.change.bind(this, 'last_name')} required />
                <p>Date of birth</p>
                <input type="date" value={this.state.user.date_of_birth} onChange={this.change.bind(this, 'date_of_birth')} required />
                <p>Gender</p>
                <select value={this.state.user.gender} onChange={this.change.bind(this, 'gender')} required>
                    <option value="" disabled hidden></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <p>Address</p>
                <input type="text" placeholder="Address..." value={this.state.user.address} onChange={this.change.bind(this, 'address')} required />
                <p>Email</p>
                <input type="email" placeholder="Email..." value={this.state.user.email} onChange={this.change.bind(this, 'email')} required />
                <p className="edit-error">{this.state.messageEmail}</p>
                <p>Phone</p>
                <input type="text" placeholder="Phone..." value={this.state.user.phone} onChange={this.change.bind(this, 'phone')} required />
                <p className="edit-error">{this.state.messagePhone}</p>
                <button className="btn-edit-current-user" type="submit">Edit</button><div style={{ marginBottom: '100px' }}></div>
            </form>
        );
    }
}