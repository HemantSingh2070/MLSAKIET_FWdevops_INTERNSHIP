import { useState } from "react";
function Todotask({tid,tname,priority,index,rChange}){
    let [ptname,setPtname] = useState(tname);
    let [editor,setEditor] = useState(true);
    let [status,setStatus] = useState(false);
    let edit =()=>{
        setEditor(!editor);
    }
    let rch =()=>{
        rChange(tid);
    }
    return (
        <tr>
        <td><span>{index+1}</span></td>
        <td><input type="text" className={priority} value={ptname} onChange={(e)=>{setPtname(e.target.value);}} readOnly={editor} size={15}/></td>
        <td><span>{priority}</span></td>
        <td><button type="button" onClick={()=>{setStatus(!status)}}>{status?"Completed":"Not Completed"}</button></td>
        <td><button type="button" id="edit" onClick={edit} >{editor ?"Edit":"Save"}</button></td>
        <td><button type="button" id="remove" onClick={rch}>Remove</button></td>
        </tr>
        )
}
export default Todotask;