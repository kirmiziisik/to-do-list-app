import React, { useEffect, useRef, useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const List = ({ list, setList, editItem, setEditItem }) => {
  const completeTask = (id) => {
    const newList = [...list];
    const item = newList.find((item) => item.id === id);
    item.completed = !item.completed;
    setList(newList);
  };

  const deleteTask = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newList);
  };

  const editTask = (id) => {
    const selectedItem = list.filter((item) => item.id === id);
    setEditItem(...selectedItem);
    console.log(editItem);
  };

  return (
    <section>
      {list.map((item) => {
        const { name, id, completed } = item;
        return (
          <div
            className={
              completed ? "item-container completed" : "item-container"
            }
            key={id}
          >
            <p className="item">{name}</p>
            <button
              className="complete-btn btn"
              onClick={() => completeTask(id)}
            >
              <GrStatusGood />
            </button>
            <button className="edit-btn btn" onClick={() => editTask(id)}>
              <FiEdit />
            </button>
            <button className="delete-btn btn" onClick={() => deleteTask(id)}>
              <AiOutlineDelete />
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default List;
