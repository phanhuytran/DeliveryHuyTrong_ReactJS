import React from 'react';
import '../post.css'
import cookies from 'react-cookies';

export default function PersonalInformation() {
    let user = cookies.load("user");

    return (
        <>
            <div className="post-body-left">
                <h5>Personal Information</h5><hr />
                {
                    user ? <>
                        <img src={user.avatar} alt="img" />
                        <h4>{user.first_name} {user.last_name}</h4>
                        <table>
                            <tbody>
                                <tr><td><i className="fas fa-gift"></i></td><td>{user.date_of_birth}</td></tr>
                                <tr><td><i className="fas fa-venus-mars"></i></td><td>{user.gender}</td></tr>
                                <tr><td><i className="far fa-id-card"></i></td><td>025832688</td></tr>
                                <tr><td><i className="fas fa-map-marker-alt"></i></td><td>{user.address}</td></tr>
                                <tr><td><i className="far fa-envelope"></i></td><td>{user.email}</td></tr>
                                <tr><td><i className="fas fa-mobile-alt"></i></td><td>{user.phone}</td></tr>
                            </tbody>
                        </table>
                    </> : ''
                }
            </div>
            <div className="post-body-center" />
        </>
    );
}