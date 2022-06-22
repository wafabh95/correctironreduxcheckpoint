import React,{useState,useId} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo } from "./Actions/todoAction";
import { removeTodo } from "./Actions/todoAction";
import { EditTodo } from "./Actions/todoAction";
import { UpdateTodo } from "./Actions/todoAction";
import { changeTodo } from "./Actions/todoAction";
import{Modal,Form,Button} from 'react-bootstrap'

const Todo = () => {
    const todo = useSelector(state => state.todoReducer)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(todo)
    const [input, setInput] = useState(
        {
        newtext:"",
        text:"",
        complete:false
    }
        
    
    )
    const dispatch = useDispatch()
    
   const  handleChange = (e) => {
        setInput({ [e.target.name]: e.target.value });
      };
console.log(input.newtext)
  return (
    <div>
        <div className="todoapp">
          <h1>TO DO APP</h1>
          <div className="section">
            <input
              className="input"
              type="text"
              placeholder="Enter new task"
              onChange={handleChange}
              name="text"
            />
            <button type="button" className="add" onClick={()=>{dispatch(addTodo(input))}}>
              Add
            </button>
            <div>
            {todo.map(el=>
            el.id!=="1"&&el.text!==""?
                <div>
                    {el.complete===true?<p style={{  textDecoration: "line-through"}}>{el.text}</p>:<p>{el.text}</p>}
                
                <button  onClick={()=>{dispatch(removeTodo(el.id))}}>Delete</button>
                <button  onClick={()=>{dispatch(changeTodo(el.id))}}>complete</button>

                <button  onClick={()=>
                {
                    dispatch(EditTodo(el.id));
                    handleShow();
                    }
                    }>edit</button>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{el.id}</Form.Label>
              <Form.Control
                type="email"
                name="newtext"
                placeholder="name@example.com"
                autoFocus
                onChange={handleChange}
               
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={()=>dispatch(EditTodo(el.id,input.newtext))}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
               </div>:null
                )}
          
            </div>
            
          </div>
        </div>
        
      </div>
  )
}

export default Todo