import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Employee from './Employee';

function App() {
  const [count, setCount] = useState(0)
  const addCount=()=>{
    setCount(count+1)
  }
  let emp = [{
    name:'Ganesh',
    age:21,

  },
  {
    name:'Arun',
    age:31,
    
  },
  {
    name:'Rajesh',
    age:42,
    
  }]
  return (
    <div className='App'>
      {
        emp.map((obj, index)=>
          (
            <Employee key={index} {...obj}></Employee>
          )
        )
      }
    </div>
  );
}

export default App;
