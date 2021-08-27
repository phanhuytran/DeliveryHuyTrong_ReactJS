import React from 'react';
import "../order-auction.css";
import clientIMG from '../image/client.jpg';

export default function OrderAuctionComment() {
    return (
        <form>
            <div className="auction-area-comment">
                <hr />
                <div className="auction-area-comment-flex auction-space">
                    <div className="auction-area-comment-flex-left">
                        <img src={clientIMG} alt="img" />
                    </div>
                    <div className="auction-area-comment-flex-center">
                        <div className="auction-area-comment-info">
                            <strong>Shipper's Name</strong><br />
                            <span>20.000 VNĐ - 0775398511</span>
                        </div>
                        <div className="auction-area-comment-date">
                            <p>July 31 at 9:41 PM</p>
                        </div>
                    </div>
                    <div className="auction-area-comment-flex-right">
                    </div>
                </div>
                <hr />
                <div className="auction-area-comment-flex">
                    <div className="auction-area-comment-flex-left">
                        <img src={clientIMG} alt="img" />
                    </div>
                    <div className="auction-area-comment-flex-center">
                        <input type="text" name="" defaultValue="" placeholder="Write a auction information..." />
                    </div>
                    <div className="auction-area-comment-flex-right">
                        <button><i className="fas fa-location-arrow" /></button>
                    </div>
                </div>
            </div>
        </form>
    );
}