import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Todolist from '../Todolist';


const Categories = () => {
    const Todositems = useSelector((state)=>state.Todos.Todolist);
    const [PersonalTodos, setPersonalTodos] = useState([]);
    const [BusinessTodos, setBusinessTodos] = useState([]);
    const [OthersTodos, setOthersTodos] = useState([]);


    // Button click function

    const [ActivePersonal, setActivePersonal] = useState(false);
    const [ActiveBusiness, setActiveBusiness] = useState(false);
    const [ActiveOthers, setActiveOthers] = useState(false);

    useEffect(() => {
        const PersonalCategories = Todositems.filter((item) => item.Categories === "Personal");
        setPersonalTodos(PersonalCategories);

        const BusinessCategories = Todositems.filter((item) => item.Categories === "Business");
        setBusinessTodos(BusinessCategories);

        const OthersCategories = Todositems.filter((item) => item.Categories === "Others");
        setOthersTodos(OthersCategories);


    }, [Todositems])
  return (
    <div className='w-11/12 md:w-8/12 m-auto mt-2 bg-purple-900 rounded-md shadow-lg shadow-purple-500 h-[250px] p-5 flex flex-col gap-6'>
        
        <div className='w-full flex justify-between text-center p-2 items-center gap-4'>
            <p onClick={()=>
              setActivePersonal(true) & setActiveBusiness(false) & setActiveOthers(false)

            }
             className='w-full border-[1px] border-gray-500 p-4 rounded-md px-5 font-semibold hover:text-white cursor-pointer hover:bg-purple-600 duration-300'>Personal</p>
            <p onClick={()=>
              setActivePersonal(false) & setActiveBusiness(true) & setActiveOthers(false)

            } className='w-full border-[1px] border-gray-500 p-4 rounded-md px-5 font-semibold hover:text-white cursor-pointer hover:bg-purple-600 duration-300'>Business</p>
            <p onClick={()=>
              setActivePersonal(false) & setActiveBusiness(false) & setActiveOthers(true)

            } className='w-full border-[1px] border-gray-500 p-4 rounded-md px-5 font-semibold hover:text-white cursor-pointer hover:bg-purple-600 duration-300'>Others</p>
        </div>

        <div className='w-full font-medium text-center pt-2 items-center justify-center flex overflow-y-scroll scrollbar-hidden md:max-h-[500px] border border-gray-500'>

          <p className={`${ActivePersonal || ActiveBusiness || ActiveOthers ? "hidden" : "w-full text-center font-semibold tracking-wide text-green-500"}`}>Click on the tab to select your Category.</p>
            
            {/* Personal Section */}
            {
              ActivePersonal && (
                <ul className='w-full flex flex-col-reverse m-auto gap-2 p-2' >
                {
                  PersonalTodos.length > 0 ? (
                    <>
                    {
                      PersonalTodos.map((item) =>(
                        <>
                        <Todolist key={item.id} Todo={item.todo} id={item.id}/>
                        </>
                      ) )
                    }
                    </>
                  ):
  
                  <li>Your Personal Todos is empty..!</li>
                }
              </ul>
              )
            }

            {/* Business Section */}

            {
              ActiveBusiness && (
                <ul className='w-full flex flex-col-reverse m-auto gap-2 p-2'>
                {
                  BusinessTodos.length > 0 ? (
                    <>
                    {
                      BusinessTodos.map((item) =>(
                        <>
                        <Todolist key={item.id} Todo={item.todo} id={item.id}/>
                        </>
                      ) )
                    }
                    </>
                  ):
  
                  <li>Your Business Todos is empty..!</li>
                }
              </ul>
              )
            }


            {/* Others Section */}

            {
              ActiveOthers && (
                <ul className='w-full flex flex-col-reverse m-auto gap-2 p-2'>
                {
                  OthersTodos.length > 0 ? (
                    <>
                    {
                      OthersTodos.map((item) =>(
                        <>
                        <Todolist key={item.id} Todo={item.todo} id={item.id}/>
                        </>
                      ) )
                    }
                    </>
                  ):
  
                  <li>Your Others Todos is empty..!</li>
                }
              </ul>
              )
            }

           
         
        </div>
    </div>
  )
}

export default Categories