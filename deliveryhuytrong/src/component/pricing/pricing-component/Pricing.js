import React, { useContext, useEffect, useState } from 'react';
import '../pricing.css'
import Modal from 'react-modal';
import { UserContext } from '../../../App';
import SignInSignUp from './../../item-base/signIn-signUp-component/SignInSignUp';
import API, { endpoints } from '../../API';

export default function Pricing() {
    const auth = useContext(UserContext);
    let user = auth.user;

    const [isDisplaySignInSignUpModal, setIsDisplaySignInSignUpModal] = useState(false);
    const [voucherList, setVoucherList] = useState([]);

    useEffect(() => {
        async function getVoucherList() {
            let res = await API.get(endpoints['vouchers']);
            setVoucherList(res.data);
        }
        getVoucherList();
    }, [voucherList]);

    return (
        <div className="row">
            {
                voucherList.map((voucher, index) => {
                    return <div key={index} className="col-md-4 col-lg-4 col-sm-4 col-xs-12 text-center" style={{ marginBottom: '2.5%' }}>
                        <div className="single-pricing-table">
                            <div className="pricing-title">
                                <h6>{voucher.name}</h6>
                                <h1>{voucher.discount}%</h1>
                                <h5>{voucher.description}</h5>
                            </div>
                            <ul className="price-list">
                                <li></li>
                                <li><span>Start date:</span><span>{(voucher.start_date).slice(0, 10)}</span></li>
                                <li><span>End date:</span><span>{(voucher.end_date).slice(0, 10)}</span></li>
                            </ul>
                            {
                                user ? <div className="order-buton">
                                    <span>order now</span>
                                </div> : <div onClick={() => setIsDisplaySignInSignUpModal(true)} className="order-buton">
                                    <span>login for continue</span>
                                </div>
                            }
                            <Modal className="modal-signin-signup" isOpen={isDisplaySignInSignUpModal} ariaHideApp={false}>
                                <SignInSignUp />
                                <div className="close-modal-signin-signup" onClick={() => setIsDisplaySignInSignUpModal(false)}>
                                    <i className="fas fa-times-circle"></i>
                                </div>
                            </Modal>
                        </div>
                    </div>
                })
            }
        </div>
    );
}