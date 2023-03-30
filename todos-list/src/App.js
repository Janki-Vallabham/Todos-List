import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, {useState} from "react";

function App() {
const onDelete  = (todo)=>{
  console.log("I am an onDelete",todo);
  // Deleting this way does not work in react
  // let index = todos.indexOf(todo);
  // todos.splice(index, 1);
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
}
  
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the ghat"
    },
  ]);
  
  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
    
  );
}

export default App;
