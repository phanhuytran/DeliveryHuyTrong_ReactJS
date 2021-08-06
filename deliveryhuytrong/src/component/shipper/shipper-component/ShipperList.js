import React from 'react';
import { Link } from 'react-router-dom';
import Shipper from './Shipper';
import ShipperTitle from './ShipperTitle';

class ShipperList extends React.Component {
    render() {
        var shippers = [
            {
                id: "1",
                firstName: "Phan Huy",
                lastName: "Tran",
                gender: "Male",
                idCard: "025832688",
                address: "Nevada",
                email: "1851050056huy@ou.edu.vn",
                phone: "0775398511",
                image: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/61218055_2366961493538973_7396865786104512512_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=RqtnDJ_gfCUAX_ZE0Ip&_nc_ht=scontent.fsgn8-1.fna&oh=8953a69d3ccfb42f5cdb52e98079a2c5&oe=6132BD23",
                isActive: true
            }, {
                id: "2",
                firstName: "Do Trong",
                lastName: "Nguyen",
                gender: "Male",
                idCard: "025832688",
                address: "Texas",
                email: "1851050056huy@ou.edu.vn",
                phone: "0775398511",
                image: "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/191204214_1100237067172312_1261997553801896319_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=174925&_nc_ohc=uiusfrd9l5EAX9JpjdS&_nc_ht=scontent.fsgn3-1.fna&oh=3af4694752362864dd88df51e38aa1c0&oe=6134561E",
                isActive: true
            }

        ];

        let elements = shippers.map((shipper, index) => {
            return <Shipper
                key={index}
                info={shipper}
                
                id={shipper.id}
                firstName={shipper.firstName}
                lastName={shipper.lastName}
                gender={shipper.gender}
                idCard={shipper.idCard}
                address={shipper.address}
                email={shipper.email}
                phone={shipper.phone}
                image={shipper.image}
                isActive={shipper.status}
            />
        });

        return (
            <div>
                <section className="about_top">
                    <div className="container">
                        <ShipperTitle />
                        <br /><br />
                        <div className="row">
                            {elements}
                        </div>
                        <Link to="/list-orders">SEE LIST OF ORDERS</Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default ShipperList;