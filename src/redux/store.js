/*
    store oluşturma:
    1. redux kütüphanesinden createStore ve combineReducers import edilir
    2. store içerinde tutlucak verile kategorize edilir ve herbiri için reducer oluşturulur
    3. oluşturlan reducerlar combineReducers yardımıyla birleştirilir.
    4. create store argüman olarak birleşen reducerlar verilir
    5. store export edilir
*/
import {createStore, combineReducers} from 'redux'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
     todoState : todoReducer
})
const store =  createStore (rootReducer)
export default store 