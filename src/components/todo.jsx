import React, { useEffect } from "react";
import { useState } from "react";
import { Fundate } from "./data";
import { Todoform } from "./todoform";

export const Todo = ()=>{
    const [time, uptime] = useState()
    const handleDateTimeChange = (timee)=>{
        uptime(timee)
    }
    return(
        <>
            <h1>Todo List</h1>
            <Fundate handleDateTimeChange={handleDateTimeChange}/>{time}
            <Todoform /> 
        </>
    )

}