import {ADD_TODO} from "./Types"
import {REMOVE_TODO} from "./Types"
import {CHANGE_TODO , UPDATE_TODO} from "./Types"
import {EDIT_TODO} from "./Types"
import { v4 as uuidv4 } from 'uuid';
export const addTodo=(newTodo)=>{
    return{
    type: ADD_TODO,
    payload :{ ...newTodo,id:uuidv4(),complete:false}
    }
}
export const removeTodo=(id)=>{
    return{
    type: REMOVE_TODO,
    payload : id
    }
}
export const changeTodo=(id)=>{
    return{
    type: CHANGE_TODO,
    payload : id
    }
}
export const EditTodo=(id,text)=>{
    return{
    type: EDIT_TODO,
    payload : {id,text}
    }
}

