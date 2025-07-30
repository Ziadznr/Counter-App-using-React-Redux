import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/state/todo/todoSlice';


const CreateTodo = () => {

  const dispatch= useDispatch();
  const taskInput=useRef();

  return (
    <div className='container-fluid'>
        <div className=' row'>
            <div className='col-md-10 '>
                <input ref={taskInput} placeholder='Task Name' type="text" className=' form-control' />
            </div>
            <div className='col-md-2'>
                <button onClick={()=>dispatch(addTodo(taskInput.current.value))} className='btn btn-primary'>Add Task</button>
            </div>
        </div>
    </div>
  )
}

export default CreateTodo