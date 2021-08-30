import React from 'react';
import '../post.css';

export default function PostComment() {
    return (
        <div className="post-comment">
            <hr />
            <div className="post-comment-flex">
                <div className="post-comment-flex-left">
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="img" />
                </div>
                <div className="post-comment-flex-right">
                    <div className="post-comment-content">
                        <p><strong>Thien Phuc Nguyen</strong></p>
                        <p>20.000 VNĐ - 0775398511</p>
                    </div>
                    <p className="created-date-comment">2021-08-27</p>
                </div>
            </div>

            <div className="post-comment-flex">
                <div className="post-comment-flex-left">
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="img" />
                </div>
                <div className="post-comment-flex-right">
                    <div className="post-comment-content">
                        <p><strong>Thien Phuc Nguyen</strong></p>
                        <p>20.000 VNĐ - 0775398511</p>
                    </div>
                    <p className="created-date-comment">2021-08-27</p>
                </div>
            </div>
            <hr />
        </div>
    );
}