
import {useEffect} from "react";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
import axios from "axios";
import { useDispatch} from 'react-redux'


function App() {
const dispatch = useDispatch()
  // bileşen ekran basıldığı anda çalışır
  useEffect=(()=>{
axios.get(`http://localhost:3030/todos`)
  // apiden gelen cevap olumluysa bize gelen diziyi storea aktar
.then((res)=>
dispatch({
 type : 'SET_TODOS', 
 payload: res.data 
})
)
  },[])
  return (
    <div className="App ">
     
     
     <AddForm/>
     <ListTodos />
     
  </div>
  );
}

export default App;
