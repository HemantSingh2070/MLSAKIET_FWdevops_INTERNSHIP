import { useState } from "react";
import Todotask from "./Todotask";
import { v4 as uuid } from 'uuid';
function Todohead() {
    let [stask,setStask] = useState("");
    let [filtervalue ,setFiltervalue] = useState("");
    let [tarray,setTarray] = useState([]);
    let [tname,setTname] = useState("");
    let [priority,setPriority] = useState("Normal");
  
    // ! Passed a function to child for updating a prop value in parent
    let remover = (id) =>{
       setTarray(tarray.filter((item)=>{return !(item.tid==id)})); 
    }
    let display = tarray.map((value,index)=>
    <Todotask key={value.tid} tid={value.tid} tname={value.tname} priority={value.priority} index={index} rChange={remover}/>
    ).filter((item)=>{
    if(filtervalue != "") return item.props.priority == filtervalue;
    else return true;
    }).filter((item)=>{
        if(stask != "") return item.props.tname.includes(stask);
        else return true;
    });  
   
return(<>
<div className="container1">
<label htmlFor="Tasks">Task  : </label>
<input type="text" name="Tasks" value={tname} onChange={(e)=>setTname((prev)=>e.target.value)} /> 
<button type="button" onClick={()=>{setStask(tname)}}>Search</button>
<button type="button" onClick={()=>{setTarray((prev)=> [...prev,{tname,priority,tid:uuid()}]);setTname("")}}>Add</button>
<label htmlFor="imp">Priority : </label>
<select name="imp" id="imp" onChange={(e)=>setPriority(e.target.value)}>
    <option value="Normal">Normal</option>
    <option value="College">College</option>
    <option value="Club">Club</option>
</select>

<select name="filt" id="filt" onChange={(e)=>setFiltervalue(e.target.value)}>
    <option value="">Filter</option>
    <option value="Normal">Normal</option>
    <option value="College">College</option>
    <option value="Club">Club</option>
</select>
<button type="button" onClick={()=>{setTarray(new Array())}}>Remove All</button>
<span className="ttask">Total Tasks : {tarray.length}</span>
</div>
<br />
<table>
<thead> 
{display}
</thead>
</table>

</>
)
}

export default Todohead;