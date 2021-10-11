import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import * as _ from "lodash";
import moment from 'moment';
import { AuthAPI, endpoints } from '../../API';
import LoadingProgress from '../../item-base/LoadingProgress';
import ChangeShippingStatus from './ChangeShippingStatus';
import OrderInformation from './OrderInformation';
import OrderExport from './OrderExport';
import '../post.css';

export let OrderInformationContext = React.createContext();
export let ChangeShippingStatusContext = React.createContext();

export default function OrderAuctionedList() {
    const [loadingProgress, setLoadingProgress] = useState(true);
    const [orderList, setOrderList] = useState([]);
    const [hiddenOrderOption, setHiddenOrderOption] = useState({});
    const [changeStatusModal, setChangeStatusModal] = useState(false);
    const [exportOrderDetail, setExportOrderDetail] = useState(false);

    const onTogglePostOption = index => {
        setHiddenOrderOption({ ...hiddenOrderOption, [index]: !hiddenOrderOption[index] });
    };

    useEffect(() => {
        async function getOrderList() {
            let res = await AuthAPI.get(endpoints['orders']);
            setLoadingProgress(false);
            setOrderList(res.data.results);
        }
        getOrderList();
    }, [orderList]);

    let result;
    if (orderList.length === 0) {
        result = <div className="post-list-null" style={{ marginTop: '3%' }}>
            <p>Order not found</p>
            {loadingProgress ? <LoadingProgress /> : <></>}
            <div style={{ marginBottom: '49.275%' }} />
        </div>
    }

    const closeChangeStatusModal = () => {
        setChangeStatusModal(false);
        setHiddenOrderOption({});
    }

    const closeExportOrderDetail = () => {
        setExportOrderDetail(false);
        setHiddenOrderOption({});
    }

    return (
        <>
            <div style={{ marginTop: '-3%' }} />
            {
                _.sortBy(orderList).reverse().map((order, index) => {
                    return <React.Fragment key={index}>
                        <div className="post-item">
                            <div className="post-content-header">
                                <div className="post-content-header-left">
                                    <img src={order.auction_win.post.customer.avatar} alt="img" />
                                </div>
                                <div className="post-content-header-center">
                                    <p>
                                        <strong>{order.auction_win.post.customer.username}</strong>
                                        <i className="fas fa-check-circle credited-order">
                                            <span className="tool-tip-text">This order has been have the shipper</span>
                                        </i>
                                        <br />
                                        <span>{moment(new Date(order.auction_win.created_date), "YYYYMMDD").fromNow()}</span>
                                    </p>
                                </div>
                                <div className="post-content-header-right">
                                    <p onClick={() => onTogglePostOption(index)}>
                                        <span><i className="fas fa-ellipsis-h"></i></span>
                                    </p>
                                    {!hiddenOrderOption[index] && <></>} {
                                        hiddenOrderOption[index] && <div className="post-option" style={{ width: '15.429%', margin: '3% 0 0 -9%' }}>
                                            <p onClick={() => setChangeStatusModal(true)}><i className="fas fa-edit" style={{ marginRight: '5px' }}></i>Change shipping status</p>
                                            <p onClick={() => setExportOrderDetail(true)}><i className="fas fa-print" style={{ marginRight: '5px' }}></i>Print this order</p>
                                            <Modal className="modal-change-status" isOpen={changeStatusModal} ariaHideApp={false}>
                                                <ChangeShippingStatusContext.Provider value={{ order, orderList, setOrderList, setChangeStatusModal, setHiddenOrderOption }}>
                                                    <ChangeShippingStatus />
                                                </ChangeShippingStatusContext.Provider>
                                                <div className="close-modal-change-status" onClick={closeChangeStatusModal}>
                                                    <i className="fas fa-times-circle"></i>
                                                </div>
                                            </Modal>
                                            <Modal className="modal-order-export" isOpen={exportOrderDetail} ariaHideApp={false}>
                                                <OrderExport props={order} />
                                                <div className="close-modal-order-export" onClick={closeExportOrderDetail}>
                                                    <i className="fas fa-times-circle"></i>
                                                </div>
                                            </Modal>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="post-content">
                                <OrderInformationContext.Provider value={{ order, index }}>
                                    <OrderInformation />
                                </OrderInformationContext.Provider>
                            </div>
                        </div>
                    </React.Fragment>
                })
            }
            {result}
        </>
    );
}