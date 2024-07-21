import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
export const Showlist = ({task ,handledelete ,handlechange , handletick}) =>{
    const buttonStyle = {
        color: 'white',
        backgroundColor: 'red',
        padding: '10px',
        borderRadius: '10px',
      };
      const mddbuttonStyle = {
        color: 'white',
        backgroundColor: 'red',
        padding: '5px',
        margen : '5px',
        borderRadius: '5px',
      };
      const mdbuttonStyle = {
        color: 'white',
        backgroundColor: 'green',
        padding: '5px',
        margen : '5px',
        borderRadius: '5px',
      };
      const box ={
        border : '1px',
        padding: '5px',
        margen : '5px',
        borderRadius: '5px',
      }
    const space = "--"
    return (
        <div>
            <ul>
            {task.map((cursor) => (
                <li key={cursor.id}>
                    <span style={cursor.checked?
                      {backgroundColor:"green"}
                      :{background:"white"}} >{cursor.content}</span>
                    <IoMdCheckmarkCircle style={mdbuttonStyle} onClick={()=>handletick(cursor)}/><span>  </span>
                    <MdDeleteForever style={mddbuttonStyle} onClick={() => handlechange(cursor)} />
                </li>
            ))}
            </ul><span></span>
            <button  onClick={handledelete} style={buttonStyle}>clear all</button>
        </div>
         
    );

}

