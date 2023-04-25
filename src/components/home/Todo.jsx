import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import style from "./todo.module.css";
const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;
  const handleRemove = (id) => {
    props.onRemoveItem(id);
  };
  return (
    <div className={style.todo}>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
      <button
        onClick={() => {
          handleRemove(id);
        }}
      >
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default Todo;
