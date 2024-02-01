import React, { useEffect, useState } from 'react';
import {data} from './data';
import Todolist from './Todolist';
import Footer from './Footer';
import ErrorMsg from './Msg/ErrorMsg';
import SuccessMsg from './SuccessMsg';
import {motion} from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { AddTodos, RemoveTodos } from '../Reduxstore/Todolistslice';


const Inputform = () => {

  const Dispatch = useDispatch()
  const [ErrMsg, setErrMsg]= useState("");
  const [Category, setCategory] = useState("");
  const [successMsg, setSuccessMsg] = useState("")
  const [ShowError, SetShowError] = useState(false);
  const  [Showsuccess, setShowsuccess] = useState(false);
  const [Todolistvalue, setTodolistvalue] = useState("");
  const Todositems = useSelector((state)=>state.Todos.Todolist);
  const [Showremovepopup, setShowremovepopup] = useState(false);
  console.log(Todositems)

  const handletodolist =(e)=>
  {
    e.preventDefault()

    if(Todolistvalue === "")
    {
      SetShowError(true)
      setShowsuccess(false)
      setErrMsg("Please Write you To Do List...");

    }
    else if (Category === "")
    {
      SetShowError(true)
      setShowsuccess(false)
      setErrMsg("Please choose a Category...");

    }

    else if (Category === "Categories")
    {
      SetShowError(true)
      setShowsuccess(false)
      setErrMsg("Please choose a Category...");
    }

    else
    {
      Dispatch (AddTodos({
        id: Math.random(),
        todo: Todolistvalue,
        Categories: Category,
      }))
      setTodolistvalue("");
      setShowsuccess(true)
      SetShowError(false)
      setSuccessMsg("Todo has been added Successfully")
    }
  }

  useEffect(() => {
    const timer = setTimeout(() =>{
      ShowError && SetShowError(false)
      Showsuccess && setShowsuccess(false)
    }, 2000)

    return () => clearTimeout(timer)
  },[ShowError, Showsuccess])
  return (
    <div className='w-11/12 md:w-8/12 m-auto p-10 gap-4 rounded-md shadow-lg shadow-purple-500 bg-purple-900  flex flex-col'>

        <div className='flex items-center gap-2'>
        <input
        onChange={(e) => setTodolistvalue(e.target.value)}
        value={Todolistvalue}
        className='w-[75%] p-4 outline-none rounded-md  border-[1px] bg-transparent border-gray-400 text-white
         text-base placeholder:text-sm tracking-wide focus-visible:border-pink-600 hover:border-white' type="text" placeholder='Enter your todo.... ' />


        <div className='w-[25%] h-full relative'>
            <select onChange={(e) => setCategory(e.target.value)} className='w-full h-full bg-purple-700 border-[1px] cursor-pointer rounded-md border-gray-400 text-center capitalize outline-none bg-transparent focus-visible:border-pink-600 hover:border-white '>

            {
                data.map((item, index) =>(
                    <option key={index} className='bg-purple-700'  >{item.title}</option>
                ))
                
            }
            </select>
        </div>
        </div>

        <button onClick={handletodolist} className='w-full border-[1px] h-10 border-gray-400 rounded-md uppercase font-semibold hover:text-pink-400 tracking-wider '>
          Add Todo
        </button>

        <div className=' w-full flex flex-col gap-6'>
          <ul className='w-full flex flex-col m-auto p-2 gap-3 border border-gray-500 max-h-[176px] md:max-h-[250px] overflow-y-scroll scrollbar-hidden shadow-lg shadow-purple-700  rounded-md'>
          {
            Todositems.length >0 ? (<>
            
                          {Todositems.map((item) => (

                          <Todolist key={item.id} Todo= {item.todo} id={item.id}/>
                          ))
                          }
            </>)
            :
            (
              <p className='text-orange-400 text-center text-lg font-medium'>Your Todo List is Empty ....!</p>
            )
          }
          </ul>

          {
            Todositems.length > 0 && (
              <motion.button
              initial = {{y:20, opacity:0}}
              animate = {{y: 0 , opacity:1}}
              transition={{duration: .5}}
              onClick={() => setShowremovepopup(true) }
              
              className='w-40 h-10 font-semibold text-red-500 rounded-md  mx-auto bg-transparent border-[1px]
               hover:bg-red-600 hover:text-white 
               hover:border-red-600 duration-300'>Remove Todo
               </motion.button>
            )
          }
        </div>

        <Footer/>

       {
        ShowError && <ErrorMsg errmsg={ErrMsg}/>
       }

       {
        Showsuccess && <SuccessMsg success={successMsg}/>
       }


        {
        Showremovepopup && 
        (
          <div className='w-full h-screen fixed bg-black top-0 left-0 bg-opacity-60'>

            <div className='absolute   top-1/2 left-1/2 w-10/12 md:w-4/12 text-center transform -translate-x-1/2 -translate-y-1/2 px-8 py-7 bg-purple-900 border-[1px] border-purple-400 rounded-md z-50 flex flex-col gap-3'>
                <p className='font-medium'> Are you sure you want to {""}<span className='font-semibold underline underline-offset-2 decoration-[1px]'>Remove </span>{""}
                 all the Todos?</p>

                 <div className='flex items-center gap-3 justify-center'>
                  <button 
                  onClick={() => Dispatch(RemoveTodos()) & setShowremovepopup(false)}
                  className='w-5/12 p-2 px-6  font-semibold  bg-transparent hover:bg-green-700 rounded-md shadow-md hover:shadow-green-600/40 border border-green-400 duration-300'>Yes</button>
                  <button 
                  onClick={() => setShowremovepopup(false)}
                  className='w-5/12 p-2 px-6 font-semibold bg-transparent hover:bg-pink-700 rounded-md shadow-md hover:shadow-pink-500/40 border border-red-400 duration-300'>No</button>
                 </div>
                
              </div>

            </div>
        )
       }
    </div>
  )
}

export default Inputform