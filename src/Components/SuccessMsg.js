import React from 'react';
import { GiHappySkull } from "react-icons/gi";
import { motion } from "framer-motion";

const SuccessMsg = ({success}) => {
  return (
    <motion.div
    initial = {{y: -20, opacity: 0}}
    animate = {{y:0, opacity: 1}}
    transition={{
      y: {type: "spring", stiffness: 120}
    }}
    
    className='absolute tracking-wide top-40 z-50 bg-purple-950 p-5 left-12  w-5/6 md:w-2/6 md:left-[35%]  rounded-md border-b-[3px] border-green-500 '>
        <p className='flex items-center justify-center gap-2 text-lg font-medium'><span className='text-lg animate-pulse'><GiHappySkull size={30} className='text-green-500' /></span>{success}</p>
    </motion.div>
  )
}

export default SuccessMsg