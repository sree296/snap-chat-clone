import { Avatar } from '@material-ui/core';
import React , { useState, useEffect} from 'react'
import './Chats.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {db} from './app/firebase';
import Chat from './Chat';
function Chats() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db
        .collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapchat => {
            setPosts(snapchat.docs.map( (doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
    }, [])
    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar className="chats__avatar"/>
                <div className="chats__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search Name" />
                </div>
                <ChatBubbleIcon className="chats__chatIcon" />
            </div>
            <div className="chats__posts">
               { posts.map(
                   ({
                       id, 
                       'data' : {profilePic, username, timestamp, imageUrl, read},
                    }) => (
                   <Chat 
                       key={id}
                       id={id}
                       username={username}
                       profilePic={profilePic}
                       imageUrl={imageUrl}
                       read={read}
                       timestamp={timestamp}
                   />
                )
               )}
            </div>
        </div>
    )
}

export default Chats
