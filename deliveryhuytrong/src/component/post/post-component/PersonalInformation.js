import React from 'react';
import '../post.css'

export default function PersonalInformation() {

    return (
        <>
            <div className="post-body-left">
                <h5>Personal Information</h5><hr />
                <img src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/61218055_2366961493538973_7396865786104512512_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=RqtnDJ_gfCUAX_ZE0Ip&_nc_ht=scontent.fsgn8-1.fna&oh=8953a69d3ccfb42f5cdb52e98079a2c5&oe=6132BD23" alt="img" />
                <h4>PHAN HUY TRAN</h4>
                <table>
                    <tbody>
                        <tr><td><i className="fas fa-gift"></i></td><td>2000-02-15</td></tr>
                        <tr><td><i className="fas fa-venus-mars"></i></td><td>Male</td></tr>
                        <tr><td><i className="far fa-id-card"></i></td><td>025832688</td></tr>
                        <tr><td><i className="fas fa-map-marker-alt"></i></td><td>Ho Chi Minh City</td></tr>
                        <tr><td><i className="far fa-envelope"></i></td><td>1851050056huy@ou.edu.vn</td></tr>
                        <tr><td><i className="fas fa-mobile-alt"></i></td><td>0775398511</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="post-body-center" />
        </>
    );
}