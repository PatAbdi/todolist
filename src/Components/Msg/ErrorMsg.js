import React from 'react';
import { GiTerror } from "react-icons/gi";
import { motion } from "framer-motion";

const ErrorMsg = ({errmsg}) => {
  return (
    <motion.div
    initial = {{y: -20, opacity: 0}}
    animate = {{y:0, opacity: 1}}
    transition={{
      y: {type: "spring", stiffness: 120}
    }}
    
    className='absolute tracking-wide top-5 z-50 bg-purple-950 p-4 w-4/6 md:w-2/6 md:left-[35%] rounded-md border-b-[3px] border-pink-700 '>
        <p className='flex items-center justify-center gap-2 text-lg font-medium'><span className='text-lg animate-pulse'><GiTerror size={30} className='text-red-600' /></span>{errmsg}</p>
    </motion.div>
  )
}

export default ErrorMsg