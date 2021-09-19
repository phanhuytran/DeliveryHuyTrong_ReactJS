import React from 'react';
import "../post-detail.css";
import clientIMG from '../image/client.jpg';

export default function PostDetailComment() {
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
                            <strong style={{ fontSize: 16 }}>Shipper's Name</strong><br />
                            <span>20.000 VNĐ - 0775398511</span>
                        </div>
                        <div className="auction-area-comment-date">
                            <p>July 31 at 9:41 PM</p>
                        </div>
                    </div>
                    <div className="auction-area-comment-flex-right">
                        <input className="radio-select-shipper" name="radio-select-shipper" type="radio" required />
                    </div>
                </div>
                <hr />
                <div className="auction-confirmation">
                    <button type="submit">Auction confirmation</button>
                </div>
            </div>
        </form>
    );
}