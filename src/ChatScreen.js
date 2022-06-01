import React, { useState } from 'react'
import './ChatScreen.css'
import Avatar from '@mui/material/Avatar';

function ChatScreen() {
    const [input, setInput]= useState("")
    const [messages, setMessages] = useState([
    {
        name:'Nisha',
        image:'https://www.cheatsheet.com/wp-content/uploads/2022/05/Hilary-Duff-Lizzie-McGuire.jpg',
        message:'Whats up!'
    },
    {
        name:'Nisha',
        image:'https://www.cheatsheet.com/wp-content/uploads/2022/05/Hilary-Duff-Lizzie-McGuire.jpg',
        message:'How its going'
    },
    {
        message:'I am good, what about you?'
    }
])

function handleSend(e){
    e.preventDefault()
    setMessages([...messages, {message:input}])
    setInput("")
}
  return (
    <div className='chatscreen'>
        <p className='chatscreen__timestamp'>YOU MATHCED WITH THIS USER ON 10/04/22</p>
        {messages.map((items, key)=>(
            /* If no name inside message, push in the right with blue */
            items.name?(
                <div className='chatscreen__message'>
                    <Avatar className='chatscreen__image' alt={items.name} src={items.image}/>
                    <p className='chatscreen__text'>{items.message}</p>
                </div>
            ) : (
                <div className='chatscreen__message'>
                    <p className='chatscreen__textuser'>{items.message}</p>
                </div>
            )
        ))}
            <form className='chatscreen__input'>
                <input type='text' 
                placeholder='Type a message...' 
                className='chatscreen__inputfield' 
                value={input} 
                onChange={(e)=>setInput(e.target.value)}
                />
                <button type='submit' onClick={handleSend} className='chatscreen__inputbutton'>SEND</button>
            </form>
    </div>
  )
}
export default ChatScreen