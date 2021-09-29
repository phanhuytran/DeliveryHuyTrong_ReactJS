import React, { useContext, useRef, useState } from 'react';
import cookies from 'react-cookies';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Modal from 'react-modal';
import { AuthAPI, endpoints } from '../../API';
import LoadingProgress from '../../item-base/LoadingProgress';
import { UserContext } from '../../../App';
import '../post.css';
import avatarNullIMG from '../image/avatar-null.png';

export default function UpdateAvatar() {
    const userAvatar = useContext(UserContext);
    const [loadingProgress, setLoadingProgress] = useState(false);
    const [modalChooseAvatar, setModalChooseAvatar] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState([]);
    const [currentAvatar, setCurrentAvatar] = useState(true);
    const [isAvatar, setIsAvatar] = useState(false);

    const avatar = useRef();
    let user = cookies.load("user");

    const handleImageChange = e => {
        setSelectedAvatar([]);
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setSelectedAvatar((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
        }
        setCurrentAvatar(false);
        setIsAvatar(true);
    }

    const renderAvatar = source => {
        return source.map((image) => {
            return <img className="update-upload-avatar" src={image} alt="avatar" key={image} />;
        })
    }

    const changeAvatar = () => {
        setLoadingProgress(true);
        let formData = new FormData();
        formData.append('avatar', avatar.current.files[0]);
        let setUserAvatar = AuthAPI.patch(endpoints['users'] + cookies.load("user").id + '/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            cookies.save("user", res.data);
            setIsAvatar(false);
            setModalChooseAvatar(false);
            setLoadingProgress(false);
            userAvatar.setUser(setUserAvatar);
        }).catch((err) => {
            console.log(err.response.data);
        })
    }

    return (
        <>
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
                                {
                                    currentAvatar ? <td>
                                        <img className="update-upload-avatar" src={cookies.load("user").avatar} alt="avatar" />
                                    </td>
                                        : <td>{renderAvatar(selectedAvatar)}</td>
                                }
                            </tr>
                        </tbody>
                    </table>
                    {
                        isAvatar === true ? <>
                            {
                                loadingProgress ? <LoadingProgress />
                                    : <button onClick={changeAvatar}>Change avatar</button>
                            }
                        </> : <></>
                    }
                </div>
                <div className="close-modal-choose-avatar" onClick={() => setModalChooseAvatar(false)}>
                    <i className="fas fa-times-circle"></i>
                </div>
            </Modal>
        </>
    );
}