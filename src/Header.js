import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import './Header.css'
import { Link, useHistory } from 'react-router-dom';

function Header(props) {
    const history = useHistory();
  return (
    <div className='header'>
         {/* <IconButton> Used to give a button type structure in the Icon specifed */}
            {
                props.backButton?
                <IconButton onClick={()=> history.replace(props.backButton)}>
                <ArrowBackIosNewSharpIcon className='header__size' fontSize='large'/>
                </IconButton>
                :
                <IconButton>
                <PersonIcon className='header__size' fontSize='large'/>
                </IconButton>
            }
        <Link to = '/'>
        <img className='header__logo' src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png' alt='Tinder Logo'></img>
        </Link>
        
        <Link to="/chat">
        <IconButton>
        <ForumIcon className='header__size' fontSize='large'/>
        </IconButton>
        </Link>
    </div>
  )
}

export default Header