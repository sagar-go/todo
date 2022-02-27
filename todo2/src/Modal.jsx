import react, {useContext, useEffect, useState}  from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MainContext } from './Context';
import Comple from './Comple';
import Todo from './Todo';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '57%',
  height: '54%',
  bgcolor: '#282C34',
  border: '2px solid #000',
  boxShadow: 0,
  p: 2,
};



export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [val,setval]= useState(true)
  
    const off =()=>{
        setOpen(false);
    }
  const{search,setsearch,sub,setsub} = useContext(MainContext)

const savelocal =(items)=>{
  localStorage.setItem('todo-list', JSON.stringify(items));
}
  const change= (e)=>{
    setsearch(e.target.value);
  }

  const click= ()=>{
    
      if (search.length>0){ 
        
          let data = { id: Math.floor(Math.random()*1000), name:search, com:false}
          setsub([...sub, data]);
          setsearch("")
          setOpen(false);
              }
          else{
              setsearch("");
    }
    // savelocal(sub);
  }

if(val){
  return (
    <div>
      <button onClick={handleOpen} className="but">Create Task</button>
      <button onClick={()=>setval(!val)} className="but">All Notes</button>

      <Modal
        open={open}
        onClose={handleClose}
        className="modal"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="note">
               
               <textarea name="" id="" value={search} cols="30" rows="10" placeholder="Add your note here...." onChange={change}></textarea>
            </div>
            <div className="note">
            <button onClick={click}>Add</button>
            <button onClick={off}>Close</button>
            </div>
          </Typography>
        </Box>
      </Modal>
      <Todo/>
    </div>
  )
} else {
  return (
    <>
     <button onClick={handleOpen} className="but">Create Task</button>
      <button onClick={()=>setval(!val)} className="but">Completed</button>

    <Modal
        open={open}
        onClose={handleClose}
        className="modal"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="note">
               
               <textarea name="" id="" value={search} cols="30" rows="10" placeholder="Add your note here...." onChange={change}></textarea>
            </div>
            <div className="note">
            <button onClick={click}>Add</button>
            <button onClick={off}>Close</button>
            </div>
          </Typography>
        
        </Box>
      </Modal>

  <Comple/>
  </> 
  )
}


}
