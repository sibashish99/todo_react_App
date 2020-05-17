import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }
 updateInput(key,value){
   //update react state
   this.setState({
      [key]:value
   });
 }
 addItem(){
   //create item with unique id
  const newItem={
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
  };

  //copy of current list of items
  const list=[...this.state.list];

  //add new item to lists
  list.push(newItem);

  //update

  this.setState({
    list,
    newItem:""
  });
 
 }
 deleteItem(){
   //copy current list
   const list={...this.state.list};
   //filter item
   const updateedList= list.filter(item => item.id !== id);

   this.setState({list:updateedList});
 }

 render() {
   return (
     <div className="App">
       <div>
         Add a Item...
         <br/>
         <input 
          type="text"
          placeholder="Type item here..."
          value={this.state.newItem}
          onChange={e => this.updateInput("newitem", e.target.value)}
         />
         <button onClick={() => this.addItem()}>Add</button>
         <br />

         <ul>
           {
             this.state.list.map(item =>{
               return(
                 <li key={item.id}>
                    {item.value}
                    <button onClick={() => this.deleteItem(item.id)}>X</button>
                 </li>
               )
             })
           }
         </ul>
       </div>
     </div>
   );
 }
}
export default App;
