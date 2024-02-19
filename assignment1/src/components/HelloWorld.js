import React, { useState } from "react";
import { PrintList } from "./PrintList";
import StyleSheet from "react";

//const arr=[];

const HelloWorld = () => {

    const [items, setItems] = useState([]);
    //arr.push('murad')
    const printName = (event) => {
        let name = document.getElementById("name");
        //console.log(name.value);
        //setArr([...arr,name])
        //let list = <li>{name.value}</li>;
        //document.getElementById("nameList").append(list);
        setItems([...items, name.value]);
        console.log(items)

    }

    return (
        <>
            <h1>Hello World</h1>
            <input id="name" placeholder="write  you name here" ></input>
            <button onClick={printName} style={{ borderRadius: 20, fontSize: 20 }}>Add </button>
            {/* <PrintList names={arr}></PrintList>
        {arr.map(element=><li>{element}</li>)} */}
            <ul id="nameList"></ul>{
              items && items.length>0 && items.map((element,index) => <li key={index}>{element}</li>)
            }

          
        </>
    );
}
export default HelloWorld;