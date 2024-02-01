import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-full text-center'>
        <p>With every extension of life there is the desire to dream and create what we consider art.</p>
        <span className='flex items-center p-2 justify-center gap-2'> Copyright @ 2024. Designed by PatPrimeDesigns, All Rights Reserved.</span>

<div className='flex items-center justify-center gap-4'>

        <span className='footericon'>
        <FaGithub />
        </span>
        <span className='footericon'>

        <FaBehance />
        </span>
        <span className='footericon'>

        <FaXTwitter />
        </span>
        <span className='footericon'>

        <FaDribbble />
        </span>
</div>

        
        
    </div>

    
  )
}

export default Footer