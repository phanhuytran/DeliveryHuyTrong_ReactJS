import React from 'react';

class IndexStatistic extends React.Component {
    render() {
        return (
            <div>
                <section className="couter_up_area" id="shipper">
                    <div className="table">
                        <div className="cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2 col-sm-3 text-center">
                                        <div className="single_count">
                                            <h1 className="counter">126</h1>
                                            <h5>Satisfied customers</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-3 col-md-offset-1 text-center">
                                        <div className="single_count">
                                            <h1 className="counter">34</h1>
                                            <h5>Branches</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-3 col-md-offset-1 text-center">
                                        <div className="single_count">
                                            <h1 className="counter">120</h1>
                                            <h5>Active workers</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-md-offset-1 text-center">
                                        <div className="single_count">
                                            <h1 className="counter">3546</h1>
                                            <h5>Product delivered</h5>
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
}

export default IndexStatistic;