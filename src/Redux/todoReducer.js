
import { ADD_TODO } from '../Actions/Types';
import { REMOVE_TODO } from '../Actions/Types';
import { CHANGE_TODO } from '../Actions/Types';
import { EDIT_TODO, UPDATE_TODO } from '../Actions/Types';

const todo=[
    {
    id:"1",
    text:"first to do ",
    complete:false,
    
   }
]
const TodosReducer = ( state =todo , action) => {
    switch(action.type){
        case(ADD_TODO) : 
        return state.concat(action.payload);



        case(REMOVE_TODO) : 
        return state.filter(el => el.id !== action.payload);



        case(CHANGE_TODO) :
        return state.map(el=> el.id== action.payload?{...el, complete:!el.complete} :el );



        case(EDIT_TODO) :
        return state.map(el=> el.id== action.payload.id?{...el, edit:!el.edit , text : action.payload.text} :el )


       


        default : return state ;
    }
}
export default TodosReducer;