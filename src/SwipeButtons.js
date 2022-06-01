import React from 'react'
import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import FlashOnSharpIcon from '@mui/icons-material/FlashOnSharp';
import IconButton from '@mui/material/IconButton';

import './SwipeButtons.css'

const SwipeButtons = () => {
  return (
    <div className='swipebuttons'>
        <IconButton><ReplaySharpIcon className='swipebuttons__repeat' fontSize='large'/></IconButton>
        <IconButton><CloseSharpIcon className='swipebuttons__close' fontSize='large'/></IconButton>
        <IconButton><StarRateSharpIcon className='swipebuttons__star' fontSize='large'/></IconButton>
        <IconButton><FavoriteSharpIcon className='swipebuttons__favorite' fontSize='large'/></IconButton>
        <IconButton><FlashOnSharpIcon className='swipebuttons__flash' fontSize='large'/></IconButton>
    </div>
  )
}

export default SwipeButtons