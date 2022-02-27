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


function Comple() {
  const {
    search,
    setsearch,
    sub,id,setid,
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
    ed,
    seted,setstate,setval
  } = useContext(MainContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const item= sub.filter((e)=>{
    return e.com===true
  });
  console.log("item is",item);
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

if (item.length===0){
  return ( <h2 className="comtext"> You haven't completed any tasks yet...</h2>)
}
else {
  return (
    <div className="con2">
      { item.filter((e) => {
              if (src === "") {
                return e;
              } else if (e.name.toLowerCase().includes(src.toLowerCase())) {
                return e.name;
              }
            }).map((e,idx) => (
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
          {/* <Button
            variant="contained"
            color="error"
            onClick={() => onedit(e)}
          >
           <h3> <FaEdit className="icons"/> </h3>
          </Button> */}
        </div> 
      </div>
      ))}
    </div>
  )}
}

export default Comple;
