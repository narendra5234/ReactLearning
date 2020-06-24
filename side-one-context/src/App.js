import React, {useState, Fragment} from 'react';
import Provider from './provider'
import Context from "./context"

const Agents = () => {
  return <AgentOne/>
}
const App = () =>{
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents/>
      </Provider>
    </div>
  )
}

const GrandChild = props => (
  <div>
    <h3>GrandChild:</h3>
    <Child brand={props.brand}/>
  </div>
)

const Child = props => (
  <div>
    <h2>Child:{props.brand}</h2>
  </div>
)
const Problem = () =>{
const [brandname] = useState("Amazon")
return(
  <div>
    <h1>Hello</h1>
    <GrandChild brand={brandname}/>
  </div>
  )
}

export default App;
