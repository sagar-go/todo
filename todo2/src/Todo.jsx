import React, { useContext, useState,useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import { MainContext } from "./Context";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Dummy from "./Dummy";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "57%",
  height: "54%",
  bgcolor: "#2c2c54",
  border: "2px solid #000",
  boxShadow: 0,
  p: 2,
};

function Todo() {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
   
  const [ab, setab] = useState("ab");

  const {
    search,
    setsearch,
    sub,
    setsub,
    card,
    open,
    setOpen,
    src,
    done,val,
    setdone,
    valid,
    setvalid,
    fake,
    setfake,
    ed,id,setid,
    seted,setstate,setval
  } = useContext(MainContext);
 

//   useEffect(()=>{

//     const item = JSON.parse(localStorage.getItem('todo-list'));
//     setsub(item);
//  },[])

  const off = () => {
    setOpen(false);
  };
  const change = (e) => {
    setsearch(e.target.value);
  };

  const remove = (id) => {

    setsub(
      sub.filter((e) => {
        if (e.id !== id) {
          return { e };
        }
      })
    );
  };

  const complete = (id) => {
    setsub(
      sub.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            com: !e.com,
          };
        }
        return e;
      })
    );
  };





  const onedit = (a) => {
    handleOpen();
    setsearch(a.name)
    setid(a.id)
  };

  const onedit2 = (a) => {
      setsub(sub.map((e)=>{
        if (e.id===id) {
            return {...e, name:search}
        }else{
            return e
        }
      }))
    handleClose();
  };

  console.log("sub", sub);

  if (sub.length===0) {
    return (
      <>
      <Dummy/>
      </>
    );
  } else {
    return (
      <>

      {/* <button onClick={handleOpen} className="but">Create Task</button>
      <button onClick={()=>setstate("all")} className="but">AllWWWWWWWW</button>
      <button onClick={()=>setval(!val)} className="but">Completed</button>
      <button  className="but">Pending</button> */}

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
            <button onClick={handleOpen}>Add</button>
            <button onClick={off}>Close</button>
            </div>
          </Typography>
        </Box>
      </Modal>
      
        <div className="container">
          {sub
            .filter((e) => {
              if (src === "") {
                return e;
              } else if (e.name.toLowerCase().includes(src.toLowerCase())) {
                return e.name;
              }
            })
            .map((e, idx) => (
              <div className={e.com ? " green" : "main"} key={idx}>
                <h1>{e.name}</h1>
                <h4>{e.status}</h4>
                <div className="buttons">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => remove(e.id)}
                  >
                    <h3> <MdDelete className="icons"/> </h3>
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => complete(e.id)}
                  >
                    {e.com ? "Completed" : "Pending"}
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => onedit(e)}
                  >
                   <h3> <FaEdit className="icons"/> </h3>
                  </Button>
                </div> 
              </div>
            ))}
        </div>



        <Modal open={open} onClose={handleClose} className="modal">
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      <div className="note">
                        <textarea
                          name=""
                          id=""
                          value={search}
                          cols="30"
                          rows="10"
                          placeholder="Edit your note and then click Save"
                          onChange={change}
                        ></textarea>
                      </div>
                      <div className="note">
                        <button onClick={() => onedit2()}>Edit</button>
                        <button onClick={off}>Close</button>
                      </div>
                    </Typography>
                  </Box>
                </Modal>

      </>
    );
  }}

export default Todo;
