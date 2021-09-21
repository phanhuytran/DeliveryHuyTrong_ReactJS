import React, { useRef, useState } from 'react';
import '../post.css'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import cookies from 'react-cookies';
import Modal from 'react-modal';
import EditCurrentUserForm from './EditCurrentUserForm';
import { AuthAPI, endpoints } from '../../API';
import avatarNullIMG from '../image/avatar-null.png'

export default function PersonalInformation() {
    const [modalChooseAvatar, setModalChooseAvatar] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState([]);
    const [isAvatar, setIsAvatar] = useState(false);

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
            setModalChooseAvatar(false);
            window.location.reload();
        }).catch((err) => {
            console.log(err.response.data);
        })
    }

    const handleImageChange = e => {
        setSelectedAvatar([]);
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setSelectedAvatar((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
        }
        setIsAvatar(true);
    }

    const renderAvatar = source => {
        return source.map((image) => {
            return <img className="update-upload-avatar" src={image} alt="img" key={image} />;
        })
    }

    return (
        <>
            <div className="post-body-left">
                <h5>Personal Information</h5>
                <EditCurrentUserForm />
                <hr />
                {
                    user ? <>
                        <div className="choose-avatar">
                            <button onClick={() => setModalChooseAvatar(true)}>
                                {
                                    cookies.load("user").avatar !== null ? <img src={user.avatar} alt="avatar" />
                                        : <img src={avatarNullIMG} alt="avatar" />
                                }
                                <div className="middle-upload-avatar">
                                    <FileUploadIcon style={{ fontSize: 45 }} />
                                </div>
                            </button>
                        </div>
                        <Modal className="modal-choose-avatar" isOpen={modalChooseAvatar} ariaHideApp={false}>
                            <h1>UPDATE AVATAR</h1>
                            <div className="choose-avatar-item">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><input type="file" ref={avatar} onChange={handleImageChange} /></td>
                                            <td>{renderAvatar(selectedAvatar)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {
                                    isAvatar === true ? <button onClick={changeAvatar}>Change avatar</button> : <></>
                                }
                            </div>
                            <div className="close-modal-choose-avatar" onClick={() => setModalChooseAvatar(false)}>
                                <i className="fas fa-times-circle"></i>
                            </div>
                        </Modal>
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