import React from 'react'
import Chat from './Chat'

function Chats() {
  return (
    <div className='chats'>
        <Chat 
            name="Namita"
            message="Yo! Wassup 😃"  
            timestamp="40 seconds ago!"
            profilepic="https://preview.redd.it/u6px0p078nb81.png?width=375&format=png&auto=webp&s=2785be840da5f98e0fad62f01afda11d51530f88"
        />
        <Chat 
            name="Ahsaas"
            message="Hey! 👊"  
            timestamp="40 minutes ago!"
            proflepic="https://1.bp.blogspot.com/-EqlLdpsc-V0/XXX4081LD0I/AAAAAAAAANA/IziMcZ79qnsbN6su14gquAyyY7qb56dbwCEwYBhgL/s1600/TAMIL%2BWHATSAPP%2BGROUP%2BLINK.png"
        />
        <Chat 
            name="Sarah"
            message="Knock Knock 👌"  
            timestamp="4 days ago!"
            profilepic="https://starsunfolded.com/wp-content/uploads/2017/10/Ashnoor-Kaur-Photo.jpg"
        />
        <Chat 
            name="Nisha"
            message="I am here! " 
            timestamp="1 Week ago"
            profilepic="https://www.cheatsheet.com/wp-content/uploads/2022/05/Hilary-Duff-Lizzie-McGuire.jpg"
        />
    </div>
  )
}

export default Chats
