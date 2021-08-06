import React from 'react';

class IndexIntro extends React.Component {
    render() {
        return (
            <div>
                <section className="about_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about_single_item_1">
                                    <div className="item_icon">
                                        <img src="img/speed.png" alt="item" />
                                    </div>
                                    <div className="about_single_item_content">
                                        <h4>Fastest Delivery</h4>
                                        <p>Shipper delivers immediate or same day depending on your needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about_single_item_1">
                                    <div className="item_icon">
                                        <img src="img/safe.png" alt="item" />
                                    </div>
                                    <div className="about_single_item_content">
                                        <h4>Safe</h4>
                                        <p>Guaranteed 100% safety for the shipper because the shipper has been paid before receiving the goods for delivery.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about_single_item_1">
                                    <div className="item_icon">
                                        <img src="img/moto.png" alt="item" />
                                    </div>
                                    <div className="about_single_item_content">
                                        <h4>Convenient Way</h4>
                                        <p>Automatically detect the location and suggest all the nearest orders on the way you ship.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default IndexIntro;