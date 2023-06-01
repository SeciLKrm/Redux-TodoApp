/* 
    reducer yazma adımları:
    1. initialState > başlangıçStatei yazılır
    2- Bir FONKSİYON olan reducer yazılır:
        a- state ve action parametleri tanımlanır
    3- reducer export edilir
*/
const initialState= {
    todos :[],
}

const todoReducer =(state=initialState, action)=>{
switch (action.type){
     // ekleme aksiyonu dispatch edilerse burası çalışır
    case 'ADD_TODO':
    return {
        todos :[...state.todos, action.payload]
    }

    case 'DELETE_TODO':
        const filteredTodos = state.todos.filter((item)=> item.id !== action.payload)
return {
    todos : filteredTodos
}
    
case 'EDIT_TODO':

/* 
        splice > diziyi güncellemeye yarayan method
        splice istekleri 
          1. dizideki elmanın sırası
          2. kaçta eleman silicem
          3. silinen yerine ne gelecek

    
      */
    //    yapılması gerek : güncellencek dizinin bir kopyasını oluştur 
    const cloneTodos = state.todos
    // dizideki elemanın sırasını bulma
    const index = state.todos.findIndex((item)=> item.id === action.payload)

       // elemanı güncelleme
   const updatedItem = { ...state.todos[index], isDone: !state.todos[index].isDone}
      // dizinin kopyası üzerinde güncelleme yapar
   cloneTodos.splice(index,1,updatedItem)
   return{
    todos :cloneTodos
   }

   case 'CLEAR':
    return {
        todos : []
    }

    case 'SET_TODOS':
        return {
            todos : action.payload 
        }
    default:
return state
}



}
export default todoReducer