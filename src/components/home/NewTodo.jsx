import React, { useState } from "react";
import style from "./newtodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return {
        ...oldTodo,
        [name]: event.target.value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };
  return (
    <form action="" onSubmit={handleSubmit} className={style.form}>
      <div>
        <label htmlFor="title">Todo Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={title}
          required
        />
      </div>
      <div>
        <label htmlFor="desc">Todo Description</label>
        <textarea
          id="desc"
          name="desc"
          onChange={handleChange}
          value={desc}
          required
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
