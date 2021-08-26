import React from 'react';
import { Link } from 'react-router-dom';
import shipperIMG from './image/shipper.jpg'

export default function NotificationBell() {
    return (
        <div className="icons-bell">
            <Link to="/statistic"><i className="fas fa-archive fas-bell" /></Link>
            <div className="notification-bell">
                <div className="notBtn-bell">
                    <div>
                        <div className="number-bell">2</div>
                        <i className="fas fa-bell fas-bell" />
                    </div>
                    <div className="box-bell">
                        <div className="display-bell">
                            <a href="/">
                                <div className="nothing-bell">
                                    <i className="fas fa-child  fas-bell stick-bell" />
                                    <div className="cent-bell">Looks Like your all caught up!</div>
                                </div>
                            </a>
                            <div className="cont-bell">
                                <div className="sec-bell">
                                    <a href="/">
                                        <div className="profCont-bell">
                                            <img className="profile-bell" src={shipperIMG} alt="notification-img" />
                                        </div>
                                        <div className="txt-bell">Brie liked your post: "Pure css notification box"</div>
                                        <div className="txt-bell sub-bell">11/6 - 9:35 pm</div>
                                    </a>
                                </div>
                                <div className="sec-bell">
                                    <a href="/">
                                        <div className="profCont-bell">
                                            <img className="profile-bell" src={shipperIMG} alt="notification-img" />
                                        </div>
                                        <div className="txt-bell">Brie liked your post: "Pure css notification box"</div>
                                        <div className="txt-bell sub-bell">11/6 - 9:35 pm</div>
                                    </a>
                                </div>
                                <div className="sec-bell">
                                    <a href="/">
                                        <div className="profCont-bell">
                                            <img className="profile-bell" src={shipperIMG} alt="notification-img" />
                                        </div>
                                        <div className="txt-bell">Brie liked your post: "Pure css notification box"</div>
                                        <div className="txt-bell sub-bell">11/6 - 9:35 pm</div>
                                    </a>
                                </div>
                                <div className="sec-bell">
                                    <a href="/">
                                        <div className="profCont-bell">
                                            <img className="profile-bell" src={shipperIMG} alt="notification-img" />
                                        </div>
                                        <div className="txt-bell">Brie liked your post: "Pure css notification box"</div>
                                        <div className="txt-bell sub-bell">11/6 - 9:35 pm</div>
                                    </a>
                                </div>
                                <div className="sec-bell">
                                    <a href="/">
                                        <div className="profCont-bell">
                                            <img className="profile-bell" src={shipperIMG} alt="notification-img" />
                                        </div>
                                        <div className="txt-bell">Brie liked your post: "Pure css notification box"</div>
                                        <div className="txt-bell sub-bell">11/6 - 9:35 pm</div>
                                    </a>
                                </div>
                                <div className="sec-bell">
                                    <a href="/">
                                        <div className="profCont-bell">
                                            <img className="profile-bell" src={shipperIMG} alt="notification-img" />
                                        </div>
                                        <div className="txt-bell">Brie liked your post: "Pure css notification box"</div>
                                        <div className="txt-bell sub-bell">11/6 - 9:35 pm</div>
                                    </a>
                                </div>
                                <div className="sec-bell">
                                    <a href="/">
                                        <div className="profCont-bell">
                                            <img className="profile-bell" src={shipperIMG} alt="notification-img" />
                                        </div>
                                        <div className="txt-bell">Brie liked your post: "Pure css notification box"</div>
                                        <div className="txt-bell sub-bell">11/6 - 9:35 pm</div>
                                    </a>
                                </div>
                                <div className="sec-bell">
                                    <a href="/">
                                        <div className="profCont-bell">
                                            <img className="profile-bell" src={shipperIMG} alt="notification-img" />
                                        </div>
                                        <div className="txt-bell">Brie liked your post: "Pure css notification box"</div>
                                        <div className="txt-bell sub-bell">11/6 - 9:35 pm</div>
                                    </a>
                                </div>
                                <div className="sec-bell">
                                    <a href="/">
                                        <div className="profCont-bell">
                                            <img className="profile-bell" src={shipperIMG} alt="notification-img" />
                                        </div>
                                        <div className="txt-bell">Brie liked your post: "Pure css notification box"</div>
                                        <div className="txt-bell sub-bell">11/6 - 9:35 pm</div>
                                    </a>
                                </div>
                                <div className="sec-bell">
                                    <a href="/">
                                        <div className="profCont-bell">
                                            <img className="profile-bell" src={shipperIMG} alt="notification-img" />
                                        </div>
                                        <div className="txt-bell">Brie liked your post: "Pure css notification box"</div>
                                        <div className="txt-bell sub-bell">11/6 - 9:35 pm</div>
                                    </a>
                                </div>
                                <div className="sec-bell">
                                    <a href="/">
                                        <div className="profCont-bell">
                                            <img className="profile-bell" src={shipperIMG} alt="notification-img" />
                                        </div>
                                        <div className="txt-bell">Brie liked your post: "Pure css notification box"</div>
                                        <div className="txt-bell sub-bell">11/6 - 9:35 pm</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/post"><i className="fas fa-edit fas-bell" /></Link>
        </div>
    );
}