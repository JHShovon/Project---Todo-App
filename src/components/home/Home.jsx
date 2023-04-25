import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import style from "./home.module.css";
const demoTodos = [
  {
    id: 1,
    title: "Hello World !",
    desc: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 2,
    title: "Hello Earth !",
    desc: "lorem ipsum dolor sit amet, consectetur",
  },
];

const Home = () => {
  const [todos, setTodos] = useState([]);
  // Add Todos
  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  // Remove Todos
  const handleRemoveTodos = (id) => {
    // console.log(id);
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };
  return (
    <div className={style.container}>
      <h1 style={{ color: "#fff", textAlign: "center", marginBottom: "30px" }}>
        Todo App
      </h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodos={handleRemoveTodos} />
    </div>
  );
};

export default Home;
