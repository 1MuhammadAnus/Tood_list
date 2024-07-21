import React, { useState , useEffect } from "react";

export const Fundate=({handleDateTimeChange })=>{
    // const [timee , settimee] = useState()
    const now = new Date()
    const time = now.toLocaleTimeString()
    const date = now.toLocaleDateString()
    // return(
        useEffect(() => {
            const interval = setInterval(() => {
                handleDateTimeChange(`Date is ${date} and Time : ${time}`)
            }, 1000);
            return () => clearInterval(interval);
          }, [handleDateTimeChange]) 
    // )
}