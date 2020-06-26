import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList.js";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
