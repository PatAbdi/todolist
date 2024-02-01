import React, { useState } from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { DeleteTodos } from '../Reduxstore/Todolistslice';
import { useDispatch } from 'react-redux';

const Todolist = ({Todo, id}) => {
 const Dispatch = useDispatch()

    const [mark, setmark] = useState(false);
  return (
    <div className='border border-gray-500  rounded-md flex items-center justify-between'>
        <li onClick={() => setmark(!mark)}
        className={`${mark
        ? "border-l-pink-500 border-orange-800"
        : "border-l-green-500 border-orange-800"
        
        }w-full font-medium text-sm border-l-4 px-4 py-4 cursor-pointer `}>{Todo}
        </li>
        <span onClick={() => Dispatch(DeleteTodos (id))} className='hover:text-pink-500 cursor-pointer'><MdDeleteOutline size={25}/></span>
    </div>
  )
}

export default Todolist