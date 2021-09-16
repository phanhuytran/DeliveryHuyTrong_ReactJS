import React, { useRef, useState } from 'react';
import '../post.css'
import cookies from 'react-cookies';
import Modal from 'react-modal';
import EditCurrentUserForm from './EditCurrentUserForm';
import { AuthAPI, endpoints } from '../../API';

export default function PersonalInformation() {
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
    const [modalChooseAvatar, setModalChooseAvatar] = useState(false);
    const avatar = useRef();
    let user = cookies.load("user");

    const changeAvatar = () => {
        let formData = new FormData();
        formData.append('avatar', avatar.current.files[0]);
        AuthAPI.patch(endpoints['users'] + cookies.load("user").id + '/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            cookies.save("user", res.data);
            window.location.reload();
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

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
                        <button onClick={() => setModalChooseAvatar(true)}>
                            <img src={user.avatar} alt="img" />
                        </button>
                        <Modal className="modal-edit-post-form" isOpen={modalChooseAvatar} ariaHideApp={false}>
                            <div clasName="modal-choose-avatar">
                                <input type="file" ref={avatar} />
                                <button onClick={changeAvatar}>Change avatar</button>
                            </div>
                            <div className="close-modal-edit-post-form" onClick={() => setModalChooseAvatar(false)}>
                                <i className="fas fa-times-circle"></i>
                            </div>
                        </Modal>
                        {/* <img src={user.avatar} alt="img" /> */}
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