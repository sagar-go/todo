import React, { createContext, useState } from 'react'



export const MainContext = createContext();
function Context({children}) {
  const [open, setOpen] = useState(false);
const[search,setsearch] = useState([]);
const[src,setsrc] = useState("");
const[sub,setsub]= useState([]);
const [card,setcard]=useState([])
const [done,setdone] = useState(false);
const [valid,setvalid] = useState([]);
const [fake, setfake] = useState([]);
const[ed,seted] =useState("");
const[state,setstate]= useState("all");
let [id,setid] =useState(null);

  return (
    <div>
      <MainContext.Provider value={{search,setsearch,sub,setsub,card,setcard,open,setOpen,src,setsrc,done,setdone,valid,setvalid,fake,setfake,ed,seted,state,setstate,id,setid}}>
        {children}
      </MainContext.Provider>
    </div>
  )
}

export default Context

