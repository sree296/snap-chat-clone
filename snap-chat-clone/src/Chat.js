import { Avatar } from '@material-ui/core';
import React from 'react'
import './Chat.css';

function Chat({id, profilePic, username, timestamp, imageUrl, read}) {
    return (
        <div className="chat">
            <Avatar src={profilePic} />
            <h4>{username}</h4>
            <p>Tap to View - {new Date(timestamp ?.toDate()).toUTCString()}</p>
        </div>
    )
}

export default Chat
