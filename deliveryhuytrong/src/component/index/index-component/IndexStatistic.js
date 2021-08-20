import React, { useState } from 'react';
import shipperListData from '../../shipper/shipper-component/ShipperListData';
import orderPostListData from '../../list-orders/list-orders-component/OrderPostListData';

export default function IndexStatistic() {
    const [shipperList] = useState(shipperListData);
    const [orderPostList] = useState(orderPostListData);

    return (
        <div>
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
                                            {orderPostList.length}
                                        </h1>
                                        <h5>Orders</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}