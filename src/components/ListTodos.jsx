import React from 'react'
import {useSelector} from 'react-redux'
import SingleTodo from './SingleTodo'
import {useDispatch} from 'react-redux'
import axios from 'axios'

const ListTodos = () => {
    const dispatch = useDispatch()
    const {todoState} = useSelector ((state)=> state)

    const handleClear =()=>{
        todoState.todos.map((deletetodo)=>{
            axios.delete(`http://localhost:3030/todos/${deletetodo.id}`)
            })
    
    
            dispatch ({
                type : 'CLEAR',
            })
        }
   
  return (
    <div className='text-light   p-3 '>
        <div className=' container d-flex justify-content-start mb-3 '>
            {todoState.todos.length > 0 ? (
                <button className='btn text-light' style={{'background-color': 'black'}} onClick={handleClear}>Tümünü Sil</button>
            ) : ('Liste Boş')}
        </div>
      
      <div className=' justify-content-center  row-cols-3 row gap-4 p-3'>
      {
      todoState.todos.map((todo)=>(
          <SingleTodo todo={todo} />
      )
      )
  }
  
      </div>
      
      
      
      
      
    </div>
  )
}

export default ListTodos