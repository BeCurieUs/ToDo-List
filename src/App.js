import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    mainList : [],
    mainInput : "",
  }

  updateListItems = (e) => {
    this.setState({
      mainInput : e.target.value,
    })
  }

  AddNewItem = (e) => {
    e.preventDefault();
    this.setState({
      mainList : [...this.state.mainList,this.state.mainInput],
      mainInput : "",
    })
  }

  printList = ()=>{
    return this.state.mainList.map( (listItem,index) => {
      return <li key = {index}>{listItem}<button onClick={()=>this.deleteItem(index)}>X</button></li>
    })
  }

  deleteItem = (index) => {
    const tempArray = this.state.mainList.slice();
    tempArray.splice(index,1);
    this.setState({
      mainList : tempArray
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {this.printList()}
          </ul>
          <form onSubmit={this.AddNewItem}>
            <input name="mainInputField" value={this.state.mainInput} onChange={this.updateListItems} />
            <button>Add Item</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
