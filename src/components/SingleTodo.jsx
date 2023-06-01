import React from 'react'
import {useDispatch } from 'react-redux'
import axios from 'axios'
 
const SingleTodo = ( {todo} ) => {
const dispatch = useDispatch()

const handleDelete =()=>{
   
   
    axios.delete(` http://localhost:3030/todos/${todo.id}`).then(()=>
    dispatch({
        type : 'DELETE_TODO',
        payload : todo.id
     })
    )
   }
   
// TAMAMLA BUTONUNA TIKLANIRSA ÇALIŞIR
const handleEdit =()=>{
     // elemanı güncelleme
    const updatedTodo = {...todo, isDone : !todo.isDone}
     // veritabanını günceller
    axios.put(`  http://localhost:3030/todos/${todo.id}`, updatedTodo).then(()=>{
         // storeu günceller
        dispatch({
            type : 'EDIT_TODO',
            payload: todo.id
        })
    })
    
}

  return (
 <div className="card bg-dark border-secondary text-light p-3 " >
  <div classNameName="card-body">
    <h5 className="card-title text-warning text-center mb-3 fs-4">{todo.text} </h5>
    <h6 className="card-subtitle my-2 text-body-primary ">
         
   
    {todo.isDone ? 'Tamamlandı' : 'Devam Ediyor'}
    </h6>
    <p className="card-text">{new Date (todo.date).toLocaleDateString()} </p>
   <div className='d-flex justify-content-between px-5 '>
   <a  className="card-link" onClick={handleEdit} >
       {todo.isDone ? 'Geri Al' : 'Tamamla'}
</a>
 <a  className="card-link" onClick={handleDelete} style={{cursor:'pointer'}}  >Sil</a>
   </div>
   
   
   
  </div>
</div>


  )
}

export default SingleTodo