import React, { useState } from "react";
import { Showlist } from "./showdoto";
// {handlebutton , inputvalue}
export const Todoform =()=>{
    const [inputvalue , setinputvalue] = useState({})
    const [task , Settask] = useState([])

    const handleinputchange = (value)=>{
        setinputvalue({id:value , content:value , checked: false})
    }
    const handlechange =(value)=>{
        const arr = task.filter((val) => val !== value)
        Settask(arr)
    }
    const handletick=(value)=>{
        value.checked = !value.checked
    }
    const handlebutton =(event) =>{
        event.preventDefault()
        const {id , content ,checked } = inputvalue
        if(!inputvalue.content){  // for empty validation
            console.log("Epmty input string")
            setinputvalue({})
            return
        }
        const matchvalue = task.find(
            (crtask)=> crtask.content == content
        );
        // console.log(matchvalue)
        if(matchvalue==true){
            setinputvalue({})
        }
        else {
            console.log("going to enter ")
            Settask((prev)=>[...prev , {id, content , checked}])
            return ;
        }
        // if(task.includes(inputvalue)){
        //     alert("This is already exist plz don't add it please enter anothor")
        //     setinputvalue('')
        //     return
        // }

       
        // console.log(task)
    }
    const handledelete = ()=>{
        Settask([])        
    }

    return(
        <section>
            <section>
                <form onSubmit={handlebutton}>
                    <input type="text" value = {inputvalue.content} onChange={(e)=>handleinputchange(e.target.value)} />
                    <button>submit</button>
                </form>
            </section>
            <Showlist task={task} handledelete={handledelete}
             handlechange={handlechange}
              handletick={handletick}/>
        </section>
        
    )
}