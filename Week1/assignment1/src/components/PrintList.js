import React from "react";

export const PrintList=({names})=>{
     const arr=[];
     console.log(names)
    return(
        <>
        <h3>Names:</h3>
         <div>{names}</div> 
        <div>
            
        {
        names && names.map(element => <li> {element} </li>)
     
        }
        </div>
        </>
    );
}