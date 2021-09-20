import React, { useState, useEffect } from 'react';
import { AuthAPI, endpoints } from '../../API';

export default function HomeStatistic() {
    const [shipperList, setShipperList] = useState([]);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function getShipperList() {
            let res = await AuthAPI.get(endpoints['shippers']);
            setShipperList(res.data);
        }
        async function getPostList() {
            let res = await AuthAPI.get(endpoints['posts']);
            setPostList(res.data.results);
        }
        getPostList();
        getShipperList();
    }, [postList]);

    return (
        <section className="couter-up-area" id="shipper">
            <div className="table">
                <div className="cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-sm-3 text-center">
                                <div className="single-count">
                                    <h1 className="counter">0</h1>
                                    <h5>Customers</h5>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3 col-md-offset-1 text-center">
                                <div className="single-count">
                                    <h1 className="counter">
                                        {shipperList.length}
                                    </h1>
                                    <h5>Shippers</h5>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3 col-md-offset-1 text-center">
                                <div className="single-count">
                                    <h1 className="counter">
                                        {postList.length}
                                    </h1>
                                    <h5>Orders</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}