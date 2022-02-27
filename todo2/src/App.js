import React, { useContext } from 'react';
import { MainContext } from './Context';
import Todo from './Todo';
import './App.css';
import Modal from './Modal';
import Comple from './Comple';


function App() {
  const {search,setsrc,state}= useContext(MainContext);
  const chgsrc= (e)=>{
    setsrc(e.target.value)
  }
  return (
    <div>
      <div className='todo'>
      <h2>Notes</h2>
      <input type="search" className='src' placeholder='Search notes here' onChange={chgsrc} />
    </div>
    <Modal/>
    {/* <Todo/> */}
    </div>
  )
}

export default App;
