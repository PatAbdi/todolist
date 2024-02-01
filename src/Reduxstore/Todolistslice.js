import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   Todolist: [],
  }
  
  export const Todolistslice = createSlice({
    name: "Todos",
    initialState,
        reducers:{
            AddTodos: (state, action) => 
            {
                state.Todolist.push(action.payload)
            },

            DeleteTodos: (state, action) =>
            {
                state.Todolist = state.Todolist.filter((item) => item.id !==action.payload)
            },

            RemoveTodos: (state) =>
            {
                state.Todolist =[]
            }
        }
    }
  )

  export const {AddTodos, DeleteTodos, RemoveTodos} = Todolistslice.actions;

  export default Todolistslice.reducer