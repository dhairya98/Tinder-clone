import React, { useEffect } from 'react'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css' 
import database from './firebase'

function TinderCards() {
    // Putting People in array (Image and name)
    const [people, setPeople]= useState([])

// Now we need to import database into our App and get the data
// Piece of code that runs based on a condition
// We are using useEffect here when setPeople is called and lifecycle method for updation starts

useEffect(()=>{
    const unsubscribe = database.collection('people').onSnapshot(snapshot =>(
    setPeople(snapshot.docs.map(doc=>doc.data()))  
    // Snapshot.docs will give you access to all fields of DB (data+data+data=doc)
    // Snapshot be like - Take a picture aadn send me the new document 
    ))
        // People Collection --> Listen whatever changes (Above expression is a listener) --> Pull in the data
    
    //Now, for useEffect to run again, we need to unsubscribe first oen in order to avoid website being slowed down
    // Avoid Memory Leaks

    return () => {
        unsubscribe()
    }

}, [])
  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
            {people.map((person)=>( 
            <TinderCard className='swipe' key={person.name} preventSwipe={['up', 'down']}>
                <div className='card' style={{ backgroundImage: `url(${person.url})` }}> 
                <h3>{person.name}</h3>
                </div>  
            </TinderCard>
            )
        )}
        </div>
        
    </div>
  )
}

export default TinderCards