import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Chat.css'
import { Link } from 'react-router-dom';

function Chat({name, message, timestamp, profilepic}) {
  return (
    <Link to = {`/chat/${name}`}>
        <div className='chat'>
            <Avatar className='chat__image' alt={name} src={profilepic}/>
            <div className='chat__details'>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <div className='chat__timestamp'>
                <p>{timestamp}</p>
            </div>
        </div>
    </Link>
  )
}

export default Chat