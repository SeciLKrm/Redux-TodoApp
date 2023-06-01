import React from 'react'
import { useState} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const AddForm = () => {
    const dispatch = useDispatch()
    const[text,setText]=useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(text)

 // yeni bir todo objesi oluşturma
    const newTodo = {
            id: new Date().getTime(),
            text,
            isDone: false,
            date: new Date()
 }

  // oluşan objeyi apiye gönderme
   axios.post(`  http://localhost:3030/todos`,newTodo).then(()=>{
    dispatch({
        type:'ADD_TODO',
        payload:newTodo,
    })
   })
   
   
   
   

 // formu temizleme
    setText('')
}
      return (
    <form onSubmit={handleSubmit}
     className='d-flex container py-5  '>

<input type="text" className='form-control bg-dark border-secondary text-light '
value={text}
onChange={(e)=>setText(e.target.value)}  />

<button className='btn btn-warning text-light ' >Ekle</button>

    </form>
  )
}

export default AddForm