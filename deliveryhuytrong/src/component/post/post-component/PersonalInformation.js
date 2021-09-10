import React, { useState } from 'react';
import '../post.css'
import cookies from 'react-cookies';
import Modal from 'react-modal';
import EditCurrentUserForm from './EditCurrentUserForm';

export default function PersonalInformation() {
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
    let user = cookies.load("user");

    return (
        <>
            <div className="post-body-left">
                <h5>Personal Information</h5>
                <span className="edit-curent-user">
                    <i className="fas fa-user-edit" onClick={() => setModalEditIsOpen(true)}></i>
                    <Modal className="modal-edit-post-form" isOpen={modalEditIsOpen} ariaHideApp={false}>
                        <EditCurrentUserForm />
                        <div className="close-modal-edit-post-form" onClick={() => setModalEditIsOpen(false)}>
                            <i className="fas fa-times-circle"></i>
                        </div>
                    </Modal>
                </span>
                <hr />
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