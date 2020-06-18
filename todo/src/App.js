import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state={
    value: '',
    todos: [ ],
    isAll: true,
    isActive: false,
    isCompleted: false
  }

  inputText = (event) => {
    const title = event.target.value
    this.setState({
      value: title
    })
  }
  completeItem = id => {
    const elementsIndex=this.state.todos.findIndex(element=>element.id===id)
    let newArray = [...this.state.todos]
    newArray[elementsIndex] = {...newArray[elementsIndex], completed:!newArray[elementsIndex].completed}
    this.setState({
      todos:newArray
    })
  };
  removeItem = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    })
  }

  pushItems = (e) => {
    if (e.key === 'Enter') {
      const title = e.target.value
      const id=(this.state.todos.length===0)?1:this.state.todos.slice(-1)[0].id+1
      this.setState(prevState=>({
      todos:[...prevState.todos, {"id":id, "title":title, "completed": false}],
      value:''
    }))
    e.preventDefault();  
  }
  }

  setIsAll = () =>{
    this.setState({
      isAll: true,
      isActive: false,
      isCompleted: false
    })
  }

  setIsActive = () =>{
    this.setState({
      isAll: false,
      isActive: true,
      isCompleted: false
    })
  }


  setIsCompleted = () =>{
    this.setState({
      isAll: false,
      isActive: false,
      isCompleted: true
    })
  }

  render(){
  const allTodos=(
    this.state.todos.map((eachItem)=>
      <div>
        <li key={eachItem.id}><input type="checkbox" checked = {eachItem.completed} onClick={()=>this.completeItem(eachItem.id)}/>{eachItem.title}<input type="checkbox" onClick={()=>this.removeItem(eachItem.id)}/></li>
      </div>))
  const activeTodos = 
    this.state.todos.map((eachItem)=> {
      if (eachItem.completed===false){
        return <div>
          {console.log(eachItem.completed)}
        <li key={eachItem.id}><input type="checkbox" checked = {eachItem.completed} onClick={()=>this.completeItem(eachItem.id)}/>{eachItem.title}<input type="checkbox" onClick={()=>this.removeItem(eachItem.id)}/></li>
              </div>}})
  const completedTodos = 
    this.state.todos.map((eachItem)=> {
       if (eachItem.completed===true){
        return <div>
        <li key={eachItem.id}><input type="checkbox" checked = {eachItem.completed} onClick={()=>this.completeItem(eachItem.id)}/>{eachItem.title}<input type="checkbox" onClick={()=>this.removeItem(eachItem.id)}/></li>
              </div>}})
  return (
    <div>
        <h1 className="Todo-header">todos</h1>
        <div>
          <input className="Input-box" placeholder="What needs to be done?" value={this.state.value}
           onKeyPress={this.pushItems} onChange={this.inputText}/>
           {this.state.isAll?(allTodos):(this.state.isActive?(activeTodos):(completedTodos))}
        </div>
        <div>
           {this.state.todos.length!==0?(
          <span>
            <button className="Status-button" defaultcheckedtrue="true" onClick={this.setIsAll}>All</button>
            <button className="Status-button" onClick={this.setIsActive}>Active</button>
            <button className="Status-button" onClick={this.setIsCompleted}>Completed</button>
          </span>):(<div/>)}

        </div>
    </div>
  );
  }
}

export default App;
