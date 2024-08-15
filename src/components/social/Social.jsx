import React from 'react'
import './social.css'
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';

function Social() {
  return (
    <>
    <div className='main__social'>
        <div className='social__items'>
        <a href="https://www.linkedin.com/in/anikettawani/" className='social__icon' target='_blank' ><BsLinkedin/></a>
        <a href="https://github.com/AniketTawani" className='social__icon' target='_blank'><AiFillGithub/></a>
        </div>
    </div>
    </>
  )
}

export default Social

