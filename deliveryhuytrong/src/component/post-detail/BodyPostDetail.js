import React from 'react';
import NotificationBell from '../item-base/NotificationBell';
import PostDetail from './post-detail-component/PostDetail';
import PostDetailTitle from './post-detail-component/PostDetailTitle';

export default function BodyPostDetail(props) {
    return (
        <>
            <NotificationBell />
            <PostDetailTitle />
            <PostDetail props={props.props} />
        </>
    );
}