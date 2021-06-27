import React from 'react';
import './index.css'
import { useDispatch ,useSelector } from 'react-redux';
import {numIncrement,numDecrement} from './action/index'
const App =()=>
{
  const mystate=useSelector((state)=>state.changeNumber)
  const dispatch =useDispatch();
  return(
    <>
  
    <div className="container">
      <div >
      <h1 className="heading_div">INCREMENT/DECREMENT NUMBER USING REDUX</h1>
      </div>

      <div className="inner_div">
<button onClick={()=>dispatch(numDecrement())}>-</button>
<b><input  value={mystate}/></b>
<button onClick={()=>dispatch(numIncrement())}>+</button>
      </div>
    </div>
    </>
  )

}
export default App;