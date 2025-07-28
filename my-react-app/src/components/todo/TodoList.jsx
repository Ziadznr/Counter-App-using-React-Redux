import React from 'react'

const TodoList = () => {
  return (
    <div className=' container-fluid m-2'>
        <div className=' row'>
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Task Name</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                            
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sample Task</td>
                            <td><button className='btn btn-warning'>Edit</button></td>
                            <td><button className='btn btn-danger'>Remove</button></td>
                        </tr>
                        {/* More tasks can be added here */}
                    </tbody>    
                </table>
            </div>
        </div>
    </div>
  )
}

export default TodoList