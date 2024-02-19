import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import {IoMdClose} from 'react-icons/io'

function App() {
  const [itemName, setItemName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [text, setText] = useState("");

  const [itemList, setItemList] = useState([]);
  async function addItem (event) {
    let cart = document.getElementById("cart");
    console.log(itemName)
    //itemList.push(<div key={itemName}>{itemName}: {price}: {description}</div>);
    let dv=<div key={itemName}>{itemName}: {price}: {description} <IoMdClose onClick={(e)=>deleteItem(e,itemList.length)}></IoMdClose> </div>;
   await setItemList([...itemList,dv])
   console.log('added '+itemList);
   // itemList.pop(0);
    //cart.append(newItem)
  }
  async function deleteItem(event,index){
   await itemList.splice(index,1);
    console.log(itemList);
    event.target.parentNode.remove();
    //e.target.parent
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <input value={text} onChange={handleTextChange}></input> */}
        <table> <tr>
          <td> <label>Item: </label></td>
          <td> <input name="itemName" value={itemName} onChange={e => setItemName(e.target.value)}></input></td>
          <td> <label>Price: </label></td>
          <td> <input name="price" value={price} onChange={e => setPrice(e.target.value)}></input></td>
          <td> <label>Description: </label></td>
          <td> <input name="description" value={description} onChange={e => setDescription(e.target.value)}></input></td>
        </tr>
          <tr>
            <td> <button style={{ backgroundColor: 'red', borderRadius: 20 }} onClick={addItem} >Add Item</button></td>
          </tr>
        </table>
        <ul id="cart" style={{listStyleType:'none'}}>
          { itemList.map(item => <li key={item}>{item}</li>)}
        </ul>
        {/* <h2>
          {text}
        </h2> */}
      </header>
    </div>
  );
}

export default App;
