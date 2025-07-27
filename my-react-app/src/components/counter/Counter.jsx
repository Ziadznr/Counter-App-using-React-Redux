import React, { useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment, setCustom } from '../../redux/state/counter/counterSlice';

const Counter = () => {

    const myNum=useRef()
    const count= useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


    return (
        <div className='card'>
            <div className='card-header bg-secondary'>
                <h4>My Counter App</h4>
            </div>
            <div className='card-body'>
                <h1 className='text-center'>{count}</h1>
                <div className='d-flex justify-content-between'>
                    <button onClick={()=>{dispatch(increment())}} className='btn btn-primary'>Increment</button>
                    <button onClick={()=>{dispatch(decrement())}} className='btn btn-danger'>Decrement</button>
                </div>
                <div className='text-center mt-3'>
                    <input ref={myNum} className=' form-control' type="number" />
                    <button onClick={()=>dispatch(setCustom(myNum.current.value))} className='btn btn-danger m-3'>Set Custom</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;