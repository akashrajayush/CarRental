import React from 'react'
import { assets } from '../assets/assets';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        Link
        <img src={assets.logo} alt="logo" className="h-8"/>
    </div>
  )
}

export default Navbar