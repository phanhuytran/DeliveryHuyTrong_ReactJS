import React from 'react';
import Post from './post-component/Post';
import PostTitle from './post-component/PostTitle';
import NotificationBell from '../item-base/NotificationBell';

export default function BodyPost() {

    return (
        <>
            <NotificationBell />
            <PostTitle />
            <Post />
        </>
    );
}