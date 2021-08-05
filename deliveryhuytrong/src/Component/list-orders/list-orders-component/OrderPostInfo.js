import React, { Component } from 'react';

class OrderPostInfo extends Component {
    render() {

        function show_info_post() {
            var x = document.getElementById("show-info-post");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
        
        return (
            <div>
                <h2>List of orders waiting to be auctioned</h2>
                <div className="create-post">
                    <div className="create-post-left">
                        <div className="new-page-tab" onClick={show_info_post}>CREATE A NEW POST</div>
                    </div>
                    <div className="create-post-right" id="show-info-post">
                        <form>
                            <table>
                                <tbody><tr>
                                    <td>Order description:</td>
                                    <td><input type="text" defaultValue="" placeholder="Order description..." required /></td>
                                </tr>
                                    <tr>
                                        <td>Image:</td>
                                        <td><input type="file" defaultValue="" placeholder="Other information..." required /></td>
                                    </tr>
                                    <tr>
                                        <td>Weight:</td>
                                        <td><input type="number" defaultValue="" placeholder="Weight..." required /></td>
                                    </tr>
                                    <tr>
                                        <td>Receiving address:</td>
                                        <td><input type="text" defaultValue="" placeholder="Receiving address..." required /></td>
                                    </tr>
                                    <tr>
                                        <td>Sending address:</td>
                                        <td><input type="text" defaultValue="" placeholder="Sending address..." required /></td>
                                    </tr>
                                    <tr>
                                    </tr><tr>
                                        <td colSpan={2}>
                                            <button>POST</button>
                                        </td>
                                    </tr>
                                </tbody></table>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPostInfo;