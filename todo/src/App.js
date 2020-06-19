import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state={
    value: '',
    todos: [],
    isAll: true,
    isActive: false,
    isCompleted: false,
    markAllComplete: false
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
      todos:[...prevState.todos, {"id":id, "title":title, "completed": false, "isEditable": false}],
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


  setIsCompleted = () => {
    this.setState({
      isAll: false,
      isActive: false,
      isCompleted: true
    })
  }

  editTodo = (event,id) => {
    const elementsIndex=this.state.todos.findIndex(element=>element.id===id)
    const item = event.target.value
    let newArray = [...this.state.todos]
    newArray[elementsIndex] = {...newArray[elementsIndex], title:item, isEditable: false}
    this.setState({
      todos:newArray
    })
  }
  changeEditMode = (id)=>{
    const elementsIndex=this.state.todos.findIndex(element=>element.id===id)
    let newArray = [...this.state.todos]
    newArray[elementsIndex] = {...newArray[elementsIndex], isEditable:!newArray[elementsIndex].isEditable}   
    this.setState({
      todos:newArray
    }) 
  }
  markAllComplete = () => {
    this.setState({
      markAllComplete: !this.state.markAllComplete
    })
    const newArray = [...this.state.todos];
    for (let i = 0; i < newArray.length; i++) {
      newArray[i].completed=!this.state.markAllComplete
      }
    this.setState({
      todos:newArray
    })
    };

  removeItems = () =>{
    const newArray = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].completed!==true)
      {
        newArray.push(this.state.todos[i])
      }
  }
    this.setState({
      todos:newArray
    })
  }

  isCompletedTodosAvailable = () =>{
    console.log("aaaaaaaaaa")
    const completedTodos = this.state.todos.map((todo)=>{
      if (todo.completed===true){
        return todo
      }
    })
    console.log(completedTodos.length)
    return (completedTodos.length!==0)?(true):(false)
  }
  render(){
    const allTodos = this.state.todos.map((eachItem)=>
          <div>
            <input type="checkbox" checked = {eachItem.completed} onClick={()=>this.completeItem(eachItem.id)}/>
            {eachItem.isEditable?(<input type="text"  defaultValue={eachItem.title} onBlur={(event)=>this.editTodo(event,eachItem.id)}/>):(<span onDoubleClick={()=>this.changeEditMode(eachItem.id)}>{eachItem.title}</span>)}
            <button onClick={()=>this.removeItem(eachItem.id)}/>
          </div>)

    const activeTodos = this.state.todos.map((eachItem)=> {
      if (eachItem.completed===false){
        return <div>
        <input type="checkbox" checked = {eachItem.completed} onClick={()=>this.completeItem(eachItem.id)}/>
        {eachItem.isEditable?(<input type="text"  defaultValue={eachItem.title} onBlur={(event)=>this.editTodo(event,eachItem.id)}/>):(<span onDoubleClick={()=>this.changeEditMode(eachItem.id)}>{eachItem.title}</span>)}
        <button onClick={()=>this.removeItem(eachItem.id)}/>
              </div>}})

    const completedTodos = this.state.todos.map((eachItem)=> {
        if (eachItem.completed===true){
         return <div>
         <input type="checkbox" checked = {eachItem.completed} onClick={()=>this.completeItem(eachItem.id)}/>
         {eachItem.isEditable?(<input type="text"  defaultValue={eachItem.title} onBlur={(event)=>this.editTodo(event,eachItem.id)}/>):(<span onDoubleClick={()=>this.changeEditMode(eachItem.id)}>{eachItem.title}</span>)}
         <button onClick={()=>this.removeItem(eachItem.id)}/>
               </div>}})

  return (
    <div>
        <h1 className="Todo-header">todos</h1>
        <div className = "Todo">
        <div>
          <input type="checkbox" className="MarkAllComplete" onClick={this.markAllComplete}/><span>
          <input className="Input-box" placeholder="What needs to be done?" value={this.state.value}
           onKeyPress={this.pushItems} onChange={this.inputText}/></span>
           {this.state.isAll?(allTodos):(this.state.isActive?(activeTodos):(completedTodos))}
        </div>
        <div class="Buttons">
           {this.state.todos.length!==0&&(
          <span >
            <span className="Left-items">{(this.state.todos.filter(todo=>todo.completed === false).length)} items left</span>
            <button className="Status-button" onClick={this.setIsAll} autofocus>All</button>
            <button className="Status-button" onClick={this.setIsActive}>Active</button>
            <button className="Status-button" onClick={this.setIsCompleted}>Completed</button>
            {(this.state.todos.filter(todo => todo.completed === true).length!==0)&&(<button className="Clear-button"  onClick={this.removeItems}>Clear Completed</button>)}
          </span>)}
        </div>

        </div>
        <footer className="Footer">
          <p>Double Click To Edit a Todo</p>
          <p>Created By<a href="https://github.com/narendra5234"> Narendra</a></p>
        </footer>
    </div>
  );
  }
}

export default App;
